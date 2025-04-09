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


//------------------------------------------------------------------------------------------------------------------------------------------
//NOTES ON: MAP - FILTER - EACH - REDUCE
// all of them are higher order functions
/*
They take in a collection and a callback function
Filter returns an array that meets conditions of callback
Map returns an array where everything is passed through callback
Reduce "accumulates" a value and returns it based on the callback
*/

/*
I: Array of customer objects
O: Returns the number of male customers
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


/* now think back to FILTER
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


// refactor into an arrow function
var maleCount = function(array){
    // this is streamlined and can tack on .length property at the end instead of making a new line
    return _.filter(array, (customer) => customer.gender === 'male').length;
};
//-----------------------------------------------------------------------------------------------------------------------------

// reduce
var femaleCount;

//-----------------------------------------------------------------------------------------------------------------------------

// reduce
var oldestCustomer;

//-----------------------------------------------------------------------------------------------------------------------------

var youngestCustomer;

//-----------------------------------------------------------------------------------------------------------------------------

var averageBalance;

//-----------------------------------------------------------------------------------------------------------------------------

// filter - how many customers have a name that begins with inputted <letter>
/*
I: Array of data, and a letter (string)
O: Number of people that have a name which starts with <letter>
*/
var firstLetterCount = function(array, letter){
    // use filter to get an array that meets our conditions -> .length property to get number
    // filter takes in an array and a callback function

    // make a variable to hold filtered array
    return _.filter(array, function(customer){
        // callback func will return IF first letter === input letter
        // force each to lowercase to make it case insensitive
        customer.name[0].toLowerCase() === letter.toLowerCase();
    })
    // return the length of filtered array
};

console.log(firstLetterCount(data, 'b'));

//-----------------------------------------------------------------------------------------------------------------------------

// filter - how many friends have a name that begin with inputted <letter>
/*
I: Array of data, a person, and a letter (string)
O: Number of friends that <person> has with name beginning with <letter>
*/
var friendFirstLetterCount = function(array, customer, letter, count=0){
    // make a variable with filter to get array of friends that start with letter (for input customer)
    const friendFirstLetter = _.filter(array, function(customer, letter){
        // if first letter equal to customer.friends[0]
        return customer.friends[i][0].toLowerCase() === letter.toLowerCase();
    });
}

//-----------------------------------------------------------------------------------------------------------------------------

//filter - how many
var friendsCount;

//-----------------------------------------------------------------------------------------------------------------------------

//use reduce but it won't be just reduce
var topThreeTags;

//-----------------------------------------------------------------------------------------------------------------------------

/*
I: An arry of customers
O: An object that lists the number of males, females, and nonbinary
    {
        male: 3,
        female: 4,
        non-binary: 1
    }
C: Use reduce (reduce can return any data type)
*/
var genderCount = function(array){
    return _.reduce(array, function(accumulator, current){
        // accumulator = {} and current = {Adele Mullin}

        // determine if current object's gender exists in accumulator as a key
            // if it does, increment
        // else 
            //create key and give initial value

    }, {});
}
// seed is {} because we're creating a new object








// -----------------------------------------------------------------------------------------------------------------------
// REDUCE TOWN HALL PRACTICE 4-4-25
// -----------------------------------------------------------------------------------------------------------------------


// #1 Example with Array of Nums -----------------------------------------------------------------------------------------

// // use reduce to get sum of all numbers in nums
// var nums = [10, 20, 30, 40];
// // reduce needs a SEED VALUE (which will be the same datatype as the return we want)
// // we will be accumulating data and returning a new value

// var sum = _.reduce(nums, function (accumulator, num){
//     // reduce takes in an array and a callback function
//     // the callback function takes in TWO parameters - an accumulator and curent item in the array
//     accumulator += num;
//     return accumulator;

// }, 0)
// // 0 is the seed value
// // seed value = first value of accumulator

// //1st Iteration
//     //let result = 0
//     //for loop
//         //i = 0
//         // result = func (0, 10)
//         // 0 + 10
//         // result = 10
// //2nd Iteration
//     //let result = 10
//     //for loop
//         //i = 0
//         // result = func (10, 20)
//         // 10 + 20
//         // result = 30
// // Last Iteration (4th)
//     // result will equal 100



// // #2 Example with Array of Blog Objects ----------------------------------------------------------------------------------
// const blogs = [
//   {
//     id: 0,
//     title: 'Rewatched Psycho last night.',
//     text: 'Phenomenal.',
//     author: 'Alex Aaron',
//     views: 101,
//     category: 'TV & Film'
//   },
//   {
//     id: 1,
//     title: "Did y'all see Curry go off for 52??",
//     text: "He's still one of the best.",
//     author: 'Buena Baker',
//     views: 50,
//     category: 'Sports'
//   },
//   {
//     id: 2,
//     title: "Saw Misericordia at the Broad theater last night.",
//     text: "Really interesting film and a packed house.",
//     author: 'Alex Aaron',
//     views: 65,
//     category: 'TV & Film'
//   },
//   {
//     id: 3,
//     title: "Look at my pottery creations!",
//     text: "I'm eager to try some sgraffito next.",
//     author: 'Stephanie Cooper',
//     views: 78,
//     category: 'Arts & Culture'
//   }
// ];

// // for this function we want the TITLES of the sports blogs as an array
// // reduce is a good method for this because filter will only return whole object not the specific item inside
// function getTitlesOfSportsBlogs(array){
//     return _.reduce(array, function(accumulator, blog){
//         // check if blog category is sports blog
//         if (blog.category === 'Sports'){
//             // if it is, PUSH the blog title into our empty array
//             accumulator.push(blog.title);
//         }
//         return accumulator;
//     }, []);
// }
// // seed value assigned to [] 
// //because we are making a NEW piece of data
// //console.log(getTitlesOfSportsBlogs(blogs)); // works!!!

// // for this function, we want to find which blog has the most views
// function getMostViewed(array){
//     return _.reduce(array, function(accumulator, blog){
//         if (blog.views > accumulator.views){
//             return blog;
//         } else {
//             return accumulator;
//         }
//     });
// }
// seed value not assigned 
//because we already have all the data and we are SEARCHING
// if not assigned, reduce will start at first item in array and move through
//console.log(getMostViewed(blogs)); // works!!!





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
