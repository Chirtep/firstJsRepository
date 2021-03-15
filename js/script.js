"use strict";

// for (let i = 1; i < 3; i++) {

//     let a = prompt('Один из последних просмотренных фильмов?', '');
//     let b = prompt('На сколько оцените его?','');
// }

const numberOfFilms = +prompt('Сколько фильмов уже посмотрел?');

if (numberOfFilms < 10) {
    alert('Маловато');

} else if (numberOfFilms > 10 && numberOfFilms < 30) {
    alert('Ты классический зритель');

} else if (numberOfFilms > 30) {
    alert('Ты синефил');
} else {
    alert('ТЫ ВСЕ СЛОМАЛ!');
}

let a, b;

function ask (n, string) {
    n = prompt (string);
    if (n == false || n.length > 50) {
        return ask (n, string);
    }
}

for (let i = 1; i < 3; i++) {

        ask (a, 'Какой фильм посмотрел недавно?');
        ask (b, 'На сколько оценишь?');
    }


// let i =1;

// while (i < 3) {
//     ask (a, 'Какой фильм посмотрел недавно?');
//     ask (b, 'На сколько оценишь?');
//     i++;
// }

// do {
//     ask (a, 'Какой фильм посмотрел недавно?');
//     ask (b, 'На сколько оценишь?');
//     i ++;
// }
// while (i < 3);