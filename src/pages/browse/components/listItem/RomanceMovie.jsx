import React from "react";

const RomanceMovie = (props) => {
  return (
    <>
      <h3>Lãng mạng</h3>
      <section>
        {props.movieItem.map((movie, index) => {
          return (
            <div key={index}>
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

export default RomanceMovie;
