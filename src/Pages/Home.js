import React, { useEffect, useRef, useState } from "react";
import MovieCardHome from "../Components/MovieCardHome";
import tmdb from "../api/tmdb";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

function Home() {
  const [movies, setMovies] = useState([]);
  const [currentPosterIndex, setCurrentPosterIndex] = useState(0);
  const timerRef = useRef(null);

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

  useEffect(() => {
    // 자동 슬라이드 타이머 설정 (5초마다 다음 포스터로 이동)
    timerRef.current = setInterval(() => {
      setCurrentPosterIndex((prevIndex) =>
        prevIndex === movies.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    // 컴포넌트가 unmount 될 때 타이머 정리
    return () => {
      clearInterval(timerRef.current);
    };
  }, [movies]);

  return (
    <div className="home-container">
      <div className="home-main">
        <div className="movie-slider-container">
          {movies.length > 0 && (
            <MovieCardHome
              title={movies[currentPosterIndex].title}
              vote_average={movies[currentPosterIndex].vote_average}
              poster_path={movies[currentPosterIndex].poster_path}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
