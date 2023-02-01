import { useProductsContext } from "../context/ProductContext";
import { ProductProps } from "../typings/types";
import {
  findHowManyItems,
  findTotalForAllProducts,
  findTotalForEachProduct,
} from "../utils/helperFunctions";
import { filterCartItems } from "../utils/utils";

const CheckoutModal = () => {
  const { cartItems, currency, setCartItems } = useProductsContext();
  const unique = filterCartItems(cartItems, (it: ProductProps) => it.name);

  const handleIncrease = (item: ProductProps) => {
    const product = cartItems.find((it: ProductProps) => it.id === item.id);
    return product ? setCartItems((prev) => [...prev, product]) : null;
  };

  const handleDecrease = (item: ProductProps) => {
    const newCartItems = [...cartItems];
    const lastIndexOfProduct = newCartItems.lastIndexOf(item);
    newCartItems.splice(lastIndexOfProduct, 1);
    setCartItems(newCartItems);
  };

  return (
    <div className="border bg-quart py-4 rounded-md flex flex-col xxxsm:px-4 w-max">
      <p
        className={`text-center text-lg font-semibold ${
          cartItems.length > 0 ? "mb-4" : ""
        } `}
      >
        {cartItems.length > 0 ? "Your Cart" : "Your Cart is Empty"}
      </p>

      <div className="flex flex-col gap-4">
        {cartItems.length > 0
          ? unique.map((item) => (
              <div
                className="flex flex-col spaceOut gap-4 xsm:flex-row xsm:gap-8 px-4"
                key={item.id}
              >
                <span className="flex flex-col spaceOut w-[200px] mini:flex-row mini:w-[300px] gap-3">
                  <p>{item.name}</p>
                  <div className="flex center gap-2">
                    <button
                      onClick={() => handleDecrease(item)}
                      className="border border-secondary px-2 bg-white hover:bg-gray-400 active:bg-gray-600 transition-all duration-200 ease-out "
                    >
                      -
                    </button>
                    {`${findHowManyItems(cartItems, item.name)}`}
                    <button
                      className="border border-secondary px-2 bg-white hover:bg-gray-400 active:bg-gray-600 transition-all duration-200 ease-out"
                      onClick={() => handleIncrease(item)}
                    >
                      +
                    </button>
                  </div>
                </span>
                <p>{findTotalForEachProduct(cartItems, currency, item.name)}</p>
              </div>
            ))
          : null}
      </div>
      {cartItems.length > 0 && (
        <>
          <div className="border border-secondary mt-3"></div>
          <div className="px-4 mt-3 flex justify-between items-center">
            <p className="">Total</p>
            <p className="font-bold">
              {findTotalForAllProducts(cartItems, currency)}
            </p>
          </div>
          <button
            className="py-2 bg-emerald-500 hover:bg-emerald-600 rounded-md mx-auto w-1/2 mt-3 text-quart transition-all duration-200 ease-out active:bg-black"
            onClick={() => {
              window.alert("Thank you for shopping with us");
              window.location.reload();
            }}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CheckoutModal;
