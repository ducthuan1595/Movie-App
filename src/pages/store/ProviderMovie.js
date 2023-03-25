import React, { useState, createContext, useEffect } from "react";
import { API_KEY } from "./API";

export const Context = createContext();

const ProviderDetail = ({ children }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [movieDetail, setMovieDetail] = useState({});
  const [video, setVideo] = useState({});
  // const [search, setSearch] = useState("");

  const getMovieDetail = (movie) => {
    console.log('provider', movie);
    setMovieDetail(movie);
  };

  useEffect(() => {
    const fetchApi = async () => {
      if (Object.keys(movieDetail).length !== 0) {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieDetail.id}/videos?api_key=${API_KEY}`
        );
        if (!res.ok) {
          throw new Error("Something wrong!");
        }
        const data = await res.json();
        if (Object.keys(data).length !== 0) {
          console.log(data);
          setVideo(data);
        }
      }
    };

    fetchApi();
  }, [movieDetail]);

  return (
    <Context.Provider
      value={{ showDetail, setShowDetail, movieDetail, video, getMovieDetail }}
    >
      {children}
    </Context.Provider>
  );
};
export default ProviderDetail;
