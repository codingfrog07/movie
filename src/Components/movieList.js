// import { dummy } from "../dummy";
import { useEffect, useState } from "react";
import tmdb from "../api/tmdb";
import MovieCard from "./MovieCard";

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await tmdb.get("movie/popular");
                setMovies(response.data.results);
            } catch (error) {
                console.error("영화 데이터를 불러오는 중 에러 발생:", error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className="movie-list-container">
            {movies.map((movie, index) => (
                <MovieCard
                    key={index}
                    title={movie.title}
                    vote_average={movie.vote_average}
                    poster_path={movie.poster_path}
                />
            ))}
        </div>
    );
};

export default MovieList;