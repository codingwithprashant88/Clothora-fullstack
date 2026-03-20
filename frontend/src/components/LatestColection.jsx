import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Tilte from "./Tilte";
import ProductItem from "./ProductItem";

function LatestColection() {
  const { product } = useContext(ShopContext);

  const [letestProduct, setLatestProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (product && product.length > 0) {
      setLatestProduct(product);
      setLoading(false);
    }
  }, [product]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Tilte text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover our Latest Collection – a fresh drop of trending styles,
          premium quality, and designs made for everyday confidence. Upgrade
          your wardrobe with pieces that match your vibe.
        </p>
      </div>
      {/*Rendering Products*/}
      {loading && (
        <p className="text-center text-gray-500">Loading products...</p>
      )}
      {!loading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {letestProduct.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default LatestColection;
