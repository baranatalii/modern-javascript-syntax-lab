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
