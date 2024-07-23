let a="";
let n=5
for(let i=1;i<=n;i++){
    for(let j=1;j<=n-i;j++){
        a +=" "
    }
  for(let k=1;k<=i;k++){

   a +="*"
}
a +="\n"
}


console.log(a)