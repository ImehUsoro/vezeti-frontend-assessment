import React, { useContext } from "react";
import ProductsContext from "../context/ProductContext";

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}

const Product = ({ product }: ProductProps) => {
  const { name, price, image } = product;
  const { selectedProduct, setSelectedProduct, setShowProductModal } =
    useContext(ProductsContext);

  //   console.log(selectedProduct);

  return (
    <div
      className="shadow-md center flex flex-col center rounded-xl hover:shadow-xl cursor-pointer transition-all duration-200 select-none bg-white max-h-[360px]"
      onClick={() => {
        setSelectedProduct(product);
        setShowProductModal(true);
      }}
    >
      <img src={image} alt="" className="w-96 h-80 object-cover rounded-t-xl" />
      <p>{name}</p>
      <p className="font-bold">₦ {price.toLocaleString()}</p>
    </div>
  );
};

export default Product;
