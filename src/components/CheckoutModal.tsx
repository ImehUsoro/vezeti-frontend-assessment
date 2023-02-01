import { useProductsContext } from "../context/ProductContext";
import { ProductProps } from "../typings/types";
import {
  findHowManyItems,
  findTotalForAllProducts,
  findTotalForEachProduct,
} from "../utils/helperFunctions";
import { filterCartItems } from "../utils/utils";

const CheckoutModal = () => {
  const { cartItems, currency } = useProductsContext();

  const unique = filterCartItems(cartItems, (it: ProductProps) => it.name);

  return (
    <div className="border bg-quart py-4 rounded-md flex flex-col px-4 w-max">
      <p className={`text-center ${cartItems.length > 0 ? "mb-4" : ""} `}>
        {cartItems.length > 0 ? "Your Cart" : "Your Cart is Empty"}
      </p>

      <div className="flex flex-col gap-4">
        {cartItems.length > 0
          ? unique.map((item) => (
              <div className="flex justify-between gap-4 px-4" key={item.id}>
                <span className="flex center gap-3">
                  <p>{item.name}</p>
                  <div className="flex center gap-2">
                    <button className="border border-black px-2">-</button>
                    {`${findHowManyItems(cartItems, item.name)}`}
                    <button className="border border-black px-2">+</button>
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
            className="py-2 bg-emerald-700 rounded-md mx-auto w-1/2 mt-3 text-quart"
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
