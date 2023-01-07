import axios from "axios";

export const movies: string[] = [];

export function getMovies() {
  axios
    .get("https://6239b148bbe20c3f66c863ed.mockapi.io/movies")
    .then((res) => {
      res.data.map((movie: any) => movies.push(movie.name));
    });
}
