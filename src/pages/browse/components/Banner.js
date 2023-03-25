///////////////////////
import React, { useEffect, useState } from "react";

import fetchAPI, { url } from "../../store/API";
import classes from "./Banner.module.css";

const Banner = () => {
  const [movieRandom, setMovieRandom] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const { fetchNetflixOriginals } = fetchAPI();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(`${url}${fetchNetflixOriginals}`);
        if (!res.ok) {
          throw new Error("Something wrong!");
        }
        const data = await res.json();
        // console.log("data", data);

        // check data & backdrop path != null
        if (data.results.length > 0) {
          const randomData = data.results.filter(
            (item) => item.backdrop_path !== null
          );
          let indexRandom = Math.floor(Math.random() * randomData.length);
          setMovieRandom(randomData[indexRandom]);
          setIsLoading(false);
        }
      } catch (e) {
        setError(true);
        console.log(e);
      }
    };
    fetchMovie();
  }, []);

  const loading = (
    <section
      style={{
        textAlign: "center",
        fontSize: "30px",
        color: "#000",
        marginTop: "70px",
      }}
    >
      <p>Loading...</p>
    </section>
  );

  let errorContent = (
    <section
      style={{
        textAlign: "center",
        fontSize: "20px",
        color: "red",
        marginTop: "50px",
      }}
    >
      <p>{error.message}</p>
    </section>
  );

  let bannerContent;
  if (movieRandom && movieRandom !== null && movieRandom !== "undefined") {
    bannerContent = (
      <div
        className={classes.banner}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieRandom.backdrop_path})`,
        }}
      >
        <div className={classes.group}>
          <h1>{movieRandom.name}</h1>
          <div className={classes.actions}>
            <button>Play</button>
            <button>My List</button>
          </div>
          <div className={classes.overview}>{movieRandom.overview}</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {isLoading && loading}
      {error && errorContent}
      {!isLoading && !error && bannerContent}
    </div>
  );
};

export default Banner;
