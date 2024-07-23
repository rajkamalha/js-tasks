// let arr=[5,8,5,4,4,3,5]

// console.log([...new Set(arr)])

// let arr=[1,2,3,4,5,5,4,3]
// let rr=arr.filter(( x, y) => {
//     return arr.indexOf(x)== y
    
// });
// console.log(rr)

let arr=[1,2,3,4,5,5,4,3]
let rr=arr.filter((a,b)=>(arr.indexOf(a)==b));
console.log(rr);