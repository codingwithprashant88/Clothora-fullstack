import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets";

function Orders({ token }) {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }

    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } },
      );
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const statusHandler = async (e, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: e.target.value },
        { headers: { token } },
      );
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>

      <div className="space-y-6">
        {orders.map((order, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-5 flex flex-col md:flex-row gap-6"
          >
            {/* Left Image */}
            <div className="flex justify-center items-center">
              <img className="w-24" src={assets.parcel} alt="order" />
            </div>

            {/* Middle Content */}
            <div className="flex-1 space-y-2 text-sm text-gray-700">
              {/* Items */}
              <div>
                <p className="font-semibold text-gray-900">Items:</p>
                {order.items.map((item, i) => (
                  <p key={i}>
                    {item.name} x {item.quantity}{" "}
                    <span className="text-gray-500">({item.size})</span>
                  </p>
                ))}
              </div>

              {/* User */}
              <p className="font-medium">
                {order.address.firstName} {order.address.lastName}
              </p>

              {/* Address */}
              <div className="text-gray-500">
                <p>{order.address.street}</p>
                <p>
                  {order.address.city}, {order.address.state},{" "}
                  {order.address.country} - {order.address.zipCode}
                </p>
              </div>

              {/* Phone */}
              <p>📞 {order.address.phone}</p>

              {/* Order Info */}
              <div className="flex flex-wrap gap-4 mt-2 text-xs text-gray-600">
                <p>Items: {order.items.length}</p>
                <p>Method: {order.paymentMethod}</p>
                <p>
                  Payment:{" "}
                  <span
                    className={
                      order.payment ? "text-green-600" : "text-red-500"
                    }
                  >
                    {order.payment ? "Done" : "Pending"}
                  </span>
                </p>
                <p>Date: {new Date(order.date).toLocaleDateString()}</p>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col justify-between items-end gap-4">
              {/* Price */}
              <p className="text-lg font-bold text-gray-800">
                {currency}
                {order.amount}
              </p>

              {/* Status */}
              <select 
              onChange={(e) => statusHandler(e, order._id)}
                value={order.status}
                className="border px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option>Order Placed</option>
                <option>Packing</option>
                <option>Shipped</option>
                <option>Out for delivery</option>
                <option>Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
