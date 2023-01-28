import { createContext } from "react";
interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductsContext = createContext({
  selectedProduct: {
    id: 0,
    name: "",
    price: 0,
    image: "",
  },
  setSelectedProduct: (products: any) => {},
  cartItems: [],
  setCartItems: (products: any) => {},
  searchInput: "",
  setSearchInput: (input: string) => {},
});

export default ProductsContext;
