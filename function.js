function sum(num1,num2){
    
    let add = num1 + num2
     return add;
}

function minusResult(num1, num2){
    const minus = num1 - num2;
    return minus;
}


const number1 = 100;
const number2 = 200;
const result1 = sum(number1, number2);
console.log(result1);

var result2 = minusResult(100, 50);
console.log(result2)


// we can use the return value of a function.
const difference = result1 -result2;
console.log(difference);

// Example Num: 2
// write a function that print out sorry 20 times.

function printSorry(name){
    for(let i = 0; i < 10; i++){
        const print = 'I Am sorry '+ name;
        console.log(print);
    }
}

printSorry('Maya')
