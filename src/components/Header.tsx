import React, { useContext, useEffect, useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { MdOutlineSearch } from "react-icons/md";
import ProductsContext from "../context/ProductContext";
interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const Header = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { searchInput, setSearchInput, cartItems } =
    useContext(ProductsContext);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setSearchInput(value);
  };

  // console.log(cartItems.length);

  return (
    <header className="spaceOut px-10 py-8">
      <div className="flex gap-2">
        <img src="/images/cart_logo.png" alt="" />
        <p className="font-raleway text-3xl cursor-pointer">Vezeti Store</p>
      </div>
      <div className="center gap-4 rounded-lg px-4 py-1 bg-ter border border-secondary ">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Search for a product"
          className="rounded-lg  outline-none text-lg bg-ter"
        />
        <MdOutlineSearch color="#A0C3D2" size={"1.6rem"} />
      </div>
      <div className="spaceOut gap-8">
        <div className="center gap-2">
          <p>₦</p>
          {showModal ? (
            <div onClick={() => setShowModal(false)}>
              <RiArrowDropUpLine />
            </div>
          ) : (
            <div onClick={() => setShowModal(true)}>
              <RiArrowDropDownLine />
            </div>
          )}
        </div>
        <img src="/images/shopping_cart.png" alt="" />
      </div>
    </header>
  );
};

export default Header;
