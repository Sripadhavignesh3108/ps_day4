const prompt = require("prompt-sync")();

let input=prompt("enter a number : ");
let filt="",dup="",unq="";
for(n of input){
    if(!filt.includes(n))
        filt+=n
}
for(i of filt){
      count=0;
    for(j of input){
         if(i==j){
            count++;
         }
        }
         if(count>1) dup+=Number(i)
            else unq+=Number(i)
}
let max=dup[0];
let max1=unq[0];
let min=dup[0];
let min1=unq[0];
for(m of dup){
    if(m<min){
        min=m;
    }
    if(m>max){
        max=m
    }
}
for(v of unq){
    if(v<min1){
        min1=v;
    }
    if(v>max1){
        max1=v
    }

}

console.log(` sum of smallest unique number and smallest duplicate number is : ${min1} + ${min} =`,Number(min)+Number(min1))
console.log(` sum of Largest unique number and largest duplicate number is : ${max1} + ${max} =`,Number(max)+Number(max1))
console.log(` sum of Largest unique number and Smallest duplicate number is : ${max1} + ${min} =`,Number(max1)+Number(min))
console.log(` sum of Smallest unique number and largest duplicate number is : ${min1} + ${max} =`,Number(min1)+Number(max))
