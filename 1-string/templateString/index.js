function getScore(id) {
  if (id === '1234') {
    return 60;
  }
  return 59;
}

export default function getScoreOutput(person) {
  // TODO 8: 在这里写实现代码
  const result = `你好，刘明！你的考试成绩为${getScore(person.id)}分`;
  return result;
}
