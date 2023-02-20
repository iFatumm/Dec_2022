// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function square(a, b) {
//     let res = a * b;
//     return res;
// }
// console.log(square(4, 5))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function squareCircle(r) {
//     let res = 3.14 * r * r;
//     return res;
// }
// console.log(squareCircle(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function squareCilindr(h, r) {
//     let s1 = 3.14 * r * r;
//     let s2 = s1 + 2 * 3.14 * r *r;
//     return s2
// }
// console.log(squareCilindr(5, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент
// function elementArray(arr) {
//     for (const element of arr) {
//         console.log(element);
//     }
// }
// let myArr = [1,2,3,4,5,6,7];
// elementArray(myArr)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraf(text) {
//     document.write(`<p>${text}</p>`)
// }
// paragraf('lorem ipsum hfjgvhskdjlfhshjkdfh;lzsdvudsjvnhkjdlsbvzdnbhvjndskjvdslhkbvndn v?dvdhfkdsfhkjdsgfkjsdhfdeefhldsjvfe? hdgfk')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function ulCreator(txt){
//     document.write(`<ul>`)
//             document.write(`<li>${txt}</li>`);
//             document.write(`<li>${txt}</li>`);
//             document.write(`<li>${txt}</li>`);
//     document.write(`</ul>`)
// }
// ulCreator('JavaScript')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function ulCreator2(txt, count) {
//     document.write('<ul>');
//     for (let i = 0; i < count; i++) {
//         document.write(`<li>${txt}</li>`)
//     }
//     document.write('</ul>');
// }
// ulCreator2('Java', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function elementsArr(arr) {
//     document.write(`<ul>`);
//     for (const item of arr) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`);
// }
// let myArr = [1, 'andrew', true, 15, false, 'nazar'];
// elementsArr(myArr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту
// окремий блок.
// function iterator(arr) {
//     for (let user of arr) {
//         // for (const key in user) {
//         //     console.log(key)
//         // }
//         document.write(`<div>${user.id}. ${user.name}, age - ${user.age}</div>`)
//     }
//
// }
// let userArray = [
//     {id: 1, name: 'Nazar', age: 15},
//     {id: 2, name: 'Yaroslav', age: 35},
//     {id: 3, name: 'Iryna', age: 39}
// ];
// iterator(userArray)

// - створити функцію яка повертає найменьше число з масиву
// function minimal(numArr) {
//     let min = numArr[0];
//     for (const minNumArr of numArr) {
//         if (min > minNumArr) {
//             min = minNumArr;
//         }
//     }
//     return min
// }
// let numbers = [2, 6, 8, 65, 79, 3, 25, 46, 84, 9];
// console.log(minimal(numbers));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// function sum(numbers) {
//     let result = 0;
//     for (const number of numbers) {
//         result += number
//     }
//     return result
// }
//
// console.log(sum([1, 2, 10]))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function swap(arr, index1, index2) {
//     let v1 = arr[index1];
//     let v2 = arr[index2];
//     arr[index1] = v2;
//     arr[index2] = v1
//     return arr
// }
// let res = swap([11, 22, 33, 44], 0, 1);
// console.log(res)
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 25

// function exchange(uah, currencies, exitCurrencies) {
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