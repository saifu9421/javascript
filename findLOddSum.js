function getSumOFAnArray(array){
   const oddNumber = [];
   for(var i = 0 ; i< array.length ; i++){ 
        if(array[i] %2 === 1) {
            console.log(array[i]);
        oddNumber.push(array[i]);

        }
   }
   return  oddNumber ;
}


const number  =[12,23,45,66,879,231,13,44,22,66,76,35,21];
const result =  getSumOFAnArray(number);
console.log('result =', result);


const num1 = [11,13,14,15,16,17,18,19,20];
const result1 = getSumOFAnArray(num1);
console.log( 'result =', result1);
