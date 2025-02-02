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
