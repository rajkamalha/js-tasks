let a=""
let n=5

for(let i=0; i<n;i++){
    for(let j=0;j<i;j++){
        a+=" "
    }
    for(let k=0;k<2*(n-i) -1;k++){
        a+="*"
    }
    a+="\n"
}
  console.log(a)    
