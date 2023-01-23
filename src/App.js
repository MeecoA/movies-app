import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";
//f46d0431

// creationg api variable
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=f46d0431";

const movie1 = {
  Title: "Wonder Woman",
  Year: "2017",
  imdbID: "tt0451279",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
};

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
    searchMovies("Wonder");
  }, []);
  return (
    <div className="app">
      <h1>Movies 101</h1>
      <div className="search">
        <input
          placeholder="search for movies"
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
