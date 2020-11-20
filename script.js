'use strict';

const personalMoieDB = {
    count: "",
    movies: {},
    actors:{},
    genres:[],
    privat:false,
};

checknumberOfFilms();
AskUserAboutFilms(personalMoieDB.count);
console.log(personalMoieDB);
alertUserCountReiting();

function AskUserAboutFilms (numberOfFilms){
    let i = 0;

    while ( i < numberOfFilms){
        let bool = AskMovieCounter();
        if (bool == true) {
           i++;
        }
   };
}

function checknumberOfFilms() {
    let numberOfFilms;

    while (isNaN(numberOfFilms)|| numberOfFilms == 0 || numberOfFilms.length > 50){
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?');
    }
    personalMoieDB.count = numberOfFilms;
}

function AskMovieCounter(){
    let film,count,bool;

    film = prompt('Один из последних просмотренных фильмов?', '');
    count = prompt('На сколько оцените его?', '');
    
    if (film == null || count == null) {
        return(false);
    }else if (film.length == 0 || count.length == 0 || film.length > 50 || count.length > 50 ) {
        return(false);
    }else if(isNaN(count)){ 
        return(false);
    } else {
        AddAnswerMovies(film,count);
        return(true);
    }
}

function AddAnswerMovies(film, count){
    personalMoieDB.movies[film] = count;
}

function alertUserCountReiting(){
    let message;
    if (personalMoieDB.count < 10){
        message = "Просмотрено довольно мало фильмов";
    }else if (personalMoieDB.count >= 10 &&  personalMoieDB.count <= 30) {
        message = "Вы классический зритель";
    }else if(personalMoieDB.count > 30) {
        message = "Вы киноман";
    } else{
        message = "Произошла ошибка";
    }
    alert(message);
}


//4
// function AskUserAboutFilms (numberOfFilms){
    
//     for(i = 0; i < numberOfFilms; i++ ){
//         let bool = AskMovieCounter();
//         if (bool == fasle) {
//             i--;
//          }
//     }
// }

// function checknumberOfFilms() {
//     let numberOfFilms;
//     do{
//         numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?');
//     }
//     while (isNaN(numberOfFilms)|| numberOfFilms == 0 || numberOfFilms.length > 50){
//     }
//     personalMoieDB.count = numberOfFilms;
// }
