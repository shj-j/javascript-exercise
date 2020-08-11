export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  // const resultList = collection.filter(c => c.age < 20);
  // return resultList[0].name;

  return collection.find(person => person.age < 20 && person.age > 10).name;
}
