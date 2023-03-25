import React, { useContext } from "react";
import { Context } from "../../../store/ProviderMovie";
const TopRateMovie = (props) => {
  const ctx = useContext(Context);

  const handleRedirect = (movie) => {
    ctx.getMovieDetail(movie);
    ctx.setShowDetail(true);
  }
  return (
    <>
      <h3>Xếp hạng cao</h3>
      <section>
        {props.movieItem.map((movie, index) => {
          return (
            <div key={index} onClick={handleRedirect.bind(null, movie)}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.original_title}
              />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default TopRateMovie;
