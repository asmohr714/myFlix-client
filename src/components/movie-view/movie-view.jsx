import React from "react";
import PropTypes from "prop-types";

export const MovieView = ({ movie, onBackClick }) => {
    return (
      <div>
        <div>
          <img src={movie.ImagePath} alt={movie.Title} />
        </div>
        <div>
          <span>Title: </span>
          <span>{movie.title}</span>
        </div>
        <div>
          <span>Director: </span>
          <span>{movie.director.Name}</span>
        </div>
        <button onClick={onBackClick}>Back</button>
      </div>
    );
  };

  MovieView.propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      directors: PropTypes.string,
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired,
  };

