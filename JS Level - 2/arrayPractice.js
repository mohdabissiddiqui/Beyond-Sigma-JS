// Question 1
// let str = ['Alice', 'Bob', 'Charlie'];
// str.unshift("Zayn");
// let removedName = str.pop();
// console.log(str);
// console.log(removedName);

// Question 2
// let songs = ['Rock', 'Pop', 'Hip-Hop', 'Jazz', 'Classical'];
// songs.splice(2,2);
// songs.push("Synthwave", "Indie")
// console.log(songs);

// Question 3
// let prices = [100, 250, 400, 50];
// let discount = prices.map((val)=>{
//     return val * 1.1;
// });
// console.log(prices);
// console.log(discount);

// Question 4
// let scores = [45, 82, 67, 91, 30, 88, 59,60];
// let finalScore = scores.filter((val)=>{
//     return val >=60;
// });
// console.log(scores);
// console.log(finalScore);
// finalScore.sort((a,b)=>{
//     return a - b;
// })
// console.log(finalScore);

// Question 5
// let itemsPrice = [499, 1299, 299, 99];
// let res = itemsPrice.reduce((accumulator,val)=>{
//     return accumulator += val;
// },0)
// console.log(itemsPrice);
// console.log(res);

// Question 6
// let nums = [12, 45, 7, 89, 23,99];
// let res1 = nums.find((val)=>{
//      return val > 50;
// })
// console.log(res1);
// let res2 = nums.some((val)=>{
//    return val%2===0;
// })
// console.log(res2);
// let res3 = nums.every((val)=>{
//     return val>5;
// })
// console.log(res3);

// The Challenge
// const prices = [1500, 450, 800, 120, 3200, 950];
// let priceless = prices.filter((val)=>{
//     return val > 500;
// })
// let discount = priceless.map((val)=>{
//      return val - 50;
// })
// let total = discount.reduce((accumulator,val)=>{
//     return accumulator += val;
// },0);
// console.log(total);
