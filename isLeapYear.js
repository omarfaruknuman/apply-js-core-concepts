console.log('---:::Finding leap year using function:::----');

function isLeapYear(year){
    const reminder = year % 4;
    if(reminder === 0){
        console.log('Leap Year',year);
    }else{
        console.log('Not leap Year',year);
    }
}

isLeapYear(1883);
isLeapYear(1992);


console.log('---::Finding leap year with true or false::---');

function findLeapYear(year){
    const leapY = year % 4;
    if(leapY === 0){
        return true;
    }else{
        return false;
    }
}

const year = 1952;
const leap = findLeapYear(year);
console.log(year,'Leap Year: ',leap);


 