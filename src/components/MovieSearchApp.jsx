import axios from "axios";
import React, { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import LoadingSkeleton from "./loading/LoadingSkeleton";

const MovieSearchApp = () => {
  const [movie, setMovie] = useState([]);
  const [key, setKey] = useState("spider");
  const [loading, setLoading] = useState(true);
  const debounceValue = useDebounce(key, 500);
  function handleSearch(e) {
    setKey(e.target.value);
  }
  useEffect(() => {
    async function fetchData(key) {
      setLoading(true);
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=6474a459c0671b38d0ffdd488f901005&language='en-US'&query='${key}'`
      );
      if (res.data.results) {
        setMovie(res.data.results);
        setLoading(false);
      }
    }
    fetchData(key);
  }, [debounceValue]);
  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto mb-5">
        <input
          type="text"
          className="w-full p-5 rounded-lg border border-purple-400"
          placeholder="Search movie..."
          onChange={handleSearch}
        />
      </div>
      {loading && (
        <div className="grid grid-cols-3 gap-10">
          <MovieItemLoading></MovieItemLoading>
          <MovieItemLoading></MovieItemLoading>
          <MovieItemLoading></MovieItemLoading>
        </div>
      )}
      <div className="grid grid-cols-3 gap-10">
        {!loading &&
          movie.length > 0 &&
          movie.map((item, index) => (
            <MovieItem key={item.id} data={item}></MovieItem>
          ))}
      </div>
    </div>
  );
};

const MovieItemLoading = () => {
  return (
    <div className="bg-white p-3 rounded-2xl shadow-sm">
      <div className="h-[297px]">
        <LoadingSkeleton
          height="100%"
          width="100%"
          border="5px"
        ></LoadingSkeleton>
      </div>
      <div className="p-7">
        <h3 className="text-lg font-bold pb-4">
          <LoadingSkeleton height="20px"></LoadingSkeleton>
        </h3>
        <p>
          <LoadingSkeleton height="20px"></LoadingSkeleton>
        </p>
      </div>
    </div>
  );
};

const MovieItem = ({ data }) => {
  return (
    <div className="bg-white p-3 rounded-2xl shadow-sm">
      <div className="h-[297px]">
        <img
          src={
            data.poster_path &&
            "https://image.tmdb.org/t/p/original/" + data.poster_path
          }
          className="object-cover w-full h-full rounded-lg"
          alt=""
        />
      </div>
      <div className="p-7">
        <h3 className="text-lg font-bold pb-4">{data.original_title}</h3>
        <p>{data.overview}</p>
      </div>
    </div>
  );
};

export default MovieSearchApp;
