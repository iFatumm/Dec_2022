// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let arr = ['yarik', 1233, true, 56, 'andrew', false, [111, 222, 333], 'number'];
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log(arr[5])
// console.log(arr[6])
// console.log(arr[7])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

// let book1 = {
//     title: 'Harry Potter and the Prisoner of Azkaban',
//     pageCount: 357,
//     genre: 'fantasy'
// }
//
// let book2 = {
//     title: 'Harry Potter and the Philosopher’s Stone',
//     pageCount: 408,
//     genre: 'fantasy'
// }
//
// let book3 = {
//     title: 'Harry Potter and the Chamber of Secrets',
//     pageCount: 340,
//     genre: 'fantasy'
// }

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
//     Кожен автор має поля name та age.

// let book1 = {
//     title: 'Harry Potter and the Prisoner of Azkaban',
//     pageCount: 357,
//     genre: 'fantasy',
//     authors: ['katya', 27]
// }
//
// let book2 = {
//     title: 'Harry Potter and the Philosopher’s Stone',
//     pageCount: 408,
//     genre: 'fantasy',
//     authors: ['yarik', 32]
// }
//
// let book3 = {
//     title: 'Harry Potter and the Chamber of Secrets',
//     pageCount: 340,
//     genre: 'fantasy',
//     authors: ['tanya', 48]
// }

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль
// кожного користувача

// let users = [
//
//     user1 = {
//     name: 'tanya',
//     username: 'cat',
//     password: '1234'
//     },
//
//     user2 = {
//     name: 'yarik',
//     username: 'dog',
//     password: '12345'
//     },
//
//     user3 = {
//     name: 'ira',
//     username: 'horse',
//     password: '123456'
//     },
//
//     user4 = {
//     name: 'ruslan',
//     username: 'moskito',
//     password: '1234567'
//     },
//
//     user5 = {
//     name: 'andrew',
//     username: 'hulk',
//     password: '12345678'
//     },
//
//     user6 = {
//     name: 'margo',
//     username: 'harley quin',
//     password: '123456789'
//     },
//
//     user7 = {
//     name: 'nazar',
//     username: 'pepa pig',
//     password: '987654321'
//     },
//
//     user8 = {
//     name: 'kolya',
//     username: 'frog',
//     password: 'sdfghdjkfj'
//     },
//
//     user9 = {
//     name: 'vika',
//     username: 'bear',
//     password: '54jgfgjk'
//     },
//
//     user10 = {
//     name: 'lena',
//     username: 'sweet',
//     password: '1hjjhff256'
//     }
// ]
//
// console.log(users[0].password)
// console.log(users[1].password)
// console.log(users[2].password)
// console.log(users[3].password)
// console.log(users[4].password)
// console.log(users[5].password)
// console.log(users[6].password)
// console.log(users[7].password)
// console.log(users[8].password)
// console.log(users[9].password)
//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = 0;
// if(x != 0) {
//     console.log('Вірно')
// }else {
//     console.log('Невірно')
// }

// let a = -3;
// if(a != 0) {
//     console.log('Вірно')
// }else {
//     console.log('Невірно')
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = 59;
// if(time >= 0 && time < 15) {
//     console.log('Перша')
// }else if (time >= 15 && time < 30) {
//     console.log('Друга')
// }else if(time >= 30 && time < 45) {
//     console.log('Третя')
// }else if (time >= 45 && time < 60){
//     console.log('Четверта')
// }
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу,
//     другу чи третю).

// let day = 20;
// if(day < 11) {
//     console.log('Перша')
// }else if(day >= 11 && day < 20) {
//     console.log('Друга')
// }else if(day >= 20) {
//     console.log('Третя')
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа
//     що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let numDay = prompt('day number');
// switch (numDay) {
//     case '1':
//         console.log('run');
//         break;
//     case '2':
//         console.log('jump');
//         break;
//     case '3':
//         console.log('eat');
//         break;
//     case '4':
//         console.log('learn');
//         break;
//     case '5':
//         console.log('write');
//         break;
//     case '6':
//         console.log('sleep');
//         break;
//     case '7':
//         console.log('relax');
//         break;
//     default:
//         console.log('?????')
// }


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let x = 5;
// let y = 5;
//
// if (x > y) {
//     console.log('більше', x)
// }else if(x < y) {
//     console.log('більше', y)
// }else {
//     console.log('числа рівні')
// }

//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//     (хибноподібні, тобто приводиться до false)

// let x = '';
// let result = x || 'default';
// console.log(result);

//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його
//     елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// if(coursesAndDurationArray[0].monthDuration > 5){
//     console.log('super')
// }
// if(coursesAndDurationArray[1].monthDuration > 5){
//     console.log('super')
// }
// if(coursesAndDurationArray[2].monthDuration > 5){
//     console.log('super')
// }
// if(coursesAndDurationArray[3].monthDuration > 5){
//     console.log('super')
// }
// if(coursesAndDurationArray[4].monthDuration > 5){
//     console.log('super')
// }
// if(coursesAndDurationArray[5].monthDuration > 5){
//     console.log('super')
// }