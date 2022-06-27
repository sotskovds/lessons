// 1) We have an object storing salaries of our team:
// Write the function to take obj as argument, sum all salaries and return it. Should be 1000 in the example above.
// If salaries is empty, then the result must be 0.

// let salaries = {
//     Mykola: 250,
//     Pavlo: '',
//     Petro: '750',
//     sum: function(){

//         if (this.Mykola.length == 0){
//             this.Mykola = 0;
//         } else{
//             this.Mykola = parseFloat(this.Mykola);
//         }
//         console.log(this.Mykola);
//         if (this.Pavlo.length == 0){
//             this.Pavlo = 0;
//         } else {
//             this.Pavlo = parseFloat(this.Pavlo);
//         }
//         console.log(this.Pavlo);
//         if (this.Petro.length == 0){
//             this.Petro = 0;
//         } else {
//             this.Petro = parseFloat(this.Petro);
//         }
//         console.log(this.Petro);

//         const sum = this.Mykola + this.Pavlo + this.Petro;
//         console.log(sum);
//     }
// }

// salaries.sum()

// 2)
// We have an object storing salaries of our team
// Write the function that returns name and value of employer that gets biggest salary

// let salaries = {
// Mykola: 650,
// Pavlo: undefined,
// Petro: 1500,
// Stas: 0,
// Dastin: 750,
// Natasha: 'NaN',
// Daniil: 1500,
// Mary: 3000,
// Olga: 750
// }

// // desided to make it more flexible - convert object to 2 Arrays: 'names', 'salaries'

// const salariesArray = Object.values(salaries);
// const namesArray = Object.keys(salaries)
// console.log(salariesArray)
// console.log(namesArray)

// const maxSalary = function(){
//     const length = salariesArray.length;
//     let position;
//     let highestSalary;
//     for (let i = 1; i < length; i++){ 
//          if (salariesArray[i-1] > salariesArray[i]) {
//              position = i - 1; // fix position of element with highest number
//              highestSalary = salariesArray[i-1] // fix highest number
//          } else {
//             position = i;
//             highestSalary = salariesArray[i]
//          }
//     }
//     console.log('The employee with the highest salary is - ', namesArray[position]);
//     console.log('His/her salary is ', salariesArray[position]);
// }

// maxSalary(salariesArray, namesArray);

// 3)
// Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.

// For instance:

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };


// function multiplyNumeric(parameter){
//     if (typeof(menu.width) == 'number'){
//         menu.width *= 2
//     }
//     if (typeof(menu.height) == 'number'){
//         menu.height *= 2
//     }
//     if (typeof(menu.title) == 'number'){
//         menu.title *= 2
//     }
// }

// multiplyNumeric(menu);

// console.log(menu);


// 5) Show stars - function must return a string of concatenated asterisks (stars) which
//  have as many concatenated asterisks as number of rows (argument)

// let star =''
// const showStars = (rows) => {
//     for (let i = 1; i <= rows; i++){
//     star += ' ' // number separator
//     for (let j = 1; j <= i; j++){
//     star += '*' // star addition
//     }
//     }
//     console.log(star);
// }
// showStars(4);

// 6) Write a function, which will match job expectations / limitations 
// WITH candidate expectations.

// const candidate1 = { minSalary: 120000 };
// const job1 = { maxSalary: 130000 };
// const job2 = { maxSalary: 80000 };

// function match(candidate, job) {
//     if (candidate.minSalary < job.maxSalary){
//         return true;
//     } else {
//         return false;
//     }
// }

// match(candidate1, job1);
// match(candidate1, job2);

// console.log(match(candidate1, job1))
// console.log(match(candidate1, job2))


// 7) Create a function called _if which takes 3 arguments: a boolean value bool 
// and 2 functions (which do not take any parameters): func1 and func2
// When bool is truth-ish, func1 should be called, otherwise call the func2.Example:
// _if(true, function(){console.log("True")}, function(){console.log("false")})
 
