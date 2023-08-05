function isLeapYear(year){
    if(year %4 === 0){
           return true;
    }else{
        return false;
    }
}



 const  value =  2024;
 const year =  isLeapYear(value);
 console.log(year);
 
 const value1 =  1953;
 const herYear = isLeapYear(value1);
 console.log(herYear);