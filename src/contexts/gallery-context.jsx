import { createContext, useContext, useState } from "react";
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
  const [photos, setPhotos] = useState(fakeData);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);
  const value = {
    photos,
    cartItems,
    favoriteList,
    setFavoriteList,
    setPhotos,
    setCartItems,
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
