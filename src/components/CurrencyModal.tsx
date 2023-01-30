import React, { useContext } from "react";
import ProductsContext from "../context/ProductContext";

interface currencyProps {
  setShowModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const CurrencyModal = ({ setShowModal }: currencyProps) => {
  const { setCurrency } = useContext(ProductsContext);

  return (
    <div className="rounded-md shadow-lg py-2 flex flex-col gap-2 bg-secondary text-ter z-20 select-none">
      <p
        className="currencyStyle"
        onClick={() => {
          setCurrency("₦");
          setShowModal(false);
        }}
      >
        NGN
      </p>
      <p
        className="currencyStyle"
        onClick={() => {
          setCurrency("$");
          setShowModal(false);
        }}
      >
        USD
      </p>
      <p
        className="currencyStyle"
        onClick={() => {
          setCurrency("€");
          setShowModal(false);
        }}
      >
        EUR
      </p>
      <p
        className="currencyStyle"
        onClick={() => {
          setCurrency("£");
          setShowModal(false);
        }}
      >
        GBP
      </p>
      <p
        className="currencyStyle"
        onClick={() => {
          setCurrency("¥");
          setShowModal(false);
        }}
      >
        JPY
      </p>
    </div>
  );
};

export default CurrencyModal;
