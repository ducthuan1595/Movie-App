import React, { useContext } from "react";
import YouTube from "react-youtube";

import styled from "./MovieDetail.module.css";
import { Context } from "../../store/ProviderMovie";

const MovieDetail = () => {
  // get data with useContext
  const { movieDetail, video, setShowDetail } = useContext(Context);

  const opts = {
    height: '340',
    width: '700',
    playerVars: {
      autoplay: 0,
    },
  };

  let subName;

  // content video youtube
  let videoContent;
  if (Object.keys(video).length !== 0) {
    if (video.results.length > 0) {
      let key = video.results[0].key;
      videoContent = <YouTube videoId={key} opts={opts} />

      // name sub
      subName = video.results[0].name;
    }
  }

  console.log(subName)
  console.log(movieDetail.name)
  // close detail movie
  const handleClose = () => {
    setShowDetail(false);
  }

  return (
    <>
      <div className={styled.detail} onClick={handleClose}>
        <div className={styled.left}>
          <h2>{movieDetail.name ? movieDetail.name : subName}</h2>
          <div className={styled.line}></div>
          <h4>Release Date: {movieDetail.first_air_date}</h4>
          <h4>Vote: {movieDetail.vote_average}/10</h4>
          <p>{movieDetail.overview}</p>
        </div>
        <div className={styled.right}>
          {videoContent ? videoContent : <img src={`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`} alt={movieDetail.name} className={styled.image} />}
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
