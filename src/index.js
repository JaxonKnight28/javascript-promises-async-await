import { fetchWithTimeout } from "./services";

export function fetchMovies() {
    const resolveFunction = () => movies;
    fetchWithTimeout(1000).then(resolveFunction())
}

var moviePromise = fetchMovies()
moviePromise.then(result)
console.log(results)

var movies = require('./data/movies.json')