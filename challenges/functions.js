// ==== Callbacks ====

/* Step 1: Create a higher-order function that accepts a callback
 * Create a higher-order function named consume that can take 3 parameters.
 * The first two parameters can accept any argument
 * The last parameter accepts a callback
 * In the body of the function return the callback with the two parameters that you created
 */
let consume = (arg1, arg2, callback) => callback(arg1, arg2);

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */

let add = (arg1, arg2) => arg1 + arg2;
let multiply = (arg1, arg2) => arg1 * arg2;
let greeting = (first, last) => `Hello ${first} ${last}, nice to meet you!`;

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume('Mary', 'Poppins', greeting)); // Hello Mary Poppins, nice to meet you!

// ==== Closures ====

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

/*
The scope of external is global, the scope of internal is function, so anything inside the function can access it, however once you are out of the scope of the function you cannot have access to internal. 
*/

// Explanation:

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

/*
now that we are out of the scope, let's see what happens if we try to log external then internal
*/
console.log(external);
// well that worked well, still in global scope
console.log(internal);
// hmm... Uncaught ReferenceError: internal is not defined
// yeah, not in scope
// how about external?
