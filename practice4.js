// Exercise 1
// Need to create function which display the max number from the array

// const numbers = [-1, 22, -13, -0.4, 15];

// const maxNumber = getMax(numbers);

// console.log(maxNumber) // should display max number from the array 5

// function getMax([]) {
//     const maxNumber = numbers.sort((a, b) => (a - b)); // here we sort array in ascending order 
//     return maxNumber.pop(); // here we return last value in the array (max one)
// }

// // EX2
// // write function to count number of 1 in array, using:

// const arr = [1,2,3,4,1,4,5,21234,214,23,45,12,11,1,4,0,3,2,11,1];

// // 2.1 ONLY indexOf() method (also can use loop)

// let i = 0;
// let counter = 0;
// do {
//     if (arr.indexOf(1, i) >=0 ){
//         i = arr.indexOf(1, i); //if we find 1 in the array - we will continue searching starting finding position
//         counter++; // and add 1 to counter
//     }
//     i++;
// } while (i < arr.length)

// console.log(`the result is - ${counter}`)

// //2.2 filter() and Length

// let result = arr.filter(value => value == 1);
// console.log(result.length);

// //2.3 NEW RULE: find out if there is 0 in this array using includes()

// console.log(arr.includes(0));

// // EX3
// let users = [
// { id: 1, name: "John", age: 43 }, // same age
// { id: 2, name: "Pete", age: 43 },
// { id: 3, name: "Mary", age: 37 }
// ];
// // Find out if users array has user with age 37 in it using (returning boolean value)
// // 6.1 using find()

// const user = users.find(item => item.age == 37)
// if (typeof user !== 'undefined'){
//     console.log('true')
// } else {
//     console.log('false')
// }

// // 6.2 using some()

// let userByAge = users.some(function(user){
//     return user.age == 37;
// });

// console.log(userByAge);

// // 6.3 using filter() and length

// let user37 = users.filter(item => item.age == 37)
// console.log(!!Number(user37.length));

// // ex4
// // write a function which will return new array with all numbers (srings) as separate elements of array
// // expected ['one', 'two',...]


// const arrStr = ['one, two, three', 'four, five', 'seven, six'];
// function spliter(arr){
//     let newArray = [];
//     for (let i = 0; i < arrStr.length; i++){
//         newArray = newArray.concat(arrStr[i].split(','));
//      }
//      return newArray;
// }

// console.log(spliter(arrStr));

// // next, create second function, pass there result of function above and create ONE STRING,
// // comma-separated with all the elements of array in it.

// function toString(array){
//     const str = array.join();
//     console.log(str);
// }

// toString(spliter(arrStr));

// // EX5
// // Write a function, gooseFilter , that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.
// // The geese are any strings in the following array, which is pre-populated in your solution:

// geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]


// // For example, if this array were passed as an argument:["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

// // Your function would return the following array:["Mallard", "Hook Bill", "Crested", "Blue Swedish"]


// // The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

// const allBirds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];

// function gooseFilter (birds) {
//   const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//   console.log(birds);
//   console.log(geese);
//   for (let i = 0; i < birds.length; i++){ // compare each element of array birds with each element of array geese
//     for (let j = 0; j < geese.length; j++){
//         if (birds[i] === geese[j]){ 
//             birds.splice(i, 1); // if values match - remove it from the array birds
//             i--; // because after 'splice' - max length and element position changes - we need to check same 'i' again
//         }
//     }
//   }
//   return birds;
// };

// console.log(gooseFilter(allBirds));

// Examples:
// gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]),["Mallard", "Hook Bill", "Crested", "Blue Swedish"])

// gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]),["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])



// ЗАДАЧА СО ЗВЕЗДОЧКОЙ))
// //EX 6
// Consider a matchmaking system that is designed to deliver jobs to software developers on a continual basis. 
// As more quality jobs are handpicked into the system, they will be matched to all the enrolled developers; 
// affording them better opportunities daily.


// This means that somewhere in the system there exists functionality to take 
// a job and match it against enrolled candidates. 
// There are several factors that go into this matching, but we'll focus on two for the purposes of this task.


// Create a function match which takes a job, and filters a list of candidates to 
// the ones that match the job. We'll focus on two matching properties for this task: equity and location.

// Equity
// The candidate has a equity property (boolean) indicating if they desire equity, while the job will 
// have a maximum equity property (float) representing the max amount of equity offered. 
// If the maximum equity is zero, we can infer there is no equity offered. A job will match unless 
// the candidate desires equity, but the job does not offer any.

// Location
// The candidate will have two location properties: current location and desired locations. 
// A job can be located in multiple places as well which will be represented by its locations property. 
// A match is when a job location is either in the candidate's current location or 
// any of the candidate's desired locations.


// So the candidate list might look like this:
// let candidates = [{
//     desiresEquity: true, 
//     currentLocation: 'New York', 
//     desiredLocations: ['San Francisco', 'Los Angeles', 'Colorado'] 
//     }, ...];

 

// And a job might look like this:
// let job = {
// equityMax: 1.2,
// locations: ['New York', 'Kentucky']
// }



function match(job, candidates) {
    let i = 0; //get id of the candidate
    let results = []; //array of results of the matching
    let bool = false; // parameter that we will use in geo matching
    do {
      if (candidates[i].desiresEquity === !!Number(job.equityMax) || (!!Number(job.equityMax) == true && candidates[i].desiresEquity == false)){ // check if candidate equity = job equity or job has equity and candidate don't need it
        // candidates[i].desiredLocations.push(candidates[i].currentLocation); // add currentLocation to desiredLocations not to make 2 separate checkings       
        console.log(bool);
        candidates.map(candidates => { // here we get array desiredLocations + currentLocation from global candidate array
          for (let j = 0; j < candidates.desiredLocations.length; j++){
            for (let k = 0; k < job.locations.length; k++){
                if (candidates.desiredLocations[j] == job.locations[k]){ // compear each value of array 'locations' 'from job' with each value of array 'desiredLocations' from 'candidates'
                bool = true; // if we have at least 1 match - set bool = true
                }
              }
            }
        })
        console.log(bool);
        if (bool == true){
          results.push(i); // add id of candidate to 'results' array as it match both Equity and geo
          bool = false; // and we need to return bool back to false to make geo matching functional again
          }
      } 
    i++;
  } while (i < candidates.length);
  console.log(candidates);
  console.log(results);
}


// TEST DATA:
const candidates = [{
  desiresEquity: true, 
  currentLocation: 'New York',
  desiredLocations: ['San Francisco', 'Los Angeles']
}, {
  desiresEquity: false, 
  currentLocation: 'San Francisco',
  desiredLocations: ['Kentucky', 'New Mexico'] 
}];


job1 = { equityMax: 0, locations: ['Los Angeles', 'New York'] },
job2 = { equityMax: 1.2, locations: ['New York', 'Kentucky'] };


// EXPECTED RESULT:
match(job2, candidates)

//match(job2, candidates).length, 2