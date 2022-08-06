// function isEven(num){
//     const reminder = num % 2;
//     // console.log(reminder);
//     if(reminder === 0){
//         // console.log('Number is even.')
//        return true;
//     }
//     else{
//         return false;
//         // console.log('Number is odd.')
//     }
// }

// const even = isEven(303);
// console.log(even);

// const anoEven = isEven(500);
// console.log(anoEven);

console.log("---::Is Even Practicing::---");
function checkEven(number){
    const reminder = number % 2;
    if(reminder === 0){
        return true;
    }else{
        return false;
    }
}


// checkEven(393);
// checkEven(392);

const ceven = 235;
const re = checkEven(ceven);
console.log('reminder of 235 is :', re);

const checkNum = 122;
const checkResult = checkEven(checkNum);
console.log('reminder of 122 is :',checkResult);

console.log('---::Is odd practicing::---');
function isOdd(givenNum){
    const oddReminder = givenNum % 2;
    if(oddReminder !== 0){
        // console.log('The number is odd');
        return true;
    }else{
        // console.log('The number is even.');
        return false;
    }
}

// isOdd(1223);    
// isOdd(1224);    

const checkN = 123;
const result = isOdd(checkN);
console.log('123 is an odd number: ' ,result);

const cN = 832;
const r = isOdd(cN);
console.log('832 is an odd number: ',r);