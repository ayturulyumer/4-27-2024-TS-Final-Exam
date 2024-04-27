"use strict";
function printAndSum(startNum, endNum) {
    let sum = 0;
    let printedNumbers = [];
    for (let i = startNum; i <= endNum; i++) {
        sum += i;
        printedNumbers.push(i);
    }
    console.log(printedNumbers.join(" "));
    console.log(`Sum: ${sum}`);
}
const startNum = 5;
const endNum = 10;
printAndSum(startNum, endNum);
console.log(`------`);
const startNum2 = 0;
const endNum2 = 26;
printAndSum(startNum2, endNum2);
console.log(`------`);
const startNum3 = 50;
const endNum3 = 60;
printAndSum(startNum3, endNum3);
//# sourceMappingURL=printAndSum.js.map