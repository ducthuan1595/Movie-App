/////////////////////////////////////////////
import React, { useContext, useEffect, useState } from "react";

import fetchAPI, { url } from "../../store/API";
import styled from "./MovieList.module.css";
import MovieDetail from "./MovieDetail ";
import { Context } from "../../store/ProviderMovie";

import OriginMovie from "./listItem/OriginMovie";
import TrendingMovie from "./listItem/TrendingMovie";
import TopRateMovie from "./listItem/TopRateMovie";
import ActionMovie from "./listItem/ActionMovie";
import ComedyMovie from "./listItem/ComedyMovie";
import HorrorMovie from "./listItem/HorrorMovie";
import RomanceMovie from "./listItem/RomanceMovie";
import DocMovie from "./listItem/DocMovie";

const MovieList = () => {
  const [movieData, setMovieData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { showDetail } = useContext(Context);

  const requests = fetchAPI();

  // fetch Api
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        // loop api movie
        let fetchMovie = [];
        for (const key in requests) {
          const res = await fetch(`${url}${requests[key]}`);
          if (!res.ok) {
            throw new Error("Something wrong!");
          }
          const data = await res.json();
          fetchMovie.push(data);
        }
        setMovieData({
          fetchTrending: fetchMovie[0],
          fetchNetflixOriginals: fetchMovie[1],
          fetchTopRated: fetchMovie[2],
          fetchActionMovies: fetchMovie[3],
          fetchComedyMovies: fetchMovie[4],
          fetchHorrorMovies: fetchMovie[5],
          fetchRomanceMovies: fetchMovie[6],
          fetchDocumentaries: fetchMovie[7],
        });
        setIsLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchMovie();
  }, []);

  console.log("listMovie", movieData);

  // render origin movie
  let fetchNetflixOriginalsCtx;
  if (Object.keys(movieData).length !== 0) {
    const movieItem = movieData.fetchNetflixOriginals.results.filter(
      (item) => item.poster_path !== null
    );
    if (movieItem) {
      fetchNetflixOriginalsCtx = (
        <div className={styled.origin}>
          <OriginMovie movieItem={movieItem} />
        </div>
      );
    }
  }

  // render trending movie
  let fetchTrendingCtx;
  if (Object.keys(movieData).length !== 0) {
    const movieItem = movieData.fetchTrending.results.filter(
      (item) => item.backdrop_path !== null
    );
    if (movieItem) {
      fetchTrendingCtx = (
        <div className={styled["list-movie"]}>
          <TrendingMovie movieItem={movieItem} />
        </div>
      );
    }
  }

  // render top rate movie
  let fetchTopRatedCtx;
  if (Object.keys(movieData).length !== 0) {
    const movieItem = movieData.fetchTopRated.results.filter(
      (item) => item.backdrop_path !== null
    );
    if (movieItem) {
      fetchTopRatedCtx = (
        <div className={styled["list-movie"]}>
          <TopRateMovie movieItem={movieItem} />
        </div>
      );
    }
  }

  // render action movie
  let fetchActionMoviesCtx;
  if (Object.keys(movieData).length !== 0) {
    const movieItem = movieData.fetchActionMovies.results.filter(
      (item) => item.backdrop_path !== null
    );
    if (movieItem) {
      fetchActionMoviesCtx = (
        <div className={styled["list-movie"]}>
          <ActionMovie movieItem={movieItem} />
        </div>
      );
    }
  }

  // render comedy movie
  let fetchComedyMoviesCtx;
  if (Object.keys(movieData).length !== 0) {
    const movieItem = movieData.fetchComedyMovies.results.filter(
      (item) => item.backdrop_path !== null
    );
    if (movieItem) {
      fetchComedyMoviesCtx = (
        <div className={styled["list-movie"]}>
          <ComedyMovie movieItem={movieItem} />
        </div>
      );
    }
  }

  // render comedy movie
  let fetchHorrorMoviesCtx;
  if (Object.keys(movieData).length !== 0) {
    const movieItem = movieData.fetchHorrorMovies.results.filter(
      (item) => item.backdrop_path !== null
    );
    if (movieItem) {
      fetchHorrorMoviesCtx = (
        <div className={styled["list-movie"]}>
          <HorrorMovie movieItem={movieItem} />
        </div>
      );
    }
  }

  // render comedy movie
  let fetchRomanceMoviesCtx;
  if (Object.keys(movieData).length !== 0) {
    const movieItem = movieData.fetchRomanceMovies.results.filter(
      (item) => item.backdrop_path !== null
    );
    if (movieItem) {
      fetchRomanceMoviesCtx = (
        <div className={styled["list-movie"]}>
          <RomanceMovie movieItem={movieItem} />
        </div>
      );
    }
  }

  // render comedy movie
  let fetchDocumentariesCtx;
  if (Object.keys(movieData).length !== 0) {
    const movieItem = movieData.fetchDocumentaries.results.filter(
      (item) => item.backdrop_path !== null
    );
    if (movieItem) {
      fetchDocumentariesCtx = (
        <div className={styled["list-movie"]}>
          <DocMovie movieItem={movieItem} />
        </div>
      );
    }
  }

  return (
    <>
      {isLoading && (
        <div className={styled.loading}>
          <p>Loading...</p>
        </div>
      )}
      {!isLoading && (
        <>
        <div className={styled["movies-list"]}>
          {fetchNetflixOriginalsCtx}
          {fetchTrendingCtx}
          {fetchTopRatedCtx}
          {fetchActionMoviesCtx}
          {fetchComedyMoviesCtx}
          {fetchHorrorMoviesCtx}
          {fetchRomanceMoviesCtx}
          {fetchDocumentariesCtx}
        </div>
        {showDetail && <MovieDetail />}
        </>
      )}
    </>
  );
};

export default MovieList;
