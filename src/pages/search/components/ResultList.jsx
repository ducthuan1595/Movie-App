import React, { useContext, useState } from "react";

import { Context } from "../../store/ProviderMovie";
import styled from './ResultList.module.css';

const ResultList = ({ resultSearch }) => {
  const { setShowDetail, getMovieDetail } = useContext(Context);

  const handleClick = (movie) => {
    getMovieDetail(movie);
    setShowDetail(true);
  }

  let resultCtx;
  if(Object.keys(resultSearch).length !== 0) {
    if(resultSearch.results.length > 0) {
      const checkResult = resultSearch.results.filter(item => item.poster_path !== null);

      resultCtx = <div className={styled.search}>

        {checkResult.map((item, index) => {
          return (
            <div key={index} className={styled.item} onClick={handleClick.bind(null, item)} ><img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} /></div>
          )
        })}

      </div>
    }
    
  }

  return (
    <>
      <div className={styled.result}>{resultCtx ? resultCtx : (<p className={styled.empty}>Please, enter to find the movie.</p>)}</div>
    </>
  )
}

export default ResultList;