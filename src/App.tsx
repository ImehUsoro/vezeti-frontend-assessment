import React from "react";
import Header from "./components/Header";
import ProductsContext from "./context/ProductContext";

function App() {
  const [selectedProducts, setSelectedProducts] = React.useState<any>([]);
  return (
    <ProductsContext.Provider value={{ selectedProducts, setSelectedProducts }}>
      <div className="w-full max-w-[1440px]  mx-auto">
        <Header />
      </div>
    </ProductsContext.Provider>
  );
}

export default App;
// max-w-7xl
