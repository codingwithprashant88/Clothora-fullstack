import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Tilte from "./Tilte";
import ProductItem from "./ProductItem";

function TopProduct() {
  const { product } = useContext(ShopContext);
  const [topProducts, setTopProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (product.length > 0) {
      const topItem = product.filter((item) => item.topList);
      setTopProducts(topItem.slice(0, 5));
      setLoading(false);
    }
  }, [product]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Tilte text1={"TOP"} text2={"PRODUCTS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Our Top Products are the best picks based on popularity and customer favorites. These are the items everyone is buying right now.
        </p>
      </div>
      {loading && (
        <p className="text-center text-gray-500">Loading Top Products...</p>
      )}
      {!loading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {topProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TopProduct;
