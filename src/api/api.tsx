import axios from "axios";
export const movies: string[] = [];

export async function getMovies() {
  await axios.get("https://hangman-backend.onrender.com/api").then((res) => {
    res.data.map((movie: any) => movies.push(movie.title));
  });
}

getMovies();
