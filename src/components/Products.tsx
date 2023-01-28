import React, { useContext, useEffect, useState } from "react";
import Product from "./Product";
import { products } from "../ProductData/ProductData";
import ProductsContext from "../context/ProductContext";

const Products = () => {
  const { searchInput } = useContext(ProductsContext);
  //   console.log(filteredProducts);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput]);

  return (
    <div className="grow mb-10 mt-28 grid grid-cols-3 mx-auto max-w-6xl gap-x-10 gap-y-8">
      {filteredProducts.map((product, index) => {
        return <Product key={index} product={product} />;
      })}
    </div>
  );
};

export default Products;
