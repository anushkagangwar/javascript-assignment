
console.log("-- Multiplication Table of 5 --");

// 1. For loop
for (let i = 1; i <= 5; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}

console.log("\n-- First number > 10 divisible by 6 --");

// 2. While loop with break
let num = 11;

while (num > 10) {
    if (num % 6 === 0) {
        console.log("Found: " + num);
        break;
    }

    num++;
}

console.log("\n-- Do...while loop with continue --");

// 3. Do...while loop with continue
let count = 0;

do {
    count++;

    if (count === 3) {
        continue;
    }

    console.log("Count: " + count);

} while (count < 5);
