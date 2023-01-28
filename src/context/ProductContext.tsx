import { createContext } from "react";

const ProductsContext = createContext({
  selectedProducts: [],
  setSelectedProducts: (products: any) => {},
});

export default ProductsContext;
