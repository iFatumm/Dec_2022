// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let str1 = 'hello';
console.log(str1)
let str2 = 'owu';
console.log(str2)
let str3 = 'com';
console.log(str3)
let str4 = 'ua';
console.log(str4)
let num = 1;
console.log(num)
let num1 = 10;
console.log(num1);
let num2 = -999;
console.log(num2);
let num3 = 123;
console.log(num3);
const PI = 3.14;
console.log(PI);
let num4 = 2.7;
console.log(num4);
let num5 = 16;
console.log(num5);
let bool = true;
console.log(bool);
let bul = false;
console.log(bul);
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт,
//     просто за допомоги конкатенації)
let firstName = 'Ярослав';
let middleName = 'Васильович';
let lastName = 'Мошуренко';
console.log(lastName + ' ' + firstName + ' ' + middleName);
console.log(`${lastName} ${firstName} ${middleName}`)

//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let lN = prompt('Your last name')
let fN = prompt('Your name');
let years = prompt('Your age');
console.log(lN);
console.log(fN);
console.log(years);

console.log(`${lN} ${fN} ${years}`)