import { dummy } from "../dummy";
import MovieCard from "./MovieCard";

const MovieList = () => {
    return <div className="movie-list-container">
        {dummy.results.map((item) => {
            return <MovieCard
                title={item.title}
                vote_average={item.vote_average}
                poster_path={item.poster_path}
            />
        })}
    </div>
}

export default MovieList;