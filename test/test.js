// let convert = require('../app.js') // Specify function location. 
 let convert = require('./testLogic')



// require the built-in "assertion" library
let assert = require('assert');

// create a group of tests (ShoppingCart)
describe('ShoppingCart General', function() {
    // Sub-Test Group 1
    describe('SimpleMath', function() {
        // A string explanation of what we are testing
        it('3*3 should give 9', function() {
            // Actual test / Code/Logic Goes here   // Side Note: assert.equal means = (actual, expected) 
            // Individual Test 1
            assert.equal(9, (3*3));
        });
        // it('StringExplanationGoesHere', function() {
        //     // Individual Test 2
        //     assert.equal()
        // });
    });
   
});



// let convert = {};
// module.exports = convert;  
// Above is used in another file to convert the require here. eg. import.