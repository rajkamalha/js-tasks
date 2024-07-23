let names = ['david','frank', 'hansy','mark']
let cap=names.map((item)=>{
    return item[0].toUpperCase() + item.slice(1).toLowerCase()
})
console.log(cap);



// let names = ['david','frank', 'hansy','mark']
// let cap=names.map((item)=>{
//     return item.slice(1)
// })
// console.log(cap);