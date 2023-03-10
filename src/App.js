import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";
//f46d0431

// creationg api variable
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=f46d0431";

function App() {
  // to map all the movies, create a new state
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // calling API by function
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("The last of us");
  }, []); //used empty dependancy array if you want to call it from the start
  return (
    <div className="app">
      <h1>MovieSegame</h1>
      <div className="search">
        <input
          placeholder="search for movies/series/game"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>

        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)}></img>
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found.</h2>
        </div>
      )}
    </div>
  );
}

export default App;
