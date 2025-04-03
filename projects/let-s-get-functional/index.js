// #!/usr/bin/env node

'use strict';


/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
/*
I: Array of customer objects
O: Returns the number of male customers
C:
E:
*/

// version of solve without filter
// var maleCount = function(array) {
//     //create a variable for the number of males
//     let count = 0;
//     // make a loop to go through the array
//     for (let i = 0; i < array.length; i++){
//         // determine if current object gender is male
//         if (array[i].gender === 'male'){
//             // if it is, add to the count
//             count += 1;
//         }
//     }
//     return count;
// };


/* think back to FILTER
FILTER will take in data, test each item to see which one passes, then returns an array 
in maleCount, filter would be useful 
*/
// var maleCount = function(array){
//     const males = _.filter(array, function(customer){
//         return customer.gender === 'male';
//     });
//     // filter method returns an array, get array length to know count
//     return males.length;
// };


// now, refactor into an arrow function
var maleCount = function(array){
    // this is streamlined and can tack on .length property at the end instead of making a new line
    return _.filter(array, (customer) => customer.gender === 'male').length;
};


var femaleCount;

var oldestCustomer;

var youngestCustomer;

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
// module.exports.maleCount = maleCount;
// module.exports.femaleCount = femaleCount;
// module.exports.oldestCustomer = oldestCustomer;
// module.exports.youngestCustomer = youngestCustomer;
// module.exports.averageBalance = averageBalance;
// module.exports.firstLetterCount = firstLetterCount;
// module.exports.friendFirstLetterCount = friendFirstLetterCount;
// module.exports.friendsCount = friendsCount;
// module.exports.topThreeTags = topThreeTags;
// module.exports.genderCount = genderCount;
