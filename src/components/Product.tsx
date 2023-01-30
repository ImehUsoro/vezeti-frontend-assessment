import React, { useContext } from "react";
import ProductsContext from "../context/ProductContext";
import { ProductProps } from "../typings/types";

interface Props {
  product: ProductProps;
}

const Product = ({ product }: Props) => {
  const { name, price, image } = product;
  const { setSelectedProduct, setShowProductModal, currency } =
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
      {currency === "₦" ? (
        <p className="font-bold">₦ {price.toLocaleString()}</p>
      ) : currency === "$" ? (
        <p className="font-bold">
          $ {(price / 460).toFixed(2).toLocaleString()}
        </p>
      ) : currency === "£" ? (
        <p className="font-bold">
          £ {(price / 570).toFixed(2).toLocaleString()}
        </p>
      ) : currency === "€" ? (
        <p className="font-bold">
          € {(price / 500).toFixed(2).toLocaleString()}
        </p>
      ) : (
        <p className="font-bold">¥ {(price / 3).toFixed(2).toLocaleString()}</p>
      )}
    </div>
  );
};

export default Product;
