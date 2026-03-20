import React, { useContext, useState } from "react";
import { assets } from "../assets/index";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    setToken,
    token,
    setCartItems,
  } = useContext(ShopContext);

  const onRemoveHandler = () => {
    console.log("Logout clicked");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between px-6 py-4 pt-0 font-medium max-w-7xl mx-auto">
      {/* Left Side (Logo + Menu) */}
      <div className="flex items-center gap-10">
        <Link to="/">
          <img src={assets.Logo} alt="logo" className="w-44" />
        </Link>

        <ul className="hidden sm:flex gap-8 text-sm text-gray-700">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink
            to="/collaction"
            className="flex flex-col items-center gap-1"
          >
            <p>COLLACTION</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>
      </div>

      {/* Right Side (Icons) */}
      <div className="flex items-center gap-6 z-10">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search}
          alt="search"
          className="w-8 cursor-pointer"
        />

        <div className="group relative">
          {token ? (
            <>
              <img src={assets.profile} className="w-8 cursor-pointer" />

              <div className="hidden group-hover:block absolute right-0 top-full mt-1">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow">
                  <p className="cursor-pointer hover:text-black">My Profile</p>
                  <Link to='/orders'><p className="cursor-pointer hover:text-black">Orders</p></Link>

                  <button
                    onClick={onRemoveHandler}
                    className="cursor-pointer hover:text-black bg-blue-600 text-white text-center rounded-md py-1"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </>
          ) : (
            <Link to="/login">
              <img src={assets.profile} className="w-8 cursor-pointer" />
            </Link>
          )}
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart} alt="" className="w-8 cursor-pointer" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu}
          alt=""
          className="w-8 cursor-pointer sm:hidden"
        />
      </div>
      {/*Side bar menu for small screen*/}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-10 ${visible ? "w-full" : "w-0"}`}
      >
        <div className="flex flex-col text-gray-600 ">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3"
          >
            <img src={assets.backmenu} className="w-8" alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contect"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
