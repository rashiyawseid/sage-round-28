function externalAlert(){
    alert("external")
}
//variable
let name="abebe";
console.log(name)

let age=20
age=17
console.log(age)

const pi=3.14
console.log(pi)

let x=1, y=2
console.log(x+y)

let isactive=true
console.log(isactive)

let fruits=["banana","mango","papaya"]
console.log(fruits)
fruits[0]="apple"
console.log(fruits)
let a=1 ,b='1'
console.log(a==b)
console.log(a===b)

console.log(a!=b)
console.log(a!==b)

function sum(){
    console.log(30+40)
}

sum()
sum()

function multiplication(){
    console.log(x*y)
}

multiplication(30,40)
multiplication(300,400)

function avarage(x,y){
    console.log((x+y)/2)
}

avarage(20,30)

let myage=20

if(myage>=18){
     console.log("you are an adult")
}
else{
    console.log("you are a minor")
}

let score =60

if(score>=58){
   console.log("you are passed")
}
else{
    console.log("you are failed")
}

for(let i=3;i<0;i++){
    console.log(i)
}
    let i=0

    while(i<5){
     console.log(i)   
     i++
}

let title=document.getElementById('title')
title.innerText="this is the the text from javascript !"


