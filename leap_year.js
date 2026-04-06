let year=2024

function isLeapYear(value){
    if(value%400 === 0){
        return `${value} is a leap year.`;
    }else if(value%100 ===0){
        return `${value} is not a leap year.`;
    }else if(value%4 === 0){
        return `${value} is a leap year.`;
    }else{
        return `${value} is not a leap year`
    }
}
isLeapYear(year);
year=2000;
isLeapYear(year);
year=1900;
isLeapYear(year);
const result=isLeapYear(year);
console.log(result);

