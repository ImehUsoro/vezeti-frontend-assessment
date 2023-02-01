import { useProductsContext } from "../context/ProductContext";
import { ProductProps } from "../typings/types";
import { convertToCurrency } from "../utils/helperFunctions";

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
          <p className="text-center">{name}</p>
          <p className="productPrice">{convertToCurrency(price, currency)}</p>
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
