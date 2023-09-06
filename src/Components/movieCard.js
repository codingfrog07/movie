import React, { useState, useEffect } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

const MovieCard = ({ title, poster_path, vote_average }) => {
    const [like, setLike] = useState(false);

    useEffect(() => {
        const likedMovies =
            JSON.parse(localStorage.getItem("likedMovies")) || [];
        const movieData = likedMovies.find(movie => movie.title === title);
        setLike(!!movieData);
    }, [title]);

    const handleCheck = () => {
        const likedMovies =
            JSON.parse(localStorage.getItem("likedMovies")) || [];

        if (like) {
            const updatedLikedMovies = likedMovies.filter((movie) => movie.title !== title);
            localStorage.setItem("likedMovies", JSON.stringify(updatedLikedMovies));
        } else {
            const newMovieData = { title, poster_path, vote_average };
            localStorage.setItem("likedMovies", JSON.stringify([...likedMovies, newMovieData]));
        }

        setLike(!like);
    }

    return (
        <div className="movie-card-container">
            <img src={IMG_BASE_URL + poster_path} alt="영화포스터" />
            <div className="movie-info">
                <h4>{title}</h4>
                {/* <span>{vote_average}</span> */}
                <div className="likeBtn" onClick={handleCheck}>
                    {like ? <BsHeartFill /> : <BsHeart />}
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
