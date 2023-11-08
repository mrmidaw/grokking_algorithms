//* node interviewTasks.js

//* 1
// console.log(typeof (function () {})());
// undefined
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

//* 9 Что выведет в консоль
// console.log(1 + "2" + "2"); // "122"

// console.log(1 + +"2" + "2"); // "32"

// console.log(true - 12); // -11

// console.log(typeof /abc/); // тут regex - object

// console.log(0.1 + 0.2 === 0.3); // 0.30000000000000004 != 0.3
// ************************************************************

//* 10 Написать необязательный union тип для роли
// interface User {
//   name: string;
//   id: number;
//   role?: 'admin' | 'user';
// }
// ************************************************************

//* 10 Протипизировать класс Queue, что бы в зависимости от пререданного типа в push
// class Queue {
//     push: (value) => {

//     }
// }

// const queue = new Queue<number>();

// queue.push(0);
// queue.push("1"); // TS: Error
// ************************************************************

//* 11 Вывести сумму массива, flat нельзя использовать
// const flattenArray = (arr) => {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     const currentValue = arr[i];
//     if (Array.isArray(currentValue)) {
//       result = [...result, ...flattenArray(currentValue)];
//     } else {
//       if (currentValue != null) {
//         result.push(currentValue);
//       }
//     }
//   }
//   return result;
// };

// const sum = (arr1) => {
//   const tempArr = flattenArray(arr1);

//   return tempArr.reduce((acc, cur) => {
//     return acc + cur;
//   });
// };

// const arr = [1, 1, [1, [1, [1, [2]]]], [1]];
// console.log(sum(arr));
// ************************************************************

//* 12 Что выведет в консоль?
// [1, 2, 3].map((a, b, c) => console.log(a, b, c));
// [1, 2, 3].map(console.log);

// Оба варианта равнозначны и выведут, что ниже
// 1 0 [ 1, 2, 3 ]
// 2 1 [ 1, 2, 3 ]
// 3 2 [ 1, 2, 3 ]
// ************************************************************

//* 13 Нужно написать функцию beetween которая выведет элементы между 3 и 6
// const list = [1, 2, 3, 4, 5, 6, 7, 8];

// const between = (num1, num2) => {
//   return function (res) {
//     return res > num1 && res < num2;
//   };
// };

// const filteredArray = list.filter(between(3, 6)); // [4,5]

// console.log(filteredArray);
// ************************************************************

//* 14 Что выведет в консоль
// var arr1 = "john".split("");
// var arr2 = arr1.reverse();

// console.log(arr1); // ["n", "h", "o", "j"];
// console.log(arr2); // ["n", "h", "o", "j"]; reverse мутирует изначальный массив
// ************************************************************

//* 15 Что выведет в консоль
// var v = 0;
// const v2 = (a) => (b) => [a, b].join("");
// const v1 = v2(3);
// console.log(v1);
// v = v1(7);

// console.log(v);
// ************************************************************

//* 16 Обернуть в HOC React.Memo и ответить во что оборачивать info в useMemo или useCallback
// const Component = React.Memo((params) => {
//   const profile = useSomeContext();

//   const info = useMemo(calculateInfo(params), [params]);

//   const result = <div onClick={() => console.log(info)}>{profile.name}</div>;

//   return result;
// });
// ************************************************************

//* 17 Что выведет при клике на кнопку и почему
// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const clickHandler = () => {
//     setCount(count + 1);
//     setCount(count + 1);
//     setCount(count + 1);
//     setCount(count + 1);
//   };

//   return <button onClick={clickHandler}>{count}</button>; // 1
// };
// ************************************************************

//* 18 Задача получить на выходе:
//* [
//*   {
//*    id: 1,
//*     name: "Ваня",
//*     message: "текст 1"
//*     comment: { id: 1, postId: 1, message: "коммент 1" },
//*   }
//* ];

// const users = [
//   { id: 1, name: "Ваня" },
//   { id: 2, name: "Игорь" },
//   { id: 3, name: "Петр" },
// ];

// const posts = [
//   { id: 1, userId: 1, message: "текст 1" },
//   { id: 2, userId: 2, message: "текст 2" },
//   { id: 3, userId: 3, message: "текст 3" },
// ];

// const comments = [
//   { id: 1, postId: 1, message: "коммент 1" },
//   { id: 2, postId: 2, message: "коммент 2" },
//   { id: 3, postId: 3, message: "коммент 3" },
// ];

// const resultArr = [];

// comments.forEach((comment, index) => {
//   const resObj = {};

//   posts.forEach((post, index) => {
//     if (post.id === comment.postId) {
//       resObj.comment = comment;
//       resObj.message = post.message;
//     }

//     users.forEach((user, index) => {
//       if (user.id === post.userId) {
//         resObj.userId = user.id;
//         resObj.userName = user.name;
//       }
//     });
//   });

//   resultArr.push(resObj);
// });

// console.log(resultArr);
// ************************************************************

//* 19 Задача получить на выходе:
//* {
//*     Nike: [ 'Alice', 'John' ],
//*     Reebok: [ 'Alice', 'Bob' ],
//*     Adidas: [ 'Alice', 'Tyler' ],
//*     Timberland: [ 'Bob', 'Tyler' ]
//* }

// const _data = [
//   { name: "Alice", brands: ["Nike", "Reebok", "Adidas"] },
//   { name: "Bob", brands: ["Reebok", "Timberland"] },
//   { name: "John", brands: ["Nike"] },
//   { name: "Tyler", brands: ["Timberland", "Adidas"] },
// ];

// const transformArr = (array) => {
//   [].reduce((acc, cur) => {}, {});
// };

// console.log(transformArr(_data));

// ************************************************************
