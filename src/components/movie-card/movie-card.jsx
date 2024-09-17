import React from "react";
import PropTypes from "prop-types";

// The BookCard function component
export const MovieCard = ({ movie, onBookClick }) => {
  return (
    <div
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      {movie.title}
    </div>
  );
};

// Here is where we define all the props constraints for the BookCard
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    directors: PropTypes.string,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};