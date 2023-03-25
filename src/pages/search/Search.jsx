import React, { useEffect, useState, useContext } from "react";

import Navbar from '../UI/Navbar';
import SearchForm from './components/SearchForm';
import ResultList from './components/ResultList';
import MovieDetail from "../browse/components/MovieDetail ";
import { Context } from "../store/ProviderMovie";

import fetchAPI, { url } from "../store/API";

const Search = () => {
	const [searchMovie, setSearchMovie] = useState({});
	const [query, setQuery] = useState('');

  const { showDetail } = useContext(Context);
  const requests = fetchAPI();

	// get query input search
	const queryInput = (query) => {
		setQuery(query)
	}

	useEffect(() => {
    const fetchMovie = async() => {
      try {
        const res = await fetch(`${url}${requests.fetchSearch}&query=${query}`);
        if(!res.ok) {
          throw new Error('Something wrong!')
        }
        const data = await res.json();

        // check and set api
        if(Object.keys(data).length !== 0) {
          setSearchMovie(data)
        }
      }catch(e) {
        console.log(e.message)
      }
    };
    fetchMovie()
  }, [query])

  // console.log('search', searchMovie)
	return (
		<div style={{backgroundColor: '#000', height: '100vh'}}>
			<Navbar />
			<SearchForm query={queryInput} />
      <h3 style={{display: 'block', color: '#fff', margin: '20px 14px'}}>Search Result</h3>
			<ResultList resultSearch={searchMovie} />
      {showDetail && <MovieDetail />}
		</div>
	);
};

export default Search;
