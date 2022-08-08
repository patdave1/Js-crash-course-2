// //LOGIAL OPERATORS

let num1 = 10;
let num2 = 20;
let num3 ="10";
let word1 = "Hello";
let word2 = "hello";


console.log(num1 < num2);
console.log(num1 > num2);
console.log (num1 < num2);
console.log(num1 > num2);
console.log(!true);
console.log(!false);
console.log(num1 == num3);
console.log(num1 === num3); //equality check
console.log(word1 === word2)
console.log(word1 !== word2)

//CONTOL FLOW
let items = "U2";

let item = "Anapurna"
if (item === "Anapurna") {
    console.log("Buy Anapurna");
} else if (item === "U2") {
    console.log("Buy U2");
} else {
    console.log("Buy Rocky Salt");
}


//GRADING SYSTEM
let score = 100;
if (score >= 90 && score <= 100) {
    console.log("Excellent");
} else if (score >= 80){
    console.log("Very Good");
} else if (score >=70){
    console.log("Good");
}else if (score >=60){
    console.log("Average");
} else if (score >= 50) {
    console.log ("credit")
} else if (score >= 40) {
    console.log(pass);
} else if (score >= 30) {
    console.log ("fail");
}


//FUNCTION
function sum(a, b) {
    let total = a + b;
    return total; 
}


let eleven = sum(5, 6);
let fifteen = sum(7, 8);
let nintteen = sum(9, 10); 


function multiply(a, b) {
    let total = a * b;
    return total; 
} 


let ten = multiply(2)
console.log(ten);

LOOPS

for (let z = 1;z <=20; z++)
console.log(z + ".Gate Foundation Ghana");


// while loop
let num = 1
while (num <= 10){
    console.log(num)
    num = num + 1;
}


// do ...while loop
let age = 1;
do{
    console.log(".YOU CAN'T VOTE");
    age++;
   
} while (age < 18);


// Arrays methods
let ages = [18, 25, 30, 22, 35, 25, 19, 19, 38];

for (let age of ages) {
    console.log(Math.pow(age, 2));
}

let marriage1 = ages.filter(function(num) {
    return num > 25;
});
let marriage = ages.filter((mark) => mark > 25);
console.log(marriage);


//map
let squares = ages.map((age) => age * age);
console.log(squares);

// find
let eigtheen = ages.find((age) => age === 18);
console.log(eigtheen);