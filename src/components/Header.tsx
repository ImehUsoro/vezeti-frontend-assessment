import React, { useContext } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import ProductsContext from "../context/ProductContext";
const Header = () => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const { selectedProducts } = useContext(ProductsContext);

  console.log({ header: selectedProducts });
  return (
    <header className="spaceOut px-10 py-8">
      <div className="flex gap-2">
        <img src="/images/cart_logo.png" alt="" />
        <p className="font-raleway text-3xl cursor-pointer">Vezeti Store</p>
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
