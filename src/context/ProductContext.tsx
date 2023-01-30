import { createContext } from "react";
import { ProductProps } from "../typings/types";

const ProductsContext = createContext({
  currency: "₦",
  setCurrency: (currency: string) => {},
  selectedProduct: {
    id: 0,
    name: "",
    price: 0,
    image: "",
  },
  setSelectedProduct: (products: ProductProps) => {},
  // cartItems: [] as ProductProps[],
  cartItems: [] as any,
  setCartItems: (products: any) => {},
  searchInput: "",
  setSearchInput: (input: string) => {},
  showProductModal: false,
  setShowProductModal: (input: boolean) => {},
});

export default ProductsContext;
