import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductModal from "./components/ProductModal";
import Products from "./components/Products";
import ProductsContext from "./context/ProductContext";

function App() {
  const [currency, setCurrency] = useState("$");
  const [selectedProduct, setSelectedProduct] = useState({
    id: 0,
    name: "",
    price: 0,
    image: "",
  });

  const [cartItems, setCartItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showProductModal, setShowProductModal] = useState(false);

  return (
    <ProductsContext.Provider
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
        className={`w-full max-w-[1440px] mx-auto min-h-screen flex flex-col relative ${
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
    </ProductsContext.Provider>
  );
}

export default App;
