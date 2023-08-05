// const myInces = 12;
// const myFeet =  myInces /12;
// console.log(myFeet);

// const dadaInces = 144;
// const dadaFeet =  dadaInces /12;
// console.log(' dadafeet:',dadaFeet);


// const dadInces =  60;
// const dadiFeet = dadInces /12;
// console.log(dadiFeet);

//  inchs To feet 

function inchToFeet (inches){
     const feet = inches / 12;
     return feet;
}

const dadainChs =  144;
const result =  inchToFeet(dadainChs);
console.log(result);



const nanainChs =  134;
const nanaFeet = inchToFeet(nanainChs);
console.log(nanaFeet);





// mils to kilomiter 

function mailTokm (mail){
   const km = mail*1.60934;
   return km;
}


const mail =  100;
const kilomiter =  mailTokm(mail);
  console.log(kilomiter);



  const mail2  = 200;
  const kilo2 =  mailTokm(mail2);
  console.log(kilo2);