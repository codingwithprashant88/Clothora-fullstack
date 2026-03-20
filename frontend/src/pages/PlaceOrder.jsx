import React, { useContext, useState } from "react";
import Tilte from "../components/Tilte";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

function PlaceOrder() {
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartAmount,
    getCartAmount,
    delivery_fee,
    product,
    setCartItems,
  } = useContext(ShopContext);

  const [method, setMethod] = useState("cod");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmithandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];

      for (const items in cartItems) {
        for (const size in cartItems[items]) {
          if (cartItems[items][size] > 0) {
            const itemInfo = structuredClone(
              product.find((product) => product._id === items),
            );
            if (itemInfo) {
              itemInfo.size = size;
              itemInfo.quantity = cartItems[items][size];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        // APi calls for COD

        case "cod":
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            { headers: { token } },
          );

          if (response.data.success) {
            setCartItems({});
            toast.success(response.data.message)
            navigate("/orders");

          } else {
            toast.error(response.data.message);
          }
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  };

  return (
    <form
      onSubmit={onSubmithandler}
      className="flex flex-col sm:flex-row justify-between gap-10 pt-8 sm:pt-14 min-h-[80vh] border-t"
    >
      {/* Left Side - Delivery Form */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[500px]">
        <div className="text-2xl mb-4">
          <Tilte text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        {/* Name */}
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-black"
            type="text"
            placeholder="First name"
          />
          <input
            required
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-black"
            type="text"
            placeholder="Last name"
          />
        </div>

        {/* Email */}
        <input
          required
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
          className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-black"
          type="email"
          placeholder="Email address"
        />

        {/* Street */}
        <input
          required
          onChange={onChangeHandler}
          name="street"
          value={formData.street}
          className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-black"
          type="text"
          placeholder="Street"
        />

        {/* City & State */}
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="city"
            value={formData.city}
            className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-black"
            type="text"
            placeholder="City"
          />
          <input
            onChange={onChangeHandler}
            name="state"
            value={formData.state}
            className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-black"
            type="text"
            placeholder="State"
          />
        </div>

        {/* Zip & Country */}
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="zipCode"
            value={formData.zipCode}
            className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-black"
            type="number"
            placeholder="Zip code"
          />
          <input
            required
            onChange={onChangeHandler}
            name="country"
            value={formData.country}
            className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-black"
            type="text"
            placeholder="Country"
          />
        </div>

        {/* Phone */}
        <input
          required
          onChange={onChangeHandler}
          name="phone"
          value={formData.phone}
          className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-black"
          type="number"
          placeholder="Phone number"
        />
      </div>

      {/*-------------Right Side---------------- */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Tilte text1={"PAYMENT"} text2={"METHOD"} />
          {/*---------------Payment Method Section------------------*/}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-2">
            <div
              onClick={() => setMethod("paypal")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${method === "paypal" ? "bg-green-500" : ""}`}
              ></p>
              <img className="h-10 mx-4" src={assets.paypal} alt="" />
            </div>
            <div
              onClick={() => setMethod("payoneer")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${method === "payoneer" ? "bg-green-500" : ""}`}
              ></p>
              <img className="h-12 mx-4" src={assets.payoneer} alt="" />
            </div>
            <div
              onClick={() => setMethod("phonepay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${method === "phonepay" ? "bg-green-500" : ""}`}
              ></p>
              <img className="h-14 mx-4" src={assets.phonepay} alt="" />
            </div>
            <div
              onClick={() => setMethod("apple")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${method === "apple" ? "bg-green-500" : ""}`}
              ></p>
              <img className="h-14 mx-4" src={assets.apple} alt="" />
            </div>
            <div
              onClick={() => setMethod("gpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${method === "gpay" ? "bg-green-500" : ""}`}
              ></p>
              <img className="h-8 mx-4" src={assets.gpay} alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod" ? "bg-green-500" : ""}`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
              type="submit"
              className="bg-black text-white px-16 py-3 text-sm active:bg-black/50 "
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
