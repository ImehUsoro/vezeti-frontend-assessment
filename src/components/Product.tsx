import { useProductsContext } from "../context/ProductContext";
import { ProductProps } from "../typings/types";

interface Props {
  product: ProductProps;
}

const Product = ({ product }: Props) => {
  const { name, price, image } = product;
  const { setSelectedProduct, setShowProductModal, currency } =
    useProductsContext();

  return (
    <div
      className="shadow-md center flex flex-col rounded-xl hover:shadow-xl transition-all duration-200 select-none bg-white max-h-[360px]"
      onClick={() => {
        setSelectedProduct(product);
        setShowProductModal(true);
      }}
    >
      <img src={image} alt="" className="rounded-t-xl cursor-pointer" />
      <div className="flex w-full justify-between px-4 py-2">
        <div className="cursor-pointer">
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
            <p className="font-bold">
              ¥ {(price / 3).toFixed(2).toLocaleString()}
            </p>
          )}
        </div>
        <img src="/images/cart_icon.png" alt="" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Product;
