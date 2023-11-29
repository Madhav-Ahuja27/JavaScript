let arrMarks=[85,97,44,37,76,60];
let sumMarks=0;
for(let i of arrMarks){
  sumMarks+=i;
}
let avgMarks=sumMarks/arrMarks.length
console.log(arrMarks);
console.log(sumMarks);
console.log(avgMarks);

let prices=[250,645,300,900,50];
console.log(prices);
for(let i=0; i<prices.length;i++){
  prices[i]=prices[i]-(prices[i]/10);
}
console.log(prices);



let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
let delVal=companies.shift();
console.log(companies);
companies.splice(1,1,"Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);
