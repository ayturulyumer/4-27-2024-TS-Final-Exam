function printAndSum(startNum: number, endNum: number): void {
  let sum: number = 0;
  let printedNumbers: number[] = [];

  for (let i = startNum; i <= endNum; i++) {
    sum += i;
    printedNumbers.push(i);
  }

  console.log(printedNumbers.join(" "));
  console.log(`Sum: ${sum}`);
}

const startNum: number = 5;
const endNum: number = 10;

printAndSum(startNum, endNum);

console.log(`------`);

const startNum2: number = 0;
const endNum2: number = 26;

printAndSum(startNum2, endNum2);

console.log(`------`);

const startNum3: number = 50;
const endNum3: number = 60;

printAndSum(startNum3, endNum3);
