document.addEventListener("DOMContentLoaded", function(){

let str = `abcde`;
alert(str[0]);
alert(str[1]);
alert(str[2]);
alert(str[3]);
alert(str[4]);
    
    });

let a = prompt (`Введите 1-е число`);
let b = prompt (`Введите 2-е число`);
console.log(a > 0 || b > 0);

let age = prompt (`Сколько вам лет?`);
if (age < 18) {
    alert("Несовершеннолетний")
}
else{
    alert("Cовершеннолетний")
}


//2

const first = prompt(`Введите первое число`);
const second = prompt(`Введите второе число`);

if (first > second){
    console.log(`Первое число больше`)
}
if (first < second){
    console.log(`Второе число больше`)
}
else{
    console.log(`Числа равны`)
}

//3

const number = prompt(`Введите число`);
if (number % 2 === 0) {
    console.log("Это чётное число");
} 
else {
    console.log("Это нечётное число");
}

//6

const year = prompt (`Введите год`);

if(year%4 ===0){
    console.log("Это високосный год");
}
if(year%100 === 0 && year%400 === 0){
    console.log("Это високосный год");
}
