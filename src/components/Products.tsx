import React, { useEffect, useState } from "react";
import Product from "./Product";
import { products } from "../ProductData/ProductData";
import { useProductsContext } from "../context/ProductContext";
import { MdOutlineSearch } from "react-icons/md";

const Products = () => {
  const { searchInput, showProductModal, showCheckoutModal, setSearchInput } =
    useProductsContext();
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setSearchInput(value);
  };

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput]);

  return (
    <>
      <div className="center gap-4 rounded-lg px-4 py-1 bg-ter border border-secondary mt-28 shadow-lg self-center md:hidden">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Search"
          className="rounded-lg outline-none text-lg bg-ter w-32 xxsm:w-auto"
        />
        <MdOutlineSearch color="#A0C3D2" size={"1.6rem"} />
      </div>
      {filteredProducts.length === 0 ? (
        <div className="flex-1 flex-col gap-6 center">
          <p className="text-2xl font-bold">No products found</p>
          <p className="text-gray-600">0 search result</p>
        </div>
      ) : (
        <>
          <div
            className={`flex-1 place-items-center auto-cols-auto mb-10 mt-10 md:mt-48 px-8 grid grid-cols-1 grid:grid-cols-2 lg:grid-cols-3 mx-auto max-w-6xl gap-x-10 gap-y-8 ${
              showProductModal || showCheckoutModal ? "pointer-events-none" : ""
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
