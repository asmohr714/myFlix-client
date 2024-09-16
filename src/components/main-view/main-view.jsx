import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Aliens",
      image:
        "https://m.media-amazon.com/images/I/910xaEX2ThL._AC_UY327_FMwebp_QL65_.jpg",
      director: "James Cameron",
    },
    {
      id: 2,
      title: "The VVitch",
      image:
        "https://m.media-amazon.com/images/I/81Z2E0P8GlL._AC_UY327_FMwebp_QL65_.jpg",
      director: "Robert Eggers",
    },
    {
      id: 3,
      title: "Sleeper",
      image:
        "https://m.media-amazon.com/images/I/7181hYzVEnL._AC_UL480_FMwebp_QL65_.jpg",
      director: "Woody Allen",
    },
    {
      id: 4,
      title: "There Will Be Blood",
      image:
        "https://m.media-amazon.com/images/I/81Hm0bQxxML._AC_UY327_FMwebp_QL65_.jpg",
      director: "Paul Thomas Anderson",
    },
    {
      id: 5,
      title: "No Country for Old Men",
      image:
        "https://m.media-amazon.com/images/I/81VMYoT--IL._AC_UY327_FMwebp_QL65_.jpg",
      director: "Joel Cohen, Ethan Cohen",
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};