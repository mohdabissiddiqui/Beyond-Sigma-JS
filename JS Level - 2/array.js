// let names = ["Abis", "Ishant", "Akshat", "Om"]
// console.log(names);
// let ages = [16, 20, 18, 17]
// console.log(ages);

// Getting Values from arrays
// arr[idx]

// console.log(names[0]);



// Basic Method of array

// let names = ["Abis", "Ishant", "Akshat", "Om"]
// console.log(names);
// let ages = [16, 20, 18, 17]
// console.log(ages);

// Finding length of an array
// names.length;
// console.log(ages.length);

// Adding Item in last of array
// names.push("Afraan")
// console.log(names);

// Deleting Last Element of array
// console.log(names);
// names.pop();
// console.log(names);

// Adding element in first place of array
// console.log(names);
// names.unshift("Kanahaiya")
// console.log(names);

// Deleting first element of array
// console.log(names);
// names.shift();
// console.log(names);


// Looping through an array

// let arr = [10,20,30,40,50]

// for(let i = 0; i<arr.length;i++){
//     console.log(arr[i]);
// }
// Finding Even Numbers in Array
// for(let i = 0;i<arr.length;i++){
//     arr[i];
//     if(arr[i]%2===0){
//         console.log(arr[i]);
//     }
// }

// Array Methods

// Mutable & Non - Mutable Arrays

// Mutable Array - Original array change karta hai 

// push()
// pop()
// shift()
// unshift()
// splice()
// slice()
// sort()
// reverse()

// Splice Method - Deletes array items from starting idx to the end numbers we gave

// let nums = [1,2,3,4,5]
// nums.splice(2,3) // [1,2]
// console.log(nums);

// Reverse Method

// let numbers = [1,2,3,4,5];
// numbers.reverse();
// console.log(numbers);

// Sorting - making the array into assecnding to decending order

// let arr = [1,3,5,4,2]
// arr.sort();
// console.log(arr);

// let arr = [1,10,3];
// arr.sort((a,b)=>{
//     return a - b;
// });
// console.log(arr);;

// Non - Mutable Array - New array banata hai original array change nahi karta

// map()
// filter()
// concat()
// flat()
// slice()

// Slice Method

// let arr = [2,3,7,8,9,4,5]
// let res = arr.slice(2,5);
// console.log(res);

// Concat Method

// let arr1 = [1,2];
// let arr2 = [3,4,5];
// let res = arr1.concat(arr2);
// console.log(res);

// Map Method - ye kabhi array ki length short nahi kar sakta bas valuse ko manipulate kar sakta hai

// let arr  =  [1,2,3,4,5];
// let res = arr.map((val)=>{
//   val = 10;
//   return val;
// })
// console.log(res);

// let arr = [10,20,30,10,40,10,80,10];
// let res = arr.map((value)=>{
//     return value === 10;
// })
// console.log(res); //  [true, false, false, true, false, true, false, true]


// Filter Method - it can reduce array length

// let arr = [10,20,15,30,50,13,12];
// let res = arr.filter((value)=>{
//    return value > 15;    
// })
// console.log(res);

// Flat Method - convert nested array into simple array

// let nestedArr = [1,2,3,4,[5,6,7,8]];
// let res = nestedArr.flat(Infinity)
// console.log(nestedArr);
// console.log(res);


// Single Value return karta hai.

// find() , findindex(), include(), join(), reduce()

// find - only return single value whether there are multiple values
// let arr = [1,4,5,10,,7,5];
// let res = arr.find((val)=>{
//     return val === 5;
// })
// console.log(res);

// findindex - return the index of value

// let arr = [1,2,3,4,5];
// let res = arr.findIndex((val)=>{
//     return val === 2;
// })
// console.log(res);

// include method - find particular value in array

// let array = [1,2,4,56,7,];
// let res = array.includes(56);
// console.log(res);

// index of method - return idx of particular value
// let arr = [1,2,3,4,5]
// let res = arr.indexOf(3);
// console.log(res);

// Join Method - joins array
// let arr = ["I", "Love", "Sidz"];
// let res = arr.join(" ");
// console.log(res); // I Love Sidz

// Some Method - works like include checks every value in array and matches it's value
// let names = ["Abis", "Om", "Ishant", "Akshat"];
// let res = names.some((val)=>{
//     return val === "Abis";
// });
// console.log(res);

// Every Method - works like some but it should get all values some in the array to give true

// let arr = ["abis","abis","abis"];
// let res = arr.every((val)=>{
//     return val === "abis";
// })
// console.log(res);

// Reduce Method - used to calculate

// Without Reduce

// let arr = [20,30,10,40];
// let sum = 0;
// for(let i = 0; i<arr.length;i++){
//     sum += arr[i];
// }
// console.log(sum);

// With Reduce
let arr = [2,3,1,4];
let res = arr.reduce((accumulator,val)=>{
    return accumulator += val;
},0)
console.log(res);
