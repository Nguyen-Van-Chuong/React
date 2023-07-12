import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
const fakeData = [
  {
    id: 1,
    url: "https://source.unsplash.com/random",
    isFavorite: false,
  },
  {
    id: 2,
    url: "https://source.unsplash.com/random",
    isFavorite: false,
  },
  {
    id: 3,
    url: "https://source.unsplash.com/random",
    isFavorite: false,
  },
  {
    id: 4,
    url: "https://source.unsplash.com/random",
    isFavorite: false,
  },
  {
    id: 5,
    url: "https://source.unsplash.com/random",
    isFavorite: false,
  },
  {
    id: 6,
    url: "https://source.unsplash.com/random",
    isFavorite: false,
  },
];

const GalleryContext = createContext();
function GalleryProvider(props) {
  const [storedValue, setStoredValue] = useLocalStorage("photos", fakeData);

  const [photos, setPhotos] = useState(storedValue);
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);
  // const [cartItems, setCartItems] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);

  function toggleFavorite(photoId) {
    const updatedArray = photos.map((photo) => {
      if (photo.id === photoId) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setPhotos(updatedArray);
    // setFavoriteValue(updatedArray);
    setStoredValue(updatedArray);
  }
  function addToCart(newItem) {
    setCartItems((prevItems) => {
      const isExisted = prevItems.some((item) => item.id === newItem.id);
      if (isExisted) return [...prevItems];
      return [...prevItems, newItem];
    });
  }
  function removeFromCart(id) {
    setCartItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  }
  const value = {
    photos,
    cartItems,
    favoriteList,
    setFavoriteList,
    setPhotos,
    setCartItems,
    toggleFavorite,
    addToCart,
    removeFromCart,
  };
  return (
    <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
  );
}
function useGallery() {
  const context = useContext(GalleryContext);
  if (typeof context === "undefined")
    throw new Error("useGallery must be used within a GalleryProvider");
  return context;
}
export { useGallery, GalleryProvider };
