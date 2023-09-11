#!/usr/bin/node
/* A function that increment and calls a function 
*/
exports.addMeMaybe = function (number, theFunction) {
    const incrementedNumber = number + 1; // Increment 'number' by 1 and store it in 'incrementedNumber'
    theFunction(incrementedNumber); // Call 'theFunction' with 'incrementedNumber' as an argument
}  