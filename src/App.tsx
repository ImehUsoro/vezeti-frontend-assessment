import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import ProductsContext from "./context/ProductContext";
import { products } from "./ProductData/ProductData";
interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

function App() {
  const [selectedProduct, setSelectedProduct] = useState({
    id: 0,
    name: "",
    price: 0,
    image: "",
  });

  const [cartItems, setCartItems] = useState<any>([]);
  const [searchInput, setSearchInput] = useState("");

  return (
    <ProductsContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        cartItems,
        setCartItems,
        searchInput,
        setSearchInput,
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto min-h-screen flex flex-col ">
        <Header />
        <Products />
        <Footer />
      </div>
    </ProductsContext.Provider>
  );
}

export default App;
