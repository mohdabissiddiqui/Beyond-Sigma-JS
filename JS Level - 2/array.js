// let names = ["Abis", "Ishant", "Akshat", "Om"]
// console.log(names);
// let ages = [16, 20, 18, 17]
// console.log(ages);

// Getting Values from arrays
// arr[idx]

// console.log(names[0]);



// Basic Method of array

let names = ["Abis", "Ishant", "Akshat", "Om"]
// console.log(names);
let ages = [16, 20, 18, 17]
// console.log(ages);

// Finding length of an array
names.length;
// console.log(ages.length);

// Adding Item in last of array
names.push("Afraan")
// console.log(names);

// Deleting Last Element of array
// console.log(names);
names.pop();
// console.log(names);

// Adding element in first place of array
// console.log(names);
names.unshift("Kanahaiya")
// console.log(names);

// Deleting first element of array
// console.log(names);
names.shift();
// console.log(names);


// Looping through an array

let arr = [10,20,30,40,50]

// for(let i = 0; i<arr.length;i++){
//     console.log(arr[i]);
// }
// Finding Even Numbers in Array
for(let i = 0;i<arr.length;i++){
    arr[i];
    if(arr[i]%2===0){
        console.log(arr[i]);
    }
}