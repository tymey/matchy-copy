/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Initialize animal variable with an empty opject
var animal = {};
// Add species key to animal object with the value of 'dog' using dot notation
animal.species = 'dog';
// Add name key to animal object with the value of 'Darla' using bracket notaiton
animal['name'] = 'Darla';
// Add noises key to animal object with the value of an empty array
animal.noises = [];
// Log animal object to the console
console.log(animal); // { species: 'dog' , name: 'Darla', noises: [] }


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Initialize noises variable with an empty array
var noises = [];
// Add the string 'bark' to the 0 index of the noises array using bracket notation
noises[0] = 'bark';
// Push 'woof' to the end of the noises array
noises.push('woof');
// Unshift 'ruff' to the beginning of the noises array
noises.unshift('ruff');
/* Using bracket notation, add 'bow-wow' to the noises array at 
   the index of noises.length */
noises[noises.length] = 'bow-wow';
// Log the length of the noises array to the console
console.log(noises.length);
/* Log the last element of the noises array to the console without 
   hard coding the index (use noises[noises.length - 1]) */
console.log(noises[noises.length - 1]);
// Log the noises array to the console
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* Using bracket notation, assign the noises array to the animal object's
   noises property */
animal['noises'] = noises;

console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}