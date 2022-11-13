import React, { useState, useEffect } from "react";
import Item from "./Item";

const URL = "http://localhost:5000/shop-items";

const ItemList = () => {
  const [shopItems, setShopItems] = useState([]);

  useEffect(() => {
    const getItemsFromServer = async () => {
      const response = await fetch(URL);
      const data = await response.json();

      const transformedData = data.map((item) => {
        return {
          id: item._id,
          Name: item.Name,
          url: item.url,
          Category: item.Category,
          Price: item.Price,
          stock: item.stock,
          Description: item.Description,
          selectedImage: item.selectedImage,
        };
      });

      setShopItems(transformedData);
    };

    getItemsFromServer();
  }, []);

  return (
    <div data-testid= "itemListComp" className="untree_co-section product-section before-footer-section">
      <div className="container">
        <div className="row">
          {shopItems.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>  
      </div>
    </div>
  );
};

export default ItemList;
