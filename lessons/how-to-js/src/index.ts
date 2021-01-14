let numberOfFilms: number = +prompt( "Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB: { count: number, movies: object, actors: object, genres: string[], privat: boolean } = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastFilm1: string = prompt("Один из последних просмотренных фильмов?", ""),
    rate1: number = +prompt("На сколько оцените его?", ""),
    lastFilm2: string = prompt("Один из последних просмотренных фильмов?", ""),
    rate2: number = +prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastFilm1] = rate1;
personalMovieDB.movies[lastFilm2] = rate2;
console.log(personalMovieDB);
