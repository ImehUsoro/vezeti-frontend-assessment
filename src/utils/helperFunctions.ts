import { ProductProps } from "../typings/types";
const convertToLocaleString = (amount: number) => {
  return amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const convertToCurrency = (amount: number, currency: string) => {
  if (currency === "$") {
    const dollarEquivalent = amount / 460;
    return `${currency} ${convertToLocaleString(dollarEquivalent)}`;
  }
  if (currency === "€") {
    const euroEquivalent = amount / 500;
    return `${currency} ${convertToLocaleString(euroEquivalent)}`;
  }
  if (currency === "£") {
    const poundEquivalent = amount / 560;
    return `${currency} ${convertToLocaleString(poundEquivalent)}`;
  }
  if (currency === "¥") {
    const yenEquivalent = amount / 3;
    return `${currency} ${convertToLocaleString(yenEquivalent)}`;
  }

  return `${currency} ${amount.toLocaleString()} `;
};

export const calculateTotal = (cart: ProductProps[], currency: string) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  return total;
};

export const findHowManyItems = (cart: ProductProps[], productName: string) => {
  const total = cart.filter((item) => item.name === productName).length;
  return total;
};

export const findTotalForEachProduct = (
  cart: ProductProps[],
  currency: string,
  productName: string
) => {
  const total = cart
    .filter((item) => item.name === productName)
    .reduce((acc, item) => acc + item.price, 0);

  if (currency === "$") {
    const dollarEquivalent = total / 460;
    return `${currency} ${convertToLocaleString(dollarEquivalent)}`;
  }
  if (currency === "€") {
    const euroEquivalent = total / 500;
    return `${currency} ${convertToLocaleString(euroEquivalent)}`;
  }
  if (currency === "£") {
    const poundEquivalent = total / 560;
    return `${currency} ${convertToLocaleString(poundEquivalent)}`;
  }
  if (currency === "¥") {
    const yenEquivalent = total / 3;
    return `${currency} ${convertToLocaleString(yenEquivalent)}`;
  }
  return `₦ ${total.toLocaleString()}`;
};

export const findTotalForAllProducts = (
  cart: ProductProps[],
  currency: string
) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  if (currency === "$") {
    const dollarEquivalent = total / 460;
    return `${currency} ${convertToLocaleString(dollarEquivalent)}`;
  }
  if (currency === "€") {
    const euroEquivalent = total / 500;
    return `${currency} ${convertToLocaleString(euroEquivalent)}`;
  }
  if (currency === "£") {
    const poundEquivalent = total / 560;
    return `${currency} ${convertToLocaleString(poundEquivalent)}`;
  }
  if (currency === "¥") {
    const yenEquivalent = total / 3;
    return `${currency} ${convertToLocaleString(yenEquivalent)}`;
  }
  return `₦ ${total.toLocaleString()}`;
};
