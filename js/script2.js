
const personalMovieDB = {
    count: '',
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        while (personalMovieDB.count == null || personalMovieDB.count === '' ||
               isNaN(personalMovieDB.count)) {
            personalMovieDB.count = 
            +prompt("Сколько фильмов вы уже посмотрели?",''); 
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < personalMovieDB.count; i++) {
            const filmTitle = prompt('Один из просмотренных фильмов?',''), 
                  filmValue = prompt('На сколько оцените его?','');
        
            if (filmTitle == null || filmValue == null ||
                filmTitle == '' || filmValue == '' || 
                filmTitle.length > 50 || filmValue.length > 50) {
                alert('Неверное название фильма или оценка. Введите еще раз.');
                i--;
            } else {
                personalMovieDB.movies[filmTitle] = filmValue;
            }
        }
    },
    detectPersonalLever: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            alert('Вы киноман');
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB.movies);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            const preGenre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (preGenre == null || preGenre.length == 0) {
                console.log('Неверное название жанра');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = preGenre;   
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;   
        } else {
            personalMovieDB.privat = true;
        }
    }
};

personalMovieDB.start();
personalMovieDB.writeYourGenres();

console.log(personalMovieDB);