// Ex. 1 - Поменять местами значения "cat" та "dog" 
let cat = 'cat';
let dog = 'dog';

let switcher = cat;
cat = dog;
dog = switcher;

console.log(cat);
console.log(dog);

// Ex.2 - Values and variables
// 1. Огласите переменные 'company', 'position'  и запишите туда значения соответственно компании, в которой вы работаете.
// 2. Залогируйте их вместе, используя функцию console.log() один раз

const company ='WeSoftYou'; // 'let' to 'const' is changed due to Ex.4 requirements
let position = 'QA'

console.log(company, position)

// Ex.3 - Data Types
// 1. Объявите переменную с названием 'isProductCompany' и запишите значение в соответствии с компанией в которой работаете. Значение должно быть типа boolean. Также объявите переменную
// 'projectName', но пока не записывайте туда никакого значения.
// 2. Залогируйте тип переменных 'isProductCompany', 'company' и 'position' в консоль.

let isProductCompany = false;
let projectName;
console.log(typeof isProductCompany);
console.log(typeof company);
console.log(typeof position);

// Ex.4 - let, const and var
// 1. Запишите значение в 'projectName' в соответствии с названием проекта над которым работаете
// 2. Подумайте, какие из созданных ранее переменных следует объявить через "const" (какие значения могут измениться, а какие нет?). Затем измените эти переменные, используя "const".

projectName = 'CreatoRanch'

// Ex5. - найди ошибку (английский)
// This code should store "jsfor.qa" as a variable called name but it's not working. Can you figure out why?

const a = "jsfo"; // changed '==' to '=' as the equality operator (==) checks whether its two operands are equal, returning a Boolean result.
const b = "r.qa"; 
const name = a + b;

console.log(name);


// Ex6. - написать функцию, которая будет суммировать строки математичесски. Пример:
// "4", "5" --> "9"
//  "34", "5" --> "39" 
// "", "" --> "0" 
// "2", "" --> "2"
//  "-5", "3" --> "-2"

function sumStr(a, b) {
    let num1 = Number(a);
    let num2 = Number(b);
    console.log(num1 + num2);
}

sumStr('-2', '17.5');

// Ex7. - написать функцию, которая принимает два аргумента и возвращает (логает) остачу после деления БОЛЬШЕГО аргумента на МЕНЬШЕЕ (не просто первое на второе)
// remainder(17, 5) -> 2
// remainder(13, 72) -> remainder(72,13) -> 7 (The larger number should divide the smaller number)
// remainder(1, 0) -> NaN (Division by 0)
// remainder(0, 0) -> NaN (Division by 0)

function remainder(a, b){
    if ( a > b ) {
        console.log(a % b);
    } 
    else {
        console.log(b % a);
    }
}
remainder (16, -72.8)

// Ex8. - Get opposite number
// Very simple, given a number, find its opposite.
// Examples:
// 1: -1 
// 14: -14 
// -34: 34  

function opposite(a){
    console.log(-a)
}
opposite (-16)

// Ex9. - Number to string
// We need a function that can transform a number into a string.
// What ways of achieving this do you know?Examples:
// 123 --> "123"
//  999 --> "999"


function numberToString(num) {
    let str1 = String(num);
    let str2 = num.toString();
    console.log(str1, typeof str1);
    console.log(str2, typeof str2);
}
numberToString(999);