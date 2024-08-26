import axios from "axios";

const instance = new axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjM4NDQ0MjAxNGQ3M2U5M2VhYmI5YTBkMjBkMjM5ZiIsIm5iZiI6MTcyMzY3MzIxNC41MzkwNjIsInN1YiI6IjY2YTM4ZDFmNzZlYjI2YTFjYTM4Njc5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mlpg_76REiPIL5KapQlgz9bVsBQhieP4UDNhb574xEU",
  },
});

export default instance;
