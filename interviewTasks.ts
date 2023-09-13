//* node interviewTasks.ts

//* 1
// console.log(typeof (function () {})());
// 456
// ************************************************************

//* 2
// var a = {},
//   b = { key: "b" },
//   c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);
// 456
// ************************************************************

//* 3
// console.log(
//   ["1", "z", "0", 2, true, false, {}, [], undefined, [0], ""].filter(Boolean)
// );

// ["1", "z", "0", 2, true, {}, [], [0]];
// ************************************************************

//* 4
// Необходимо написать функцию для подсчета суммы всех числовых значений в массиве.
// Валидными числовыми значениями являются так же строки, которые начинаются с цифр.
// В этом случае в качестве числового значения нужно использовать эту начальную последовательность цифр.
// Массив может содержать любые типы данных, быть не плоским.

// const sum = (arr) => {
//   const flattedArr = arr.flat(Infinity);
//   return flattedArr.reduce((acc, curNumber) => {
//     if (typeof curNumber === "number") {
//       return acc + curNumber;
//     }

//     if (typeof curNumber === "string" && !Number.isNaN(parseInt(curNumber))) {
//       return acc + parseInt(curNumber);
//     }

//     return acc;
//   }, 0);
// };

// console.log(sum([1, "x", "21111x", ["3", ["x2", "5"]]]));
// ************************************************************

//* 5
// class Ticker {
//   constructor() {
//     this.i = 0;
//   }
//   tick() {
//     console.log(this.i++);
//   }
// }

// const ticker = new Ticker();

// setInterval(ticker.tick.bind(ticker), 1000);
// ************************************************************

//* 6
// Promise.resolve(1) //
//   .then(x => x + 1) // 2
//   .then(x => { throw x }) // 2
//   .then(x => console.log(x))
//   .catch(err => console.log(err)) // 2
//   .then(x => Promise.resolve(1))
//   .catch(err => console.log(err))
//   .then(x => console.log(x)) // Promise 1
// ************************************************************

//* 7
// Есть массив вида
// Известно, что он большой (десяток тысяч элементов), даты в формате, не приспособленном к дефолтному конструктору.
// Нужно отсортировать по возрастанию даты.

// [
//   { date: "02.03.2000", name: "..." },
//   { date: "12.05.2003", name: "..." },
// ].sort((a, b) => Date.parse(a.date) - Date.parse(b.date));

// Date(Date.parse("02.03.2000"))
// Thu Feb 03 2000 00:00:00 GMT+0400 (Samara Standard Time)
// ************************************************************

//* 8
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

// const aClean = (arr) => {
//   let obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     let sorted = arr[i].toLowerCase().split("").sort().join("");
//     console.log(sorted);
//     obj[sorted] = arr[i];
//   }
//   console.log(obj);

//   return Object.values(obj);
// };

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log(aClean(arr));
// ************************************************************
