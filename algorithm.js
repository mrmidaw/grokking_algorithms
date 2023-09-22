//* node algorithm.js

//* 1. Бинарный поиск
// const binarySearch = (length, target) => {
//   const randomArr = [...new Array(length)].map(() =>
//     Math.round(Math.random() * length)
//   );
//   const tempArr = randomArr.sort((a, b) => a - b);
//   const uniqArr = Array.from(new Set(tempArr));

//   let left = -1;
//   let right = uniqArr.length;

//   let count = 0;
//   console.log(uniqArr);

//   while (right - left > 1) {
//     count++;
//     const middle = Math.floor((left + right) / 2);

//     if (target === uniqArr[middle]) {
//       return {
//         iteration: count,
//         target,
//         position: middle,
//       };
//     }

//     if (target < uniqArr[middle]) {
//       right = middle;
//     } else {
//       left = middle;
//     }
//   }

//   return `Target: ${target} is not found!`;
// };

// console.log(binarySearch(99, 88));
// ************************************************************

//* 2. Сортировка выбором
// const arr = [
//   282, 49, 248, 260, 469, 425, 283, 343, 419, 140, 235, 265, 207, 266, 221, 48,
//   259, 296, 10, 82, 91, 318, 143, 431, 186, 430, 376, 247, 33, 138, 382, 461,
//   215, 195, 482, 194, 232, 358, 8, 387, 139, 106, 234, 426, 90, 441, 367, 208,
//   291, 414, 137, 244, 156, 399, 182, 407, 460, 309, 463, 44, 234, 443, 227, 276,
//   405, 461, 46, 175, 329, 254, 430, 79, 281, 149, 336, 120, 378, 480, 2, 148,
//   298, 339, 153, 363, 417, 147, 89, 202, 346, 91, 437, 54, 313, 229, 374, 478,
//   246,
// ];

// const findSmallestIndex = (array) => {
//   let smallestIndex = 0;
//   let smallestElement = array[smallestIndex];

//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < smallestElement) {
//       smallestElement = array[i];
//       smallestIndex = i;
//     }
//   }

//   return smallestIndex;
// };

// const selectionSort = (array) => {
//   const sortedArray = [];
//   const length = array.length;

//   for (let i = 0; i < length; i++) {
//     const smallestIndex = findSmallestIndex(array);
//     const elem = array.splice(smallestIndex, 1)[0];
//     sortedArray.push(elem);
//   }

//   return sortedArray;
// };

// console.log(selectionSort(arr));
// ************************************************************

//* 4. Быстрая сортировка
// const mockArr = [
//   282, 49, 248, 260, 469, 425, 283, 343, 419, 140, 235, 265, 207, 266, 221, 48,
//   259, 296, 10, 82, 91, 318, 143, 431, 186, 430, 376, 247, 33, 138, 382, 461,
//   215, 195, 482, 194, 232, 358, 8, 387, 139, 106, 234, 426, 90, 441, 367, 208,
//   291, 414, 137, 244, 156, 399, 182, 407, 460, 309, 463, 44, 234, 443, 227, 276,
//   405, 461, 46, 175, 329, 254, 430, 79, 281, 149, 336, 120, 378, 480, 2, 148,
//   298, 339, 153, 363, 417, 147, 89, 202, 346, 91, 437, 54, 313, 229, 374, 478,
//   246,
// ];

// const quickSort = (arr) => {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const pivot = arr[1];
//   const less = arr.slice(1).filter((el) => el <= pivot);
//   const greater = arr.slice(1).filter((el) => el > pivot);

//   return quickSort(less).concat(pivot, quickSort(greater));
// };

// console.log(quickSort(mockArr));
// ************************************************************

//* 5. ХЕШ-таблица
// const votedTable = {};

// const checkVoter = (name) => {
//   if (votedTable[name]) {
//     console.log("kick them out!");
//   } else {
//     votedTable[name] = true;
//     console.log("let them vote!");
//   }
// };

// checkVoter("tom");
// checkVoter("mike");
// checkVoter("mike");
// ************************************************************

//* 6. Графы. Поиск в ширину

const personIsSeller = (name) => {
  return name.endsWith("m");
};

const graph = {};
graph.you = ["alice", "bob", "claire"];
graph.bob = ["anuj", "peggy"];
graph.alice = ["peggy"];
graph.claire = ["thom", "jonny"];
graph.anuj = [];
graph.peggy = [];
graph.thom = [];
graph.jonny = [];

const search = (name) => {
  let searchQueue = graph[name];
  //* С помощью этого массива вы можете отслеживать, каких людей вы искали раньше.
  const searched = [];

  while (searchQueue.length > 0) {
    const person = searchQueue.shift();
    //* Ищите этого человека, только если вы еще не искали его
    if (!searched.includes(person)) {
      if (personIsSeller(person)) {
        console.log(`${person} is a mango seller!`);
        return true;
      } else {
        searchQueue = searchQueue.concat(graph[person]);
        //* Отмечает этого человека как разыскиваемого
        searched.push(person);
      }
    }
  }

  return false;
};

search("you");

// ************************************************************
