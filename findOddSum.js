function getSum(numbers){
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;
}

const myNumbers = [12, 65, 45, 78, 32, 45,91 ];
getSum(myNumbers);


console.log('---::Add all the array elements::---');
function sumArray(nums){
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        const index = i;
        const element = nums[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;
}

const mNums = [12, 65, 45, 78, 32, 45, 91];
sumArray(mNums);