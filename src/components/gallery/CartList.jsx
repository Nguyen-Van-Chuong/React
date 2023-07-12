import React from "react";
import { useGallery } from "../../contexts/gallery-context";

const CartList = () => {
  const { cartItems, removeFromCart } = useGallery();
  console.log("🚀 --> CartList --> cartItems:", cartItems);
  return (
    <div className="flex flex-col items-start gap-5 px-5 py-10">
      {cartItems.length > 0 &&
        cartItems.map((item) => (
          <div className="flex items-center justify-between" key={item.id}>
            <img
              src={item.url}
              alt=""
              className="object-cover w-10 h-10 mr-5 rounded-full"
            />
            <button
              className="p-3 text-sm font-semibold text-white bg-red-500 rounded-lg"
              onClick={() => {
                removeFromCart(item.id);
              }}
            >
              {item.id}
              delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default CartList;
