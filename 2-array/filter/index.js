function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  return collection.filter(c => c % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  const result = new Set(collection);
  // return Array.from(result);
  return [...result];
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
