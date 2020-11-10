'use strict';

let numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?');
let personalMoieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres:[],
    privat:false,
}

AskMovieCounter();
AskMovieCounter();

console.log(personalMoieDB.movies);

function AskMovieCounter(){
    let film,count;

    film = prompt('Один из последних просмотренных фильмов?','');
    count = prompt('На сколько оцените его?','');
    
    AddAnswerMovies(film,count);
}

function AddAnswerMovies(film, count){
    personalMoieDB.movies[film]=count;
}