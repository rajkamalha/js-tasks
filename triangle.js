let a=""
for(let i=1;i<=5;i++){
    for(let j=1;j<=5-i;j++){
        a+=" "
    }
    for(let k=1;k<=2*i-1;k++){
        a+="*"
    }
    a+="\n"
}
console.log(a)