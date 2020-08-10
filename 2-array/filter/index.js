function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  const result = collection.filter(c => c % 3 === 0);
  return result;
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  const result = new Set(collection);
  return Array.from(result);
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
