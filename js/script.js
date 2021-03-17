"use strict";

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

for (let i = 0; i < 2; i++) {

    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?','');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
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