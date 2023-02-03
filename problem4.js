// write a function that you give kilometer and convert
// mile.


function kilometerToMile(km){
    let oneMile = 0.621;
    const result = km * oneMile;
    return result;
}

const kilometer = 12;
const miles = kilometerToMile(kilometer);
console.log(miles);