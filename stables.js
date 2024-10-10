console.log("horses are great!");
let horseName = "Charlie"; // this is a string
horseName = "Mango"; // for strings, preferr double quotes
let horseAge = 5;
console.log(horseName);
console.log(horseAge);
let isHorseInStable = true;
isHorseInStable = false;
console.log(isHorseInStable);
horseName = "Cookie";
console.log(horseName);

const STABLE_MONTHLY_FEE = 100;
console.log((STABLE_MONTHLY_FEE + (0.5 * STABLE_MONTHLY_FEE)) / 2);

let horseIntroduction = " is the name of my horse";
// let rentIntroduction = "It costs $" + STABLE_MONTHLY_FEE + " to board " + horseName;
let rentIntroduction = `It costs ${STABLE_MONTHLY_FEE} to board ${horseName}`;
// let stableIntroduction = "Welcome to " + horseName + "'s stable";
let stableIntroduction = `Welcome to "${horseName}'s" stable`;
console.log(stableIntroduction)
console.log(rentIntroduction)

// Lab 4 Code //////

let horseNickname = "Fruit";
console.log(`The name of my horse is ${horseName} and its nickname is ${horseNickname}`);

let stableDiscount = ((STABLE_MONTHLY_FEE * 3) * 0.1);
console.log("You would save $" + stableDiscount + " with a 10% discount applied to a 3 month stay");