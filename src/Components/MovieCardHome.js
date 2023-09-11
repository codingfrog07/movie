import React, { useState, useEffect } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

const MovieCardHome = ({ title, poster_path, vote_average }) => {
  return (
    <div className="movie-card-container-home">
      <img src={IMG_BASE_URL + poster_path} alt="영화포스터" />
      <div className="movie-info-home">
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default MovieCardHome;
