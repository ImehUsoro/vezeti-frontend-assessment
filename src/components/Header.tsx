import React, { useEffect, useRef, useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { MdOutlineSearch } from "react-icons/md";
import { useProductsContext } from "../context/ProductContext";
import CurrencyModal from "./CurrencyModal";
import CheckoutModal from "./CheckoutModal";

const Header = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);
  const checkoutRef = useRef<HTMLDivElement>(null);

  const {
    setSearchInput,
    cartItems,
    showProductModal,
    currency,
    showCheckoutModal,
    setShowCheckoutModal,
  } = useProductsContext();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setSearchInput(value);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (showModal && ref.current && !ref.current.contains(e.target as Node)) {
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showModal]);

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (
        showCheckoutModal &&
        checkoutRef.current &&
        !checkoutRef.current.contains(e.target as Node)
      ) {
        setShowCheckoutModal(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showCheckoutModal]);

  return (
    <header
      className={`spaceOut px-10 py-8 select-none fixed top-0 shadow-md z-20 w-full bg-main ${
        showProductModal ? "pointer-events-none" : ""
      }`}
    >
      <div className="flex gap-2 items-center cursor-pointer">
        <img src="/images/cart_logo.png" alt="" className="w-6 xsm:w-auto" />
        <p className="font-raleway text-xl xsm:text-3xl">Vezeti Store</p>
      </div>
      <div className="center gap-4 rounded-lg px-4 py-1 bg-ter border border-secondary hidden md:inline-flex">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Search for a product"
          className="rounded-lg  outline-none text-lg bg-ter "
        />
        <MdOutlineSearch color="#A0C3D2" size={"1.6rem"} />
      </div>
      <div className="spaceOut gap-2 xsm:gap-8">
        <div className="center xsm:gap-2 relative">
          <p>{currency}</p>
          {showModal ? (
            <div onClick={() => setShowModal(false)} className="cursor-pointer">
              <RiArrowDropUpLine size={"1.6rem"} />
            </div>
          ) : (
            <div onClick={() => setShowModal(true)} className="cursor-pointer">
              <RiArrowDropDownLine size={"1.6rem"} />
            </div>
          )}
          {showModal && (
            <div ref={ref} className="absolute top-8">
              <CurrencyModal setShowModal={setShowModal} />
            </div>
          )}
        </div>
        <div
          className="relative"
          onClick={() => setShowCheckoutModal((prev) => !prev)}
        >
          <div className="relative">
            <img
              src="/images/shopping_cart.png"
              alt="cart icon"
              className="cursor-pointer"
            />
            {cartItems.length > 0 && (
              <div className="absolute bottom-2 left-4 bg-secondary h-5 w-5 rounded-full center">
                <p className="text-ter">{cartItems.length}</p>
              </div>
            )}
          </div>
          {showCheckoutModal && (
            <div className="absolute top-12 -right-2" ref={checkoutRef}>
              <CheckoutModal />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
