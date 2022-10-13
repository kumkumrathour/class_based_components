import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies ,setMovies] = useState([])
  function fetchMoviesHandler(){
      fetch ('https://swapi.dev/api/starships/')
      .then((response) =>{
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map(movieData => {
          return {
            id:movieData.model,
            title:movieData.name,
            openingText : movieData.manufacturer,
            releaseData: movieData.length
          }
        })
        setMovies(transformedMovies)
      })
    }

  return (
    <React.Fragment>
      <section>
        <button onClick ={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}
export default App;
