// !  Exercise 1:
// A. Use the `map()` method to iterate over the provided `nums` array
//
// B. Use the callback function of the `map()` method you wrote to
//    create a new array where each value is multiplied by 2.
//    Name the new array `numsTimesTwo`.
//
// C. Console log the new array.
//
// Starting code (don't modify this):

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Your code here:

const numsTimesTwo = nums.map((num) => {
  return num * 2;
});

console.log(numsTimesTwo);

// ! Exercise 2:
// A. Given the provided `pizzaToppings` array, use destructuring to extract
//    the first and second values and place them into variables. Name the
//    variable that corresponds to the first value `firstIngredient`. Name the
//    variable that corresponds to the second value `secondIngredient`.
//
// B. Console log the `firstIngredient` and `secondIngredient` variables.
//
// Starting code (don't modify this):

const pizzaToppings = ["Pineapple", "Olives", "Anchovies"];

// Your code here:

const [firstIngredient, secondIngredient] = pizzaToppings;

console.log(firstIngredient);
console.log(secondIngredient);

// ! Exercise 3:
// A. Given the provided `car` object, use destructuring to create two
//    variables: `make` and `model` that will hold the respective values.
//
// B. Console log the `make` and `model` variables.
//
// Starting code (don't modify this):

const car = {
  make: "Audi",
  model: "Q5",
};

// Your code here:

const { make, model } = car;

console.log(make);
console.log(model);

// ! Exercise 4:
// A. Duplicate the provided `morePizzaToppings` array using the spread
//    operator and assign it to a variable named `uncontroversialPizzaToppings`.
//
// B. Console log the `uncontroversialPizzaToppings` variable.
//
// Starting code (don't modify this):

const morePizzaToppings = ["Cheese", "Sauce"];

// Your code here:

const uncontroversialPizzaToppings = [...morePizzaToppings];

console.log(uncontroversialPizzaToppings);

// ! Exercise 5:
// A. Duplicate the provided `anotherCar` object and spread its values into a
//    new variable named `myCar`.
//
// B. Change the `make` and `model` properties of the `myCar` object to new
//    values.
//
// C. Console log both objects and observe the results.
//
// Starting code (don't modify this):

const anotherCar = {
  make: "Toyota",
  model: "RAV4",
};

// Your code here:

const myCar = { ...anotherCar };

myCar.make = "Honda";
myCar.model = "Civic";

console.log("Original:", anotherCar);
console.log("My Car:", myCar);

// ! Exercise 6:
// A. Define a variable named `propertyName` and assign a string (like
//    'username', 'age', or 'email') to it.
//
// B. Create an object named `userProfile`.
//
// C. Use `propertyName` as a dynamic key in `userProfile`. Assign it a
//    relevant value.
//
// D. Console log the `userProfile` object to see the result.
//
// Your code here:

const propertyName = "username";

const userProfile = {
  [propertyName]: "CoolCoder123",
};

console.log(userProfile);

// Exercise 7 Done!!

// ! Exercise 8:
// A. Create a function with two parameters, `noun` and `adjective`.
//
// B. Give `noun` a default value of "cat" and `adjective` a default value of
//    "orange".
//
// C. The function should log a sentence 'The cat is orange.' by default, but
//    should substitute the appropriate parameters when it is supplied with
//    arguments.
//
// Your code here:

function describeAnimal(noun = "cat", adjective = "orange") {
  console.log(`The ${noun} is ${adjective}.`);
}

// Call the function
describeAnimal();

// Call the function with  example
describeAnimal("dog", "brown");

// ! Exercise 9:
// a. Convert the following `if...else` statement into a ternary:
//
//    if (pizza === 'tasty') {
//      console.log('yum');
//    } else {
//      console.log('yuck');
//    }
//
// Starting code (don't modify this):

const pizza = "tasty";

// Your code here:

pizza === "tasty" ? console.log("yum") : console.log("yuck");

// ! Exercise 10:
// ! 10.1: Set language
// A. Construct a single line of code that assigns a default value using the
//    logical OR operator. This line should match the logic of the following
//    statement:
//
//    "lang is equal to localLangConfig or the default value of English."
//
// B. Create a variable called `lang`.
//
// C. Assign `lang` the value of localLangConfig or 'en' as a default if
//    `localLangConfig is falsy.
//
// D. Log the value of `lang` to the console.
//
// Your code here (localLangConfig is provided to get you started):

// Simulated language configuration (change this variable to test)
const localLangConfig = null; // Change to 'es', 'fr', etc., or leave it `null`.

const lang = localLangConfig || "en";

console.log("Language:", lang);

const savedUserTheme = null;

// Your code here:
const theme = savedUserTheme || "light";

console.log("Theme:", theme);

// ! Exercise 11:
// a. Use optional chaining in a console.log so that a console log of
//    `adventurer.cat.age` returns `undefined` instead of an error.
//
// Starting code (don't modify this):

const adventurer = {
  name: "Alice",
};

// Your code here:

let catAge = adventurer.cat?.age;

console.log(catAge);
