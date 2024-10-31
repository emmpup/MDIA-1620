const STABLE_MONTHLY_FEE = 100;

let horseName = "Mango";
let horseNickname = "Fruit";
let horseAge = 1;
let isHorseInStable = false;

let horseNames = [horseName, "Strawberry", "Banana"];
let horseNicknames = [horseNickname, "Pie", "Peel"];
let horseAges = [horseAge, 2, 10];

let areHorsesInside = [isHorseInStable, false, true];
let stableIntroduction = `Welcome to "${horseName}'s" stable`;
let horseIntro = `There are ${horseNames.length} horses staying at my stables: ${horseNames[0]}, ${horseNames[1]}, and ${horseNames[2]}!`;

function getHorseLocation(horse) {
  if (areHorsesInside[horse]) {
    return horseNames[horse] + " is inside.";
  }

  return horseNames[horse] + " is outside.";
}

function getHorseNicknames(horse, friend) {
  const string = `${horseNames[horse]}'s nickname is ${horseNicknames[horse]}, and they have a friend named ${horseNames[friend]}, who is nicknamed ${horseNicknames[friend]}!`;

  return string;
}
