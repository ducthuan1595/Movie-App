import React from 'react';

import Navbar from '../UI/Navbar';
import Banner from './components/Banner';
import MovieList from './components/MovieList ';

function Browse() {
	return (
		<div className="app">
			<Navbar />
			<Banner />
			<MovieList />
			{/* <div style={{height: '2000px'}}></div> */}
		</div>
	);
}

export default Browse;

