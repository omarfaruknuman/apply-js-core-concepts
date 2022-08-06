console.log('---::Checking the leap year::---');
/**
 * 1. The year is multiple of 400
 * 2. The year is multiple of 4 and not a multiple of 100
 */
function checkLeapYear (year){
    if((0 == year % 4) && (0 != year % 100 ) || (0 == year % 400)){
        // console.log(year + ' is a leap year.');
        return true;
    }else{
        // console.log(year + ' is not a leap year.');
        return false;
    }
}


// checkLeapYear(1864);
// checkLeapYear(1865);
// checkLeapYear(1952);
// checkLeapYear(1900);

const y = 1934;
const leap = checkLeapYear(y);
console.log(y, ' is a leap year: ',leap);

const x = 1952;
const leapY = checkLeapYear(x);
console.log(x, ' is a leap year: ',leapY);