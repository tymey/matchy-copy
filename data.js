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
// Using dot notation, push 'borf' into the animal object's noise array
animal.noises.push('borf');
// Log the animal object to the console
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *    - You can use dot notation to access properties on objects by typing
 *      the object name followed by a dot (.) and then the name of the key
 *      on the property.
 *    - You can also use bracket notation by typing the object name followed
 *      by brackets with the name of the key written as a string inside 
 * 2. What are the different ways of accessing elements on arrays?
 *    - You can use bracket notation to access an element in an array by
 *      typing the array name followed by brackets with index location of the
 *      elements you're looking for. Be aware that the first index position
 *      is 0. If you want to avoid hard coding the position of the last element 
 *      of the array, the last position is always [Array.length - 1].
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

// Initialize animals variable with an empty array
var animals = [];
// Push the animal object into the animals array
animals.push(animal);
// Log animals to the console
console.log(animals);

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