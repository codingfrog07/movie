import React, { useState, useEffect } from "react";
import { BsHouseDoorFill } from "react-icons/bs";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Like({ id, title, poster_path, vote_average }) {
    const [likedMovies, setLikedMovies] = useState([]);

    // 로컬 스토리지에서 좋아요 목록 불러오기
    useEffect(() => {
        const storedLikedMovies =
            JSON.parse(localStorage.getItem("likedMovies")) || [];
        setLikedMovies(storedLikedMovies);
    }, []);

    return (
        <div className="like-movie">
            <div className="like-movie-container">
                <ul>
                    {likedMovies.map((movie) => (
                        <li key={movie.id}>
                            <img
                                src={IMG_BASE_URL + movie.poster_path}
                                alt={`${movie.title} 포스터`}
                            />
                            <div className="like-movie-info">
                                <h4>{movie.title}</h4>
                                <span>{movie.vote_average}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
