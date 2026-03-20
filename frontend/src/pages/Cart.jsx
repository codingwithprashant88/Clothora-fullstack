import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Tilte from "../components/Tilte";
import CartTotal from "../components/CartTotal";
import { toast } from "react-toastify";

function Cart() {
  const { product, currency, cartItems, updateQuantity, navigate, token } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          tempData.push({
            _id: itemId,
            size: size,
            quantity: cartItems[itemId][size],
          });
        }
      }
    }

    setCartData(tempData);
  }, [cartItems]);

   const messageHandler = () => {
     toast.error("You'r not login")
   }
  
  return  (
 <div className="max-w-6xl mx-auto px-4">

  {/* Cart Items */}
  {cartData.map((item, index) => {
    const productData = product.find((p) => p._id === item._id);
    if (!productData) return null;

    return (
      <div
        key={index}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-5 border-t"
      >
        {/* Product Info */}
        <div className="flex items-center gap-4 w-full sm:w-[50%]">
          <img
            src={productData.image[0]}
            alt=""
            className="w-20 h-20 object-cover rounded-lg"
          />

          <div>
            <p className="text-base font-semibold">{productData.name}</p>

            <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
              <p className="font-medium text-gray-900">
                {currency}
                {productData.price}
              </p>

              <span className="px-2 py-1 border rounded bg-gray-100">
                {item.size}
              </span>
            </div>
          </div>
        </div>

        {/* Quantity */}
        <div className="flex items-center gap-3">
          <input
            onChange={(e) =>
              e.target.value === "" || e.target.value === "0"
                ? null
                : updateQuantity(item._id, item.size, Number(e.target.value))
            }
            type="number"
            min={1}
            defaultValue={item.quantity}
            className="w-16 border rounded px-2 py-1 text-center"
          />
        </div>

        {/* Remove */}
        <button
          onClick={() => updateQuantity(item._id, item.size, 0)}
          className="text-red-500 hover:text-red-700 text-sm font-medium"
        >
          Remove
        </button>
      </div>
    );
  })}

  {/* Cart Total Section */}
  <div className="flex justify-end my-16">
    <div className="w-full sm:w-[450px]">
      <CartTotal />
      <div className="w-full text-end">
             {token ? <button onClick={() => navigate('/place-order')} className="bg-black text-white text-sm my-8 px-8 py-3 active:bg-black/50">PROCEED TO CHECKOUT</button> : <button onClick={messageHandler} className="bg-black text-white text-sm my-8 px-8 py-3 active:bg-black/50">PROCEED TO CHECKOUT</button>}
      </div>
    </div>
  </div>

</div>
  );
}

export default Cart;
