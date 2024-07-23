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
 * I: The function receives an array of animals and a string of the name
 *    of an animal on which to perform a search.
 * O: The function does not return anything. The function will remove
 *    an object from the input animals array if their name matches the 
 *    input string of the name of an animal.
 * C: N/A
 * E: N/A
 */

function remove(array, string) {
    /* Declare for loop using i; Start: 0; Stop: array.length; Increment 
    by 1 each loop */
    for (var i = 0; i < array.length; i++) {
        // Check if array[i].name === string
        if (array[i].name === string) {
            // If true, array.splice(i, 1) to remove array [i] object
            array.splice(i, 1);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: The function receives an array of animals and an object representing
 *    a new animal to be added.
 * O: The function checks if the name property on the input object has a 
 *    name property with a length greater than 0, a species property with
 *    a length greater than 0, and has a unique name (meaning no other animals
 *    have that name). The function will add this new input object to the input
 *    animals array ONLY if all the other conditions pass.
 * C: N/A
 * E: N/A
 */

function add(array, object) {
    /* Check if object.name.length > 0 AND object.species.length > 0 AND 
    search(array, object.name) !== null */
    if (object.name.length > 0 && object.species.length > 0 && search(array, object.name) !== null) {
        // If true, push object to the end of array
        array.push(object);
    }
}

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