/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: The function receives an array representing a list of objects of 
 *    animals and a string representing the name of an animal.
 * O: The function returns the object of the animal if the name exists
 *    and returns null if no animal with that input string name exists.
 * C: N/A
 * E: N/A
 */

function search(array, string) {
    /* Declare for loop using i; Start: 0; Stop: array.length; Increment 
    by 1 each loop */
    for (var i = 0; i < array.length; i++) {
        // Check if array[i].name === string
        if (array[i].name === string) {
            // If true, return array[i]
            return array[i];
        }
    }
    // Return null
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: The function receives an array of animals, a string representing 
 *    the name of the animal on which to perform a search, and an object
 *    that represents the replacement animal.
 * O: The function does not return anything. If the input string name exists
 *    with the input array of animals, replace the entire object with the 
 *    input replacement object.
 * C: N/A
 * E: N/A
 */

function replace(array, string, object) {
    /* Declare for loop using i; Start: 0; Stop: array.length; Increment 
    by 1 each loop */
    for (var i = 0; i < array.length; i++) {
        // Check if array[i].name === string
        if (array[i].name === string) {
            // If true, reassign array[i] = object
            array[i] = object;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: The function receives an array of animals 
 * O: 
 * C: 
 * E: 
 */

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}