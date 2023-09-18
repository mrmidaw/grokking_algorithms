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

// ## Data Types

// console.log(1 +  "2" + "2"); // "5" // 122

// // console.log(1 +  +"2" + "2"); // "32"

// console.log(true - 12); // -11

// console.log(typeof /abc/); // ob

// console.log(0.1 + 0.2 === 0.3);

// console.log(0.1 + 0.2)
// ## TS

// interface User {
//   name?: string;
//   id?: number:
//   role?: 'admin' | 'user';
// }

// type XXX<T> = (item: T[]): T

// ### 1
// const head = (array) => ...

//const number = head([1,2,3]) // 1 - type number
//const string = head(['1', '2', '3']) '1' - // type string

// class Queue <T>{
//     push: (value: T) => {

//     }
// }

// // ### 2
// const queue = new Queue<string>();

// queue.push(0);
// queue.push("1"); // TS: Error

// ## Array

// ### 1
const sum = (arr1) => {
  const tempArr = [];

  arr1.fprEach((item) => {});
};

// const arr = [1,1, [1, [1, [1, [2]]]], [1]]
// console.log(sum(arr))

// ### 2
// [1,2,3].map((a, b, c) => console.log(a, b, c))

// // [1], 0, [1,2,3]
// // [2], 1, [1,2,3]
// // [3], 2, [1,2,3]

// // ### 3
// const list = [1,2,3,4,5,6,7,8]

// const between = (num1, num2) => {
//   return function (res) {
//     console.log(res)

//     return res > num1 && res < num2;
//   }
// }

const filteredArray = list.filter(between(3, 6)); // [4,5]

// console.log(filteredArray);

// ## JS

// ### 1
// const mul = ?

// console.log(mul(2)(3)(4)); // output : 24
// console.log(mul(4)(3)(4)); // output : 48

// ### 2
// var arr1 = "john".split('');
// var arr2 = arr1.reverse();

// console.log(arr1)
// console.log(arr2)

// ### 3
// var v = 0;
// const v2 = a => b => [a,b].join('');
// const v1 = v2(3);
// v = v1(7);

// console.log(v)

// ## React

// const Component = React.Memo( (params) => {
//   const profile = useSomeContext();

//   const info = useMemo(calculateInfo(params),[params]);

//   const result = (<div onClick={() => console.log(info)}>
//       {profile.name}
//     </div>)

//   return result
// }, )

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const clickHandler = () => {
//     setCount(count + 1)
//     setCount(count + 1)
//     setCount(count + 1)
//     setCount(count + 1)
//   }

//   return <button onClick={clickHandler}>{count}</button> // 1
// }
