import Navbar from "./components/layout/Navbar";
import ItemList from "./components/Items/ItemList";
import Cart from "./components/Cart/Cart";

import "./App.css";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Welcome to my application</h1>} />
        <Route path="/shop" element={<ItemList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
