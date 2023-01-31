import { createContext, useContext } from "react";
import { ProductProps } from "../typings/types";

interface ProductsContextProps {
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
  selectedProduct: ProductProps;
  setSelectedProduct: React.Dispatch<React.SetStateAction<ProductProps>>;
  cartItems: ProductProps[];
  setCartItems: React.Dispatch<React.SetStateAction<ProductProps[]>>;
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  showProductModal: boolean;
  setShowProductModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProductsContext = createContext<ProductsContextProps>(null as any);

export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error("useProductsContext must be used within a ProductsContext");
  }
  return context;
};

export const ProductProvider: React.Provider<ProductsContextProps> =
  ProductsContext.Provider;
