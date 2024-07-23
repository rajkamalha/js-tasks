let now=new Date()
console.log(now);

console.log(now.toDateString());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getMonth());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

// set date

let newDate=new Date()
newDate.setDate(2)

newDate.setFullYear(2025)
newDate.setMonth(7)
newDate.setTime(5)


console.log(newDate);
console.log(newDate.getTime());