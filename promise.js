let number = 4;
let prom = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    if(number%2==0){
        resolve("Sent by resolved");
    }else{
        reject("Sent by rejected");
    }}
    ,4000);
})

// console.log(prom);

//pending until full execution
// fulfilled
// rejected

prom.then((resolveInp)=>{
    console.log(resolveInp);
})
prom.catch((rejectInp)=>{
    console.log(rejectInp);
})

// then -> resolved

// catch -> rejected