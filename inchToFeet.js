// const myInches = 12; 
// const myFeet = myInches/12;
// console.log(myFeet);

// const dadarInches = 144;
// const dadarFeet = dadarInches/12;
// console.log('Dadar Feet : ',dadarFeet);

// const dadiInches = 60;
// const dadiFeet = dadiInches / 12;
// console.log('DadiFeet:', dadiFeet);

function inchToFeet(inches){
    const feet = inches / 12; 
    return feet;
}

const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);

const nanaInches = 168;
const nanaFeet = inchToFeet(nanaInches);
console.log('nanafeet', nanaFeet);