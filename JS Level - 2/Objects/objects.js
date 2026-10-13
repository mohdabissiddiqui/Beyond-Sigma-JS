// let studentDetail = {
//     name : "Mohd Abis",
//     age: 16,
//     isPassed: true,
//     StreetNo : 6,
// }
// console.log(studentDetail);

// Accessibility 
// 1. Dot (.) Notation
// console.log(studentDetail.name);
// 2 Bracket ([]) Notation
// console.log(studentDetail["name"]);

// Creating Keys  & Changing Value of object

// Creating Keys 
// studentDetail.gender = "male";
// console.log(studentDetail);

// Changing Value of object 
// studentDetail.name = "Mohd Abis Siddiqui";
// console.log(studentDetail);


// let studentDetail = {
//     name : "Mohd Abis",
//     age: 16,
//     isPassed: true,
//     address : {
//         streetNo : 24,
//         city: "Lucknow"
//     }
// }
// Accessing Nested Object Key

// console.log(studentDetail.address.city);

// Deleting Object Key 

// delete studentDetail.isPassed;
// console.log(studentDetail);
// let studentDetail = {
//     name : "Mohd Abis",
//     age: 16,
//     isPassed: true,
//     address : {
//         streetNo : 24,
//         city: "Lucknow"
//     }
// }

// Accesing Object Keys
// let res = Object.keys(studentDetail);

// For length of object
// let res1 = Object.keys(studentDetail).length;
// console.log(res1);


// Travelsal on Object Keys and values

// 1. for in
// for(let keys in studentDetail){
//     console.log(keys);
    
// }

// 2. for each 
// res.forEach((val)=>{
//     console.log(val);
    
// })


// let studentDetail = {
//     name : "Mohd Abis",
//     age: 16,
//     isPassed: true,
//     address : {
//         streetNo : 24,
//         city: "Lucknow"
//     }
// }
// if we have a function as a value in object then we call that a method

// Objects Method

// entries() - gives how many values and keys we have in object
// let res1 = Object.entries(studentDetail);
// console.log(res1);

// keys() - gives keys of object
// let res1 = Object.keys(studentDetail);
// console.log(res1);

// entries() - gives  values of object object
// let res1 = Object.values(studentDetail);
// console.log(res1);

let studentDetail = {
    name : "Mohd Abis",
    age: 16,
    isPassed: true,
    address : {
        streetNo : 24,
        city: "Lucknow"
    }
}
// freeze() -  it make the object freeze we can't add or keys in object
Object.freeze(studentDetail);
studentDetail.memeber = 5; // it can't add this key
console.log(studentDetail);
