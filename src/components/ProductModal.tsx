import React, { useContext } from "react";
import ProductsContext from "../context/ProductContext";

const ProductModal = () => {
  const { selectedProduct, setSelectedProduct } = useContext(ProductsContext);
  const { name, price, image } = selectedProduct;

  return <div>{}</div>;
};

export default ProductModal;
