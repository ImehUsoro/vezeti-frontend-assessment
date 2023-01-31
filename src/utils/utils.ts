import { ProductProps } from "../typings/types";

export function filterCartItems(
  data: ProductProps[],
  key: (x: ProductProps) => string
) {
  return [...new Map(data.map((x) => [key(x), x])).values()];
}
