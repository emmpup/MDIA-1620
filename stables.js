console.log("horses are great!");
let horseName = "Charlie"; // this is a string
horseName = "Mango"; // for strings, preferr double quotes
let horseAge = 1;
console.log(horseName);
console.log(horseAge);
let isHorseInStable = false;
console.log(isHorseInStable);
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

// Lab 4 Code

let horseNickname = "Fruit";
console.log(`The name of my horse is ${horseName} and its nickname is ${horseNickname}`);

let stableDiscount = ((STABLE_MONTHLY_FEE * 3) * 0.1);
console.log("You would save $" + stableDiscount + " with a 10% discount applied to a 3 month stay");

// Lesson-5 Code
visitingHorseName = "Lettuce";
if ((horseName === "Mango" && isHorseInStable) &&  (visitingHorseName === "Straberry" || visitingHorseName === "Lettuce")) {
    console.log(`${horseName} has a visitor and needs to come outside to see ${visitingHorseName}`);
} else if ((horseName === "Mango" && !isHorseInStable) &&  (visitingHorseName === "Straberry" || visitingHorseName === "Lettuce")){
    console.log(horseName + " is outside with " + visitingHorseName);
} else {
    console.log(horseName + " needs to figure out what is going on");
}
if (isHorseInStable) {
    console.log(`${horseName} is inside`)
} else {
    console.log(horseName + " is outside")
}

// Lesson-6 Code
// Horse = ["name", age, isInside, "nickname"]
let horseOne = [horseName, horseAge, isHorseInStable, horseNickname];
let horseTwo = ["Strawberry", 2, false, "Pie"];

let horseNames = [horseName, "Strawberry", "Banana"];
let horseAges = [horseAge, 2, 10];
let horseNicknames = [horseNickname, "Pie", "Peel"];
let areHorsesInside = [isHorseInStable, false, true];
let checkHorsesInside = [];
let horseIntro = `There are ${horseNames.length} horses staying at my stables: ${horseNames[0]}, ${horseNames[1]}, and ${horseNames[2]}!`;
console.log(horseIntro);

if (areHorsesInside[0] == true) {
    checkHorsesInside.push("inside");
} else {
    checkHorsesInside.push("outside");
}

if (areHorsesInside[1] == true) {
    checkHorsesInside.push("inside");
} else {
    checkHorsesInside.push("outside");
}

if (areHorsesInside[2] == true) {
    checkHorsesInside.push("inside");
} else {
    checkHorsesInside.push("outside");
}

console.log(`${horseNames[0]} is ${checkHorsesInside[0]}, ${horseNames[1]} is ${checkHorsesInside[1]}, and ${horseNames[2]} is ${checkHorsesInside[2]}`)
