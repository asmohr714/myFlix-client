import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Aliens",
      image:
        "https://www.bing.com/th?id=OIP.5p6yheON0N1h9Q3vG7ZItwHaLH&w=155&h=200&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2",
      director: "James Cameron",
    },
    {
      id: 2,
      title: "The Witch",
      image:
        "https://th.bing.com/th/id/OIP.p7OHxY0vqnznQR8MUkwAvQHaLH?w=204&h=306&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      director: "Robert Eggers",
    },
    {
      id: 3,
      title: "Sleeper",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg",
      director: "Woody Allen",
    },
    {
      id: 4,
      title: "There Will Be Blood",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51HbNW6RzhL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      director: "Paul Thomas Anderson",
    },
    {
      id: 5,
      title: "No Country for Old Men",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41MBLi5a4jL._SX384_BO1,204,203,200_.jpg",
      director: "Joel Cohen, Ethan Cohen",
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView book={selectedMovie} onBackClick={() => setSelectedBook(null)} />
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
            setSelectedBook(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};