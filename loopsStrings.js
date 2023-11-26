// LOOPS

for(let i=0; i<5; i++){
  console.log("This is printed 5 times");
}

let j = 1;
while(j<=3){
  console.log("This is printed 3 times");
  j++;
}

let k=0
do{
  console.log("This is only printed once (1)")
} while(k>0);

// for loop of Python (for of)
let st="Madhav Ahuja";
for(let i of st ){
  console.log(i);
}

// for loop for objects (for in)
const obj1 = {
  objname:"object1",
  objtopic:"loops"
}
for(let key in obj1){
  console.log("Key is", key, "and value is", obj1[key])
}

// Practice Loops
for(let i=0; i<100; i++){
  if(i % 2 == 0){
    console.log(i)
  }
}

let gameNum=8;
let inp = prompt("Guess a number from 0 to 9");
while(inp != gameNum){
  inp = prompt("You guessed wrong, Try again");
}
console.log("You are out of the loop, it means you guessed right")

// STRINGS
let str1="This is a String";
console.log(str1.length);
console.log(str1[0]);
console.log(str1.slice(2,5));
console.log("The char at index 5 is", str1.charAt(5));
// Template Literals
let a=1;
let b=2;
templateLiteral=`The value of a is ${a} and the value of b is ${b}`;
console.log(templateLiteral);

console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
let str2="     ok   this   is a well spaced string                  ";
console.log(str2.trim());
console.log(str1.concat(str2));

// String Practice
let inpName = prompt("Enter your name:");
let userName = "@" + inpName + inpName.length
console.log(`The username generated for ${inpName} is ${userName}`);
