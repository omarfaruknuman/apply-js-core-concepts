// 1. variable 
var myName = 'Numan';

// math operation: +,-,*,/
// shorthand: +=, -=, *=, /=
// ++, --

// 2. Array
var friends = ['abul', 'batul', 'ratul', 'tatul', 'hatul'];

var thirdfriens = friends[2]; /* Array index */
friends[3] = 'damol'; /* value change*/

// 3. conditionals
// >,<,<=,>=,==,===,!=,!==

if(friends.length < 2){
    console.log('Fokir tor kono friend nai')
}
else{
    console.log('A lots of friends!')
}

// 4. loop
var number = 0;
while(number <= 6){
    console.log(number);
    number++;
}

for(var i=0; i<=10; i++){

}

// 5. function 
function inMoonUp(time){
        if(time > 7){
        return true;
        }
    }

function add(num1, num2){
    return num1 + num2;
}

// 6. Object
var chair = {
    height:30,
    legs: 4,
    back : 1,
    handal: 2,
    looking: 'nice'
}

var mobile = {
    brand:'realme',
    memory:'4GB',
    HDD:'64gb',
    disply:6.5,
    camera: '12 mgfx'
}