import React from "react";
import { useGallery } from "../../contexts/gallery-context";
import PropTypes from "prop-types";

const PhotoList = () => {
  const { photos, cartItems } = useGallery();
  console.log("🚀 --> PhotoList --> cartItems:", cartItems);

  return (
    <div className="px-5 py-10">
      <div className="grid grid-cols-4 gap-10">
        {photos.length > 0 &&
          photos.map((item) => (
            // eslint-disable-next-line react/no-unknown-property
            <PhotoItem key={item.id} info={item}></PhotoItem>
          ))}
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const PhotoItem = ({ info: { url, isFavorite, id } }) => {
  const { toggleFavorite, addToCart } = useGallery();

  return (
    <div className="relative h-[300px] cursor-pointer group">
      <img src={url} alt="" className="object-cover w-full h-full text-white" />
      <span
        className="absolute z-10 invisible w-10 h-10 transition-all opacity-0 cursor-pointer right-5 top-5 group-hover:visible group-hover:opacity-90"
        onClick={() => {
          toggleFavorite(id);
        }}
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            fill={isFavorite ? "red" : "white"}
          ></path>
        </svg>
      </span>
      <button
        className="absolute invisible px-4 py-2 text-black transition-all bg-white rounded-lg opacity-0 bottom-5 left-2/4 -translate-x-2/4 group-hover:visible group-hover:opacity-90"
        onClick={() => {
          addToCart({ url, isFavorite, id });
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

PhotoItem.protoTypes = {
  url: PropTypes.string,
  id: PropTypes.number,
  isFavorite: PropTypes.bool,
};

export default PhotoList;
