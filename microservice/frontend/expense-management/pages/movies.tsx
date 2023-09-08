import { useEffect, useState } from "react";
import Movie from "../components/movie";
import { getAllMovies } from "../services/movieApi";
const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const movies = await getAllMovies();
        setMovies(movies.results);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div className="pl-8 p-4  bg-gray-700">
      <div className=" grid grid-cols-4 gap-4">
        {movies.map((movie) => (
          <>
            <Movie key={movie.id} movie={movie} />
          </>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
