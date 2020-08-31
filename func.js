function sum(a, b) {
    return a + b;
  }
  module.exports = sum;

  // ユーザからのキーボード入力を取得するPromiseを生成する
function readUserInput(question) {
  const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
  });

  return new Promise((resolve, reject) => {
      readline.question(question, (answer) => {
      resolve(answer);
      readline.close();
      });
  });
}
module.exports = readUserInput;