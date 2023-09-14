import axios from "axios";

const fetchMovies = async ({ queryKey }) => {
  const [key, id] = queryKey;
  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?with_genres=${id}&page=1&api_key=d38aa8716411ef7d8e9054b34a6678ac`
  );
  return response.data;
};

export default fetchMovies;
