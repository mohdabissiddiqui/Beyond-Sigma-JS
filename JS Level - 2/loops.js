// Loops

// For Loops

// for (let i = 1; i <= 5; i++) {
//   console.log("Hello");
// }

// while loop

// let i = 1;
// while (i <= 5) {
//   console.log("Hello");
//   i++;
// }

// do while loops

// let i = 6;

// do {
//   console.log("Hello");
//   i++;
// } while (i <= 5);

// Run atleast one time

// Break Statement - Stops the loop entirely

// for (let i = 1; i <= 5; i++) {
//   console.log("Hello");
//   if (i == 2) {
//     break;
//   }
// }

// Continue Statement - skips that particular iteration and move forword

// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i);
// }

// (output - 1, 2, 4, 5);

// Practice Number

// find the prime numbers between 1 - 50

// for (let i = 1; i <= 50; i++) {
//   let factor = 0;
//   for (let j = 1; j <= i; j++) {
//     if (i % j === 0) {
//       factor += 1;
//     }
//   }

//   if (factor === 2) {
//     console.log(i);
//   }
// }

// Multiplication Table

// let num = 5;

// for (let i = 1; i <= 10; i++) {
//   console.log(i * num);
// }

// *
// **
// ***
// ****
// *****

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log(" ");
// }
