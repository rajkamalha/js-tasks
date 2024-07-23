// let arr = [21, 12, 13, 45, 54];
// if (arr.includes(12)) {
//     console.log("12 is present in the array.");
// } else {
//     console.log("12 is not present in the array.");
// }




const arr = [5, 20, 30, 40, 50];


const result = arr.find(element => element === 30);


if (result !== undefined) {
    console.log("30 is present in the array.");
} else {
    console.log("30 is not present in the array.");
}