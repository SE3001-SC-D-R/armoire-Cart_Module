import React, { useState } from "react";

const CartContext = React.createContext({
  items: [],
  total: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  increaseQuantity: (id) => {},
  decreaseQuantity: (id) => {},
});

const sorter = (items) => {
  return items.sort((a, b) => {
    if (a.id > b.id) {
      return 1;
    } else if (a.id < b.id) {
      return -1;
    } else {
      return 0;
    }
  });
};

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const onAddItem = (item) => {
    const existingItem = cartItems.find((i) => i.id === item.id);

    if (!existingItem) {
      const cartItem = {
        name: item.name,
        price: item.price,
        id: item.id,
        quantity: 1,
        total: item.price,
      };

      setCartItems((prev) => [...prev, cartItem]);
    } else {
      const cartItem = {
        name: item.name,
        price: item.price,
        id: item.id,
        quantity: existingItem.quantity + 1,
        total: item.price * (existingItem.quantity + 1),
      };

      setCartItems((prev) => {
        const updatedItems = prev.filter((i) => i.id !== item.id);
        return [...updatedItems, cartItem];
      });
    }
    setTotal((prev) => prev + item.price);
  };

  const onIncreaseQuantity = (id) => {
    const existingItem = cartItems.find((i) => i.id === id);
    existingItem.quantity = existingItem.quantity + 1;
    existingItem.total = existingItem.price * existingItem.quantity;
    setTotal((prev) => prev + existingItem.price);

    setCartItems((prev) => {
      const updatedItems = prev.filter((i) => i.id !== existingItem.id);
      return sorter([...updatedItems, existingItem]);
    });
  };

  const onDecreaseQuantity = (id) => {
    const existingItem = cartItems.find((i) => i.id === id);
    existingItem.quantity = existingItem.quantity - 1;
    existingItem.total = existingItem.price * existingItem.quantity;
    setTotal((prev) => prev - existingItem.price);

    if (existingItem.quantity === 0) {
      setCartItems((prev) => {
        const updatedItems = prev.filter((i) => i.id !== existingItem.id);
        return sorter([...updatedItems]);
      });
    } else {
      setCartItems((prev) => {
        const updatedItems = prev.filter((i) => i.id !== existingItem.id);
        return sorter([...updatedItems, existingItem]);
      });
    }
  };

  const onRemoveItem = (id) => {
    const existingItem = cartItems.find((i) => i.id === id);
    setTotal((prev) => prev - existingItem.total);

    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addItem: onAddItem,
        removeItem: onRemoveItem,
        total: total,
        increaseQuantity: onIncreaseQuantity,
        decreaseQuantity: onDecreaseQuantity,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
