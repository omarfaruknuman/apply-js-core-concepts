//1. Variable
var birthYear = 1997;

// Math Operation: +, -, *, /
var sum = 34 + 43;
var sub = 34 - 23;
console.log('sumation :' ,sum);
console.log('Subtraction: ', sub);

// Shorthand: +=, -=, *=, /= ,++ ,--
console.log('Printing 1 to 10 using for loop')
for(var i=0; i <= 10; i++){
    console.log(i);
}

// 2. Array
console.log('Array printing')
var studentId = [23, 24, 54, 65, 87]

var a = studentId.indexOf(54);
var b = studentId.indexOf(87);
console.log('Index of 54 is : ', a);
console.log('Index of 87 is : ', b);
var secondStudent = studentId [1]; /*Array Index */
studentId [0] = 33;  /*Change Index */
console.log(studentId);
console.log('Second Student id: ', secondStudent);

// 3. Conditionals:<, >, <=, >=, ==, ===, !=, !== 
var n1 = 43, n2= 34;
if(n2<n1){
    console.log(true);
}else{
    console.log(false);
}

// 4. Loop
console.log('1 to 5 using while loop')
var num = 1;
while(num <=5){
    console.log(num)
    num ++;
}
// 5. Function
console.log('Using function')
function add(num1, num2){
    const sum = num1+num2;
    return sum;
}

var t = add(34,98);
console.log(t)
// 6. Object
console.log('Object ')
var table = {
    legs: 4,
    deks: 1,
    line: 6
}
console.log('Legs of the table: ', table.legs);
console.log(table)
