console.log("horses are great!");
let horseName = "Mango"; // this is a string
horseName = "Charlie"; // for strings, preferr double quotes
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