function milesToKm(miles){
    const km = miles * 1.60934;
    return km;
}

function kiloToGram(kilo){
    const gram = kilo*1000;
    return gram;
}

const g = 1;
const kilo = kiloToGram(g);
console.log(kilo, 'gram');


const distance = 10;
const road = milesToKm(distance);
console.log('10 Miles = ', road, 'Kilometers');

const mile = 29;
const kms = milesToKm(mile);
console.log('29 miles = ', kms, 'Kilometers.');

const m = 199;
const k = milesToKm(m);
console.log('199 miles = ', k, 'kilometers. ');

const mi = 295;
const kl = milesToKm(mi);
console.log('295 miles = ', kl, 'kilometers.');

console.log('Practicing function::')
function inchToFeet(inches){
    const feet = inches /12;
    return feet;
}

const myHeight = 144;
const myFeet = inchToFeet(myHeight);
console.log(myFeet);

const longMan = 233;
const longManFeet = inchToFeet(longMan);
console.log(longManFeet);

console.log('---::Feet to meter::---');

function feetToMeter(feets){
    const meter = feets / 3;
    return meter;
}

const myfeets = 10;
const myMeter = feetToMeter(myfeets);
console.log('10 feets = ', myMeter, 'meters');

const feets = 3;
const meters = feetToMeter(feets);
console.log('3 Feets = ',meters, 'meters');