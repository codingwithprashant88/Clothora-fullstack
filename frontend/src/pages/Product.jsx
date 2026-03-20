import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets";
import RelatedProduct from "../components/RelatedProduct";

function Product() {
  const { productId } = useParams();

  const { product, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    product.map((item) => {
      if (item._id === productId) {
        setProductData(item);

        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Image */}
        <div className="flex-1 flex flex-col-reverse sm:flex-row gap-4">
          {/* Thumbnail Images */}
          <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto sm:max-h-[500px]">
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                onClick={() => setImage(item)}
                className={`w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md cursor-pointer border transition-all duration-200
        ${image === item ? "border-black scale-105" : "border-gray-300 hover:border-gray-500"}`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full sm:w-[80%]  rounded-lg overflow-hidden">
            <img
              src={image}
              className="w-full h-[450px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        {/**-----------product info------------*/}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2 ">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star} alt="" className="w-3.5" />
            <img src={assets.star} alt="" className="w-3.5" />
            <img src={assets.star} alt="" className="w-3.5" />
            <img src={assets.star} alt="" className="w-3.5" />
            <img src={assets.star} alt="" className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 font-medium md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-200 ${item === size ? "border-orange-500" : ""}`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
            <div>
              <button
                onClick={() => addToCart(productData._id, size)}
                className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 "
              >
                ADD TO CART
              </button>
              <hr className="mt-8 sm:w-4/5 " />
              <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                <p>100% Original product.</p>
                <p>Cash on delivery is available in this product.</p>
                <p>Easy return and exchange policy within 7 days.</p>
              </div>
            </div>
          </div>

          {/**------------------Description & Review Section-------------- */}
          <div className="mt-20">
            <div className="flex">
              <b className="border px-5 text-sm">Description</b>
              <p className="border px-5 text-sm">Reviews (122)</p>
            </div>
            <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
              <p>{productData.description}</p>
            </div>
          </div>
        </div>
      </div>
          {/**-------Display Product Releted---------------*/}
          <RelatedProduct
            category={productData.category}
            subCategory={productData.subCategory}
          />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Product;
