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
      className="shadow-md center flex flex-col rounded-xl hover:shadow-xl transition-all duration-200 select-none bg-white"
      onClick={() => {
        setSelectedProduct(product);
        setShowProductModal(true);
      }}
    >
      <img
        src={image}
        alt=""
        className="rounded-t-xl cursor-pointer w-full h-full"
      />
      <div className="flex w-full flex-col xxsm:flex-row justify-between items-center px-4 py-2 gap-4 xxsm:gap-0">
        <div className="cursor-pointer">
          <p className="">{name}</p>
          {currency === "₦" ? (
            <p className="productPrice">₦ {price.toLocaleString()}</p>
          ) : currency === "$" ? (
            <p className="productPrice">
              $ {(price / 460).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          ) : currency === "£" ? (
            <p className="productPrice">
              £ {(price / 570).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          ) : currency === "€" ? (
            <p className="productPrice">
              € {(price / 500).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          ) : (
            <p className="productPrice">
              ¥ {(price / 3).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          )}
        </div>
        <img
          src="/images/cart_icon.png"
          alt=""
          className="cursor-pointer self-center xxsm:self-auto"
        />
      </div>
    </div>
  );
};

export default Product;
