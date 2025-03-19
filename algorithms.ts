//* node algorithms.ts

//* Бинарный поиск
const binarySearch = ({ limit, target }) => {
  const randomArr = [...new Array(limit)]
    .map(() => Math.round(Math.random() * limit))
    .sort((a, b) => a - b);

  const uniqArr = Array.from(new Set(randomArr));

  let min = -1;
  let height = uniqArr.length;
  let count = 0;

  while (height - min > 1) {
    count++;
    const middle = Math.floor((min + height) / 2);

    if (target === uniqArr[middle]) {
      return {
        iteration: count,
        target,
        position: middle,
      };
    }

    if (target < uniqArr[middle]) {
      height = middle;
    } else {
      min = middle;
    }
  }

  return `Target: ${target} is not found!`;
};

console.log(binarySearch({ limit: 120000, target: 33333 }));