// // Logs 'True' to the console.


// function _if(bool, func1 = function(){console.log("True")}, func2 = function(){console.log("false")}) {
//     if (bool == true){
//         func1();
//     } else {
//         func2();
//     }
// }
// _if(false);


// 8) Your start-up's BA has told marketing that your website has a 
// large audience in Scandinavia and surrounding countries. Marketing 
// thinks it would be great to welcome visitors to the site in their own language.
//  Luckily you already use an API that detects the user's location, so this is an easy win.The Task
// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.


// const Database = {
//     english: 'Welcome',
//     czech: 'Vitejte',
//     danish: 'Velkomst',
//     dutch: 'Welkom',
//     estonian: 'Tere tulemast',
//     finnish: 'Tervetuloa',
//     flemish: 'Welgekomen',
//     french: 'Bienvenue',
//     german: 'Willkommen',
//     irish: 'Failte',
//     italian: 'Benvenuto',
//     latvian: 'Gaidits',
//     lithuanian: 'Laukiamas',
//     polish: 'Witamy',
//     spanish: 'Bienvenido',
//     swedish: 'Valkommen',
//     welsh: 'Croeso'
// }

// function greet(language = 'english'){
//         if (language == 'IP_ADDRESS_INVALID'){
//             return 'not a valid ipv4 or ipv6 ip address';
//         }
//         if (language == 'IP_ADDRESS_NOT_FOUND'){
//             return 'ip address not in the database';
//         }
//         if (language == 'IP_ADDRESS_REQUIRED'){
//             return 'no ip address was supplied';
//         } else {
//             return Database[language];
//         }
// }
// console.log(greet('lithuanian'));

// Possible invalid inputs include:IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
// IP_ADDRESS_NOT_FOUND - ip address not in the database
// IP_ADDRESS_REQUIRED - no ip address was supplied


// 9) write a function multipleArgs(), which sill accept UNLIMITED number 
// of arguments, and returns first AND third of the arguments, if they exist. 
// if only first, return only first.

// function multipleArgs(){
//     if (arguments[2] == undefined) {
//         return arguments[0]
//     } else {
//         return arguments[0] + ' ' + arguments[2];
//     }
// }
// console.log(multipleArgs('text', 3, 4, 5, 6));

// ЗАДАЧИ СО ЗВЕЗДОЧКАМИ!!!


// 10) In order to solve this task, you have to understand the extension of data type Prototype. read this  https://developer.mozilla.org/ru/docs/Learn/JavaScript/Objects/Object_prototypes#%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BF%D1%80%D0%BE%D1%82%D0%BE%D1%82%D0%B8%D0%BF%D0%BE%D0%B2


// Add the isUpperCase method to String to see whether the string is ALL CAPS.  
// For example:"c".isUpperCase() == false

// "C".isUpperCase() == true 
// "hello I AM DONALD".isUpperCase() == false 
// "HELLO I AM DONALD".isUpperCase() == true

// "ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false 
// "ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true

// In this task, a string is said to be in ALL CAPS whenever it does not contain any 
// lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.



// Sorry, haven't figure out, how to do it with Prototype



// 11) write recursive function factorial(num){} which will return a factorial of a given num (number)
// Example: factorial of 5 (5!) is 5 * 4 * 3 * 2 * 1 

// function rec(num){
//     if (num < 2){
//         return 1
//     }
//     return num = num * rec(num - 1)
// }
// console.log(rec(4));

// 12) write recursive function f sequence (read about it here 
// https://geleot.ru/education/math/analytic_geometry/other/Fibonacci_number)
// (SKIP ZERO!!!)
// fibonachi(7) = 13;
// 1, 1, 2, 3, 5, 8, 13

// function fib(position){
//     if (position < 3){
//         return 1;
//     }
    
//     return position = fib(position - 2) + fib(position - 1);
// }
// console.log(fib(7));