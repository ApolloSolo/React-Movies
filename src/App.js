import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com/?apikey=377eff31";


const App = () => {
    const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
  };

  useEffect(() => {
    searchMovies("The Lord of the Rings");
  }, []);

  return (
    <div className="app">
      <h1>Movies-R-Us</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      {
          movies.length > 0
          ? (
            <div className="container">
                {movies.map((movie) => (
                    <MovieCard movie={movie}/>
                ))}
            </div>
          ) : (
              <div className="empty">
                  <h2>No Movies Found</h2>
              </div>
          )
      }


    </div>
  );
};

export default App;
