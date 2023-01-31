import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductModal from "./components/ProductModal";
import Products from "./components/Products";
import { ProductProvider } from "./context/ProductContext";
import { ProductProps } from "./typings/types";

function App() {
  const [currency, setCurrency] = useState("₦");
  const [searchInput, setSearchInput] = useState("");
  const [showProductModal, setShowProductModal] = useState(false);
  const [cartItems, setCartItems] = useState([] as ProductProps[]);
  const [selectedProduct, setSelectedProduct] = useState({
    id: 0,
    name: "",
    price: 0,
    image: "",
  });

  return (
    <ProductProvider
      value={{
        currency,
        setCurrency,
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
        className={`w-full max-w-screen-desktop desktop:max-w-full mx-auto min-h-screen flex flex-col relative ${
          showProductModal ? "overflow-hidden" : ""
        }`}
      >
        <div
          className={`flex flex-col flex-1 ${
            showProductModal ? "opacity-60" : ""
          }`}
        >
          <Header />
          <Products />
          <Footer />
        </div>
        {showProductModal && <ProductModal />}
      </div>
    </ProductProvider>
  );
}

export default App;
