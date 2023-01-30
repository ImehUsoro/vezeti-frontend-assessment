import React, { useContext } from "react";
import ProductsContext from "../context/ProductContext";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductModal = () => {
  const { selectedProduct, setShowProductModal, setCartItems } =
    useContext(ProductsContext);
  const { name, price } = selectedProduct;

  return (
    <div className="fixed top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 bg-white flex flex-col gap-5 max-w-full max-h-full rounded-lg px-8 py-4 z-10 shadow-lg">
      <div className="flex gap-4 center">
        <div>
          <p className="text-center">Product to add</p>
          <p className="text-center font-bold">{name}</p>
        </div>
        <div>
          <p className="text-center">Price</p>
          <p className="text-center font-bold">₦ {price.toLocaleString()}</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 center">
        <p>Are you sure you want to add this item to your cart?</p>
        <div className="flex gap-8">
          <button
            onClick={() => setShowProductModal(false)}
            className="bg-red-600 px-3 py-2 rounded-md"
          >
            NO
          </button>
          <button
            onClick={() => {
              setShowProductModal(false);
              setCartItems((prev: ProductProps[]) => [
                ...prev,
                selectedProduct,
              ]);
            }}
            className="bg-green-500 px-3 py-2 rounded-md"
          >
            YES
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
