// 2) Write an if condition to verify that the age variable is between 18 and 90 inclusive.
// Inclusive means that the value of age CAN be either 18 or 90.

const age = 12
if (!Number(age)) { 
    console.log('Age is not a number');
} else if (age >= 18 && age <=90) {
    console.log('Your age is correct');
} else {
    console.log('You are too young or too old');
}

// 3) I recommend you to run code in browser console, since it allows easy usage of user input parsing with prompt method.

// prompt() // Use to get input from user if needed
// alert() // To output with alert

// Log available everywhere (browser or nodejs):
// console.log()

// Write script that will
// - accept user name
// - welcome user with his username
// - ask his birthday year
// - calculate how old is user, and print (or alert) his calculated age (advanced task to count current year programatically and not use current year as const year = 2021, HINT: use new Date() and then get current yet, read about Date class);
// - think about how you can make your code safe (as QAs, test yourself, put there incorrect values, empty values and use conditions to make your code safe and notify user about mistakes)
// ONLY FOR THIS TASK: AGAIN, EXECUTE YOUR CODE TO TEST IN BROWSER CONSOLE (get into dev tools and open Console Tab) 


// Example:
// -> Please, enter your first name
// <- Mykola
// -> Hello, Mykola, nice to meet you. -> Please enter your birthday year
// <- 1900
// -> 119 years

function ageCounter(){
    let name = prompt('Please, introduce yourself');
    if (name.length === 0){
        alert(`You haven't write anithing`);
        return; // 'return' will stop function ageCounter if name not valid
    } else if (name.length > 30){
        alert(`Name is too long`);
        return; 
    } else {
        alert(`Hello ${name} it is pleasure to meet you!`);
    }
    let currentYear = new Date();
    currentYear = currentYear.getFullYear()
    let birthdayYear = prompt('Would you kindly write the year of your birth');
    if (!Number(birthdayYear)){
        alert(`Birthday year should be 4 characters number`);
        return;
    } else if (birthdayYear <= 1900 || birthdayYear >= currentYear) {
        alert(`Incorrect birthday year`);
        return;
    } else {
        let yourAge = currentYear - birthdayYear;
        alert(`Your age is ${yourAge}`);
    }
}
ageCounter();

// 4. Write a script which will convert number into corresponding letter, and print(or alert) result:

// The grades should be computed as follows :
// Range Grade
// <60 F
// <70 D
// <80 C
// <90 B
// <100 A

// Example:
// for number 92 - print "A"
// for number 29 - print "F"

function gradeConverter(grade) {
    if ((!Number(grade) && grade != 0) || grade > 100){ //  - added "grade != 0" so 0 grade would not go to 'Grade is incorrect'
        console.log('Grade is incorrect')
    } else if (grade < 60) {
            console.log('Your grade is "F"');
    } else if (grade < 70) {
            console.log('Your grade is "D"');
    } else if (grade < 80) {
            console.log('Your grade is "C"');
    } else if (grade < 90) {
            console.log('Your grade is "B"');
    } else {
            console.log('Your grade is "A"');
    }
    }
gradeConverter('74');

// Задания со зведочками)
// 5.
// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// HINT: use conditions to get it correctly
// Examples 
// (Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2){
    operation = prompt('Please enter operator'); 
    let result;
    value1 = prompt('Please enter first number');
    value1 = parseFloat(value1); // String to Number
    if (!value1 && value1 != 0){ // Check if Number valid
        alert('Incorrect value');
        return;        
    }   
    value2 = prompt('Please enter second number');
    value2 = parseFloat(value2); // String to Number
    if (!value2 && value2 != 0){ // Check if Number valid
        alert('Incorrect value');
        return; 
    }
        switch (operation) {
            case '+':
                result = value1 + value2;
                alert(`${value1} ${operation} ${value2} = ${result}`); //value1 + value2
                break;
            case '-':
                result = value1 - value2;
                alert(`${value1} ${operation} ${value2} = ${result}`); //value1 - value2
                break;
            case '*':
                result = value1 * value2;
                alert(`${value1} ${operation} ${value2} = ${result}`); //value1 * value2
                break;
            case '/':
                result = value1 / value2;
                alert(`${value1} ${operation} ${value2} = ${result}`); //value1 / value2
                break;   
            default:
                alert('Unknown operator');
        }
}
basicOp ();

// 6.
// We are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats are considered UNeven for this task.
// function testEven(n) {
//     //Your awesome code here!
// }
// Expected: 
// testEven(0) = true
// testEven(0.5) = false
// testEven(1) = false
// testEven(2) = true
// testEven(-4) = true

