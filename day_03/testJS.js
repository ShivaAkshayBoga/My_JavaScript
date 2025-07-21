let num1=prompt("enter first number");
let num2=prompt("enter second number");
//confirm("should i display the answer");
let ans=parseInt(num1)+parseInt(num2);
//window.alert(`ans is ${ans}`);
document.writeln("ans is "+ans);
document.querySelector('h1').style.color='red';

function onclck(){
    window.alert('onclick called!');
}