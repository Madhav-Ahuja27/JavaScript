// This is a single-line comment

/*This
is
a
multi
line
comment
*/


// OPERATORS
let a=5
let b=2
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
console.log(a++);
console.log(b--);
console.log(--a);
console.log(++b);

let c = 0;
c += a;
c -= b;
c *= 5;
c /= 2;
c %= 2;
c **= a-b;
console.log(c);

console.log(5=="5");
console.log(5==="5");

console.log(1<2 && 3>2);
console.log(a>b || 2<3);
console.log(a!==b);

// CONDITIONAL STATEMENTS

if(5=="5"){
  console.log("Values are equal");
}

if(a<b){
  console.log("B is greater");
} else{
  console.log("A is greater");
}

let age=prompt("Enter your age")
if(age<18){
  console.log("You are junior");
} else if(age>50){
  console.log("You are senior");
} else{
  console.log("You are in the middle")
}

// Ternary Operator (Important)
let age1=25;
let age2=16;
let inp1;
let inp2;

age1>18 ? inp1="Adult" : inp1="Not Adult";
age2>18 ? inp2="Adult" : inp2="Not Adult";

console.log(inp1);
console.log(inp2);

// PRACTICE QUESTIONS

num=prompt("Enter a number:")
if(num % 5 == 0){
  console.log("The number is a multiple of 5");
} else{
  console.log("The number is NOT a multiple of 5");
}

num % 5 == 0 ? console.log("Yes (T)") : console.log("No (T)")


marks=prompt("Enter your marks:")
if(marks>=90 && marks<=100){
  console.log("Your grade is A");
} else if(marks>=70 && marks<=89){
  console.log("Your grade is B");
}else if(marks>=60 && marks<=69){
  console.log("Your grade is C");
}else if(marks>=50 && marks<=59){
  console.log("Your grade is D");
}else if(marks>=0 && marks<=49){
  console.log("Your grade is F");
} else{
  console.log("Please enter valid marks");
}
