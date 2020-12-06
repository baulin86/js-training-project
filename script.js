'use strict';



const personalMovieDB = {
    count: "",
    movies: {},
    actors:{},
    genres:[],
    privat:false,
    start: function(){
        let numberOfFilms;
    
        while (isNaN(numberOfFilms)|| numberOfFilms == 0 || numberOfFilms.length > 50){
            numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?');
        }
        personalMovieDB.count = numberOfFilms;
    },
    AskUserAboutFilms: function(numberOfFilms){
        let i = 0;
    
        while ( i < numberOfFilms){
            let bool = personalMovieDB.AskMovieCounter();
            if (bool == true) {
               i++;
            }
       };
    },
    AskMovieCounter: function (){
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
            personalMovieDB.AddAnswerMovies(film,count);
            return(true);
        }
    },
    AddAnswerMovies: function (film, count){
        personalMovieDB.movies[film] = count;
    },
    detectPersonalLevel: function (){
        let message;
        if (personalMovieDB.count < 10){
            message = "Просмотрено довольно мало фильмов";
        }else if (personalMovieDB.count >= 10 &&  personalMovieDB.count <= 30) {
            message = "Вы классический зритель";
        }else if(personalMovieDB.count > 30) {
            message = "Вы киноман";
        } else{
            message = "Произошла ошибка";
        }
        console.log(message);
    },
    showMyDB: function () {
        if (personalMovieDB.privat == false){
            personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function (){

        for(let i = 0; i < personalMovieDB.count; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i+1}`,"" );
            if (genre ==  null || genre == '' || +genre){
                i = i-1 ;
            }
            else{
                personalMovieDB.genres[i] = genre;
            }
        };
    },
    toggleVisibleMyDB: function(){
        personalMovieDB.privat = true;
    },
    showGenres: function(){
        const arr = personalMovieDB.genres;

        arr.forEach(function(item,i,arr){
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    },
};

personalMovieDB.start();
personalMovieDB.AskUserAboutFilms(personalMovieDB.count);
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
personalMovieDB.showGenres();











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
