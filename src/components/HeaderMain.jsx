import React from "react";
import { useAuth } from "../contexts/authContext";
import { useGallery } from "../contexts/gallery-context";

const HeaderMain = () => {
  const { user, setUser } = useAuth();
  const { photos, cartItems } = useGallery();
  const favoriteCount =
    photos.length > 0
      ? photos.filter((item) => item.isFavorite === true).length
      : 0;
  const cartItemCount = cartItems.length > 0 ? cartItems.length : 0;

  return (
    <div className="flex items-center justify-center p-4 bg-white shadow-md">
      {user ? (
        <>
          <div className="flex items-center gap-x-3">
            <img
              src="https://source.unsplash.com/random"
              alt=""
              className="object-cover w-10 h-10 rounded-full"
            />
            <span className="text-sm font-medium">
              Welcome back <strong>Chuong</strong>
            </span>
          </div>

          <div className="flex items-center gap-5 ml-auto mr-5">
            <span className="relative">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  fill="black"
                ></path>
              </svg>
              <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs text-white translate-x-1/2 rounded-full bg-slate-400">
                {cartItemCount}
              </span>
            </span>
            <span className="relative">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  fill="red"
                ></path>
              </svg>
              <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs text-white translate-x-1/2 rounded-full bg-slate-400">
                {favoriteCount}
              </span>
            </span>
          </div>
          <button
            className="p-2 ml-auto bg-gray-300 rounded-md"
            onClick={() => {
              setUser(null);
            }}
          >
            Log out
          </button>
        </>
      ) : (
        <span className="text-sm font-medium">Welcome</span>
      )}
    </div>
  );
};

export default HeaderMain;
