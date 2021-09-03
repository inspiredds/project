"use sctrict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?",'');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const filmTitle = prompt('Один из просмотренных фильмов?','');

personalMovieDB.movies[filmTitle] = prompt('На сколько оцените его?','');

console.log(personalMovieDB);