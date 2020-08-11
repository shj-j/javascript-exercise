export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  const resultList = collection.filter(c => c.startsWith('粤A'));
  return resultList.length;
}
