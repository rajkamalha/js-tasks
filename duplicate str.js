
let list="once up on a time c once up time"
let res=list.split(/\s+/)
console.log(res);
let words=res.filter((el,index)=>{
   return res.indexOf(el)===index
});
console.log(words);
let c=words.join(' ')
console.log(c);
