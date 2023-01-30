import React, { useContext } from "react";
import ProductsContext from "../context/ProductContext";
import { ProductProps } from "../typings/types";
import { filterCartItems } from "../utils/utils";

const CheckoutModal = () => {
  const { cartItems, currency } = useContext(ProductsContext);

  const unique = filterCartItems(cartItems, (it: ProductProps) => it.name);

  return (
    <div className="border bg-quart py-4 rounded-md w-96">
      <p className="text-center mb-4">Items in Cart</p>
      {cartItems.length > 0
        ? unique.map((item) => (
            <div className="flex justify-between gap-4 px-4" key={item.id}>
              <p>
                {item.name}{" "}
                {`(${
                  cartItems.filter(
                    (product: ProductProps) => product.name === item.name
                  ).length
                })`}
              </p>
              {currency === "₦" ? (
                <p className="">
                  {`₦ ${(
                    cartItems.filter(
                      (product: ProductProps) => product.name === item.name
                    ).length * item.price
                  ).toLocaleString()}`}
                </p>
              ) : currency === "$" ? (
                <p className="inline-block">
                  {`$ ${(
                    (cartItems.filter(
                      (product: ProductProps) => product.name === item.name
                    ).length *
                      item.price) /
                    460
                  )
                    .toFixed(2)
                    .toLocaleString()}`}
                </p>
              ) : currency === "€" ? (
                <p className="inline-block">
                  {`€ ${(
                    (cartItems.filter(
                      (product: ProductProps) => product.name === item.name
                    ).length *
                      item.price) /
                    500
                  )
                    .toFixed(2)
                    .toLocaleString()}`}
                </p>
              ) : currency === "£" ? (
                <p className="inline-block">
                  {`£ ${(
                    (cartItems.filter(
                      (product: ProductProps) => product.name === item.name
                    ).length *
                      item.price) /
                    560
                  )
                    .toFixed(2)
                    .toLocaleString()}`}
                </p>
              ) : (
                <p className="inline-block">
                  {`¥ ${(
                    (cartItems.filter(
                      (product: ProductProps) => product.name === item.name
                    ).length *
                      item.price) /
                    3
                  )
                    .toFixed(2)
                    .toLocaleString()}`}
                </p>
              )}
            </div>
          ))
        : null}
      <div className="border border-secondary mt-3"></div>
      <div className="px-4 mt-3 flex justify-between items-center">
        <p className="">Total</p>
        {/* <p>1000</p> */}
        {currency === "₦" ? (
          <p className="text-center">
            {`₦ ${cartItems
              .reduce((acc: number, item: ProductProps) => acc + item.price, 0)
              .toLocaleString()}`}
          </p>
        ) : currency === "$" ? (
          <p className="text-center">
            {`$ ${(
              cartItems.reduce(
                (acc: number, item: ProductProps) => acc + item.price,
                0
              ) / 460
            )
              .toFixed(2)
              .toLocaleString()}`}
          </p>
        ) : currency === "€" ? (
          <p className="text-center">
            {`€ ${(
              cartItems.reduce(
                (acc: number, item: ProductProps) => acc + item.price,
                0
              ) / 500
            )
              .toFixed(2)
              .toLocaleString()}`}
          </p>
        ) : currency === "£" ? (
          <p className="text-center">
            {`£ ${(
              cartItems.reduce(
                (acc: number, item: ProductProps) => acc + item.price,
                0
              ) / 500
            )
              .toFixed(2)
              .toLocaleString()}`}
          </p>
        ) : (
          <p className="text-center">
            {`¥ ${(
              cartItems.reduce(
                (acc: number, item: ProductProps) => acc + item.price,
                0
              ) / 3
            )
              .toFixed(2)
              .toLocaleString()}`}
          </p>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;

//   {currency === "₦" ? (
//                 <p className="text-center">
//                     {`₦ ${cartItems.reduce(
//                         (acc: number, item: ProductProps) => acc + item.price,
//                         0
//                     ).toLocaleString()}`}
//                 </p>
//             ) : currency === "$" ? (
//                 <p className="text-center">
//                     {`$ ${(
//                         cartItems.reduce(
//                             (acc: number, item: ProductProps) => acc + item.price,
//                             0
//                         ) / 460
//                     )

//                         .toFixed(2)
//                         .toLocaleString()}`}
//                 </p>
//             )
