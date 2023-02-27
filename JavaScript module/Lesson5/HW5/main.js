// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let square = (a, b) => a * b;
// console.log(square(5, 4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let circle = (r) => 3.14 * r ** 2;
// console.log(circle(2))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let cilindr = (r, h) => (r+h) * r * 3.14;
// console.log(cilindr(5, 15))

// - створити функцію яка приймає масив та виводить кожен його елемент
// let array = (arr) => {
//     for (const element of arr) {
//         console.log(element)
//     }
// }
// array(['yarik', 'nazar', 'ira', 'lena'])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let printText = (txt) => {
//     document.write(`<p>${txt}</p>`)
// }
// printText('fdfhsfhdusdhgidjgds, ghdfjshjlsdkjgksdhgkhg,hfdlsfhdslfhsldhfkd')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let listCreator = (params) => {
//     document.write(`<ul>`);
//         document.write(`<li>${params}</li>`);
//         document.write(`<li>${params}</li>`);
//         document.write(`<li>${params}</li>`);
//     document.write(`</ul>`);
// }
// listCreator('test_test');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let listCreator2 = (params, count) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < count; i++) {
//         document.write(`<li>${params}</li>`)
//         console.log(params)
//     }
//     document.write(`</ul>`);
// }
// listCreator2('text_text', 35);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arrList = (arr) => {
//         document.write(`<ul>`);
//         for (const item of arr) {
//             document.write(`<li>${item}</li>`)
//     }
//         document.write(`</ul>`);
// }
// arrList([1, 2, 'yarik', 'lena', true, false]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let userBlock = (obj) => {
//     for (const element of obj) {
//         document.write(`<div>id: ${element.id}, name:${element.name}, age: ${element.age}</div>`)
//     }
// }
// userBlock([
//     {id: 1, name: 'yarik', age: 35},
//     {id: 2, name: 'lena', age: 33},
//     {id: 3, name: 'nazar', age: 15}
// ])

// - створити функцію яка повертає найменьше число з масиву
// let minimal = (arr) => {
//     let result = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (result > arr[i]) result = arr[i]
//     }
//     return result
// }
// console.log(minimal([32, 45, 89, 6, 12, 0, -32]))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// let sum = (num) => {
//     let res = 0;
//     for (const i of num) {
//         res += i;
//     }
//     return res
// }
// console.log(sum([1, 2, 10]))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// let swap = (arr, index1, index2) => {
//     let v1 = arr[index1];
//     let v2 = arr[index2];
//     arr[index1] = v2;
//     arr[index2] = v1;
//     return arr
// }
// console.log(swap([11,22,33,44],0,1))

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// let exchange = (uah, currencies, exitCurrencies)=> {
//     for (const element of currencies) {
//         if (element.currency === exitCurrencies) {
//             return uah / element.value;
//         }
//     }
// }
// let res = exchange(
//     10000,
//     [
//             {currency: 'USD', value: 40},
//             {currency: 'EUR', value: 42},
//             {currency: 'GBP', value: 43}
//             ],
//             'USD'
// )
// console.log(res)