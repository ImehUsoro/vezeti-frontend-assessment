import React, { useEffect, useState } from "react";
import Product from "./Product";
import { products } from "../ProductData/ProductData";
import { useProductsContext } from "../context/ProductContext";

const Products = () => {
  const { searchInput, showProductModal } = useProductsContext();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput]);

  return (
    <>
      {filteredProducts.length === 0 ? (
        <div className="flex-1 flex-col gap-6 center">
          <p className="text-2xl font-bold">No products found</p>
          <p className="text-gray-600">0 search result</p>
        </div>
      ) : (
        <>
          <div
            className={`flex-1 place-items-center auto-cols-auto mb-10 mt-36 px-8 grid grid-cols-1 grid:grid-cols-2 lg:grid-cols-3 mx-auto max-w-6xl gap-x-10 gap-y-8 ${
              showProductModal ? "pointer-events-none" : ""
            }`}
          >
            {filteredProducts.map((product, index) => {
              return <Product key={index} product={product} />;
            })}
          </div>
          {searchInput && (
            <p className="text-center text-gray-600">
              {filteredProducts.length} search results
            </p>
          )}
        </>
      )}
    </>
  );
};

export default Products;
