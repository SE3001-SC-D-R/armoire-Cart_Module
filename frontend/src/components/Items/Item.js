import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

import dummyImage from "../../images/product-1.png";
import crossImage from "../../images/cross.svg";

function Item(props) {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItem(props.item);
  };

  return (
    <div className="col-12 col-md-4 col-lg-3 mb-5">
      <div className="product-item">
        <img
          src={dummyImage}
          className="img-fluid product-thumbnail"
          alt="Not Found"
        />
        <h3 className="product-title">{props.item.Name}</h3>
        <strong className="product-price">${props.item.Price}</strong>
        <p>{props.item.Description}</p>

        <span onClick={addToCartHandler} className="icon-cross">
          <img src={crossImage} className="img-fluid" alt="Not Found" />
        </span>
      </div>
    </div>
  );
}

export default Item;