function testEven(n) {
    n = parseFloat(n);
    if (!n && n != 0) {
        console.log('Incorrect value')
        return; // check if value is valid. If not - stop function
    } 
    if ((n - parseInt(n)) > 0 || (n - parseInt(n)) < 0) { // cut floats from the check
        return false;
    } else if (((n / 2) - parseInt(n / 2)) == 0) { // here we check if integer number is even
        return true;
    } else {
        return false;
    }
}

console.log(testEven('16'));

// 7. You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// For example, update_light('green') should return 'yellow'.
// HINT: try using switch-case for practice

function traficLights(current){ // make with function
    switch (current) {
        case 'green':
            current = 'yellow';
            console.log(current);
            break;
        case 'yellow':
            current = "red";
            console.log(current);
            break;
        case 'red':
            current = 'green';
            console.log(current);
            break;
        default:
            current = 'red'; // if function brakes - traffic light become red 
            console.log(current);
    }
}
traficLights('yellow');

// make it more interesting with cycle to be more live traffic like
let timer = 0; 
let startlite = 'green';
while (timer < 100){
    switch (startlite) {
        case 'green':
            startlite = 'yellow';
            console.log(startlite);
            break;
        case 'yellow':
            startlite = "red";
            console.log(startlite);
            break;
        case 'red':
            startlite = 'green';
            console.log(startlite);
            break;
        default:
            startlite = 'red';
            console.log(startlite);
    }
    timer++;
}



// 8. The first century spans from the 1 up to the year 100, the second century - from the year 101 up to  the year 200, etc.Task
// Given a year, return the century it is in.Examples
// 1705 --> 18
//  1900 --> 19
//  1601 --> 17
//  2000 --> 20


function century(year) {
    year = prompt('Please enter your year');
    year = parseFloat(year);
    if (year.length > 4 || !year && year != 0) {
        alert('Invalid year');
        return;
    } else if (year == 0) {
        alert('The Christ was born!'); // Just an edge case that was not specified in task
    }
    else if (((year / 100) - parseInt(year / 100)) == 0) { // Check last day of century like 1900
        alert(year / 100);
        return;
    } else { // Check other days of century like 1705
        alert(parseInt(year / 100) + 1);
        return;
    }
}

century();


// 9. ДЛЯ ОЧЕНЬ УВЕРЕННЫХ В СЕБЕ :D (это сложно но все делается на условиях, вы это уже знаете)
// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).
// Write a function that given a floor in the american system returns the floor in the european system.
// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.
// Basements (negatives) stay the same as the universal level.
// More information hereExamples
// 1 => 0
//  0 => 0
//  5 => 4
//  15 => 13
//  -3 => -3

function americanFloors(floor){
    floor = parseFloat(floor);
    if ((floor - parseInt(floor) > 0) || !floor && floor !=0) { // floor validation check
        console.log('error'); 
        return;
    } else if (floor < 0) {
        console.log('European floor number: ', floor);
    } else if (floor == 0){
        console.log('European floor number: can be both 0 and 1');
    } else if (floor > 0 && floor < 13){
        console.log('European floor number: ', floor + 1);
    }  else if (floor == 13){
        console.log('No such floor number in America');
    }
    else{
        console.log('European floor number: ', floor + 2);
    }    
}
americanFloors();


// !!!!LOOPS!!!
// 1. создайте цикл for(), который будет проходить от 0 до 100, и законсолит ТОЛЬКО  ПЕРВЫЕ ТРИ ЗНАЧЕНИЯ КРАТНЫХ 7ми. 
// Именно кратные (т.е. те которые делятся на 7 с 0 остатком). И дальше не выполниться.

let n = 0;
for (let i = 0; i< 100; i++){
    if (((i / 7) - Math.floor(i / 7)) == 0 && i != 0 && n < 3){
        console.log(i);
        n++;
    }
}

// 2. Напишите цикл while, который будет использовать каунтер, 
// инкрементируемый при каждом входе в луп и нативную JS функцию Math.random() (возвращает рандомное число от 0 до 1), 
// умножая ее на каунтер. условие выхода будет, когда результата Math.random() * counter > 3;

let i = 0;
let random;
do {
random = Math.random();
console.log(i * Math.random());
i++; 
} while ( i * random <= 3)

// 3. напишите цикл do-while, с каунтером, который будет конкатенировать текущее значение каунтера к строке 
// (объявленой выше пустой), пока длина строки не станет 20 символов.

let counter = 0;
let str = '';
do{
    str = String(counter) + str
    console.log(str);
    counter++
} while (str.length < 20)

// 4. Напишите вложений цикл for () { for () {}}, который будет логать внутри ВЛОЖЕННОГО цикла значение i / j. 
// внутреннее условие будет j < i. Внешний цикл будет УМЕНЬШАТЬ  i, а внутренний  будет УВЕЛИЧИВАТЬ j. сделайте 10 итераций i.

for (let i = 10; i; i -= 1){
    for(let j = 0; j < i; j++){
        console.log(i/j);
    }
}
