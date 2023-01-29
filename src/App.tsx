import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductModal from "./components/ProductModal";
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
  const [showProductModal, setShowProductModal] = useState(false);

  return (
    <ProductsContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        cartItems,
        setCartItems,
        searchInput,
        setSearchInput,
        showProductModal,
        setShowProductModal,
      }}
    >
      <div
        className={`w-full max-w-[1440px] mx-auto min-h-screen flex flex-col relative ${
          showProductModal ? "overflow-hidden" : ""
        }`}
      >
        <Header />
        <Products />
        <Footer />
        {showProductModal && <ProductModal />}
      </div>
    </ProductsContext.Provider>
  );
}

export default App;
