let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?",'');
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms () {
    for (let i = 0; i < personalMovieDB.count; i++) {
        const filmTitle = prompt('Один из просмотренных фильмов?',''), 
              filmValue = prompt('На сколько оцените его?','');
    
        if (filmTitle.length == 0 || filmValue.length == 0 || 
            filmTitle.length > 50 || filmValue.length > 50 || 
            filmTitle == null || filmValue == null) {
            alert('Неверное название фильма или оценка. Введите еще раз.');
            i--;
        } else {
            personalMovieDB.movies[filmTitle] = filmValue;
        }
    }
}

function detectPersonalLever() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
    }
}

console.log(personalMovieDB);

function showMyDB () {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB.movies);
    }
}

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] =
         prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}