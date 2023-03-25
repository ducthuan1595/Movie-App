import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";

import { Context } from "../../../store/ProviderMovie";

const OriginMovie = (props) => {
  const ctx = useContext(Context);
  const handleRedirect = (movie) => {
    ctx.getMovieDetail(movie);
    ctx.setShowDetail(true);
  }

  return (
    <>
      {props.movieItem.map((movie, index) => {
          return (
            <div key={index} onClick={handleRedirect.bind(null, movie)} >
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_name} />
            </div>
          )
          })}
    </>
  )
}

export default OriginMovie;