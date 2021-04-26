'use strict';

// class User {
// constructor(name, age) {
//     this.name = name;
//     this._age = age; 
// }

// #surname = 'Petrichenko';
    

//     say = () => {
//         console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст: ${this._age} `);
//     }

//     get age() {
//         return this._age;
//     }

//    set age(age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             this._age = age;
//         } else {
//             console.log('Недопустимое значение');
//         }
//     }
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.surname);
// ivan.say();


class Worker {
constructor(name, surname, age) {
    this._name = name;
    this._surname = surname;
    this._age = age; 
}

#specialty = 'Operator';
    

    say = () => {
        console.log(`Имя пользователя: ${this._name} ${this._surname}, возраст: ${this._age}, профессия: ${this.#specialty}`);
    }

//     get specialty() {
//         return this.#specialty;
//     }

//    set specialty(_specialty) {
//         if (_specialty == 'Operator') {
//             this._specialty = 'JS Developer'
//         } else {
//             console.log('Работай');
//         }
//     }
}

const sergei = new Worker('Sergei', 'Petrichenko', 27);

sergei.say();