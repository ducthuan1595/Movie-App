///////////////////////////////////////////

// https://api.themoviedb.org/3/movie/550?api_key=012caa0c0ae0d8eed438d22e0651f73d
export const url = 'https://api.themoviedb.org/3';
export const API_KEY = "012caa0c0ae0d8eed438d22e0651f73d";


const fetchAPI = () => {
  const API_KEY = "012caa0c0ae0d8eed438d22e0651f73d";

  const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
  };

  return requests;
};

export default fetchAPI;
