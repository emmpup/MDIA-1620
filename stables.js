// Welcome!
//
//                        ,, ,,, ,,,, ,,,,,,,,
//           /\        /;; ;;;;;;;;;;;;;; ;;;/ ,;`.   ,,,,
//          ;  `-.    /// //////// /////  // ,','`;. ///;;;;,.
//         ,'   ,,`-.;;;;;; ;;;;;;; ;;;;// ,' ,'  `.`. ///;;//;,
//        ,'   ;;;//////// ////// ///////,'  ,'     ; : ;;// ;//,
//        `.  ;`;;;;;;;: ;;;;:;; ;:;:;;:;:  ,'     ,' : ;;;;;;;;/,
//         `. `; :!::::!;;;;;!::::!;!;;!;:  `.   ,'  ,'///!!;;;;;;
//           `._!!;!!!!;!!!!!;!!!!;!;!!;!!`.  `;'  ,'-.!!!//;;;////
//              ;   .   .               ,        ,'    ::-!_///;;;;
//            .' ,%'  ,%'     `%.   `%.;;   `%.   ;;   ,::  `! ////
//           .', '    '    `%,  `:.   `::.   ::  :;    %::    `! ;;
//          ,';;        `%, `;;.         `::. `.;;;    `:%   %:///
//         ,';;'  ;      ;;  `::;   `%,    ;%:.  ::     ::     %`!/
//       ,' ;.'  .%.    ;;    `;;     ;;   ' `;   %     ::    %  :
//       :  `;;  %%%    `::   ;;     ;;;      `    `    ::     % `
//       ;    ' .%%'  `%  ;   '  ,., `;;         `%,   ::'   %::%
//      ;`. `.  %%%%   ;;   .___;;;;  '     `:    `;   ::     :::
//      : :  ;  %%%%   ;: ,:' _ `.`.        ;;;   ;;   `::    :::.
//      `.;  ;  `%%'  ;;' :: (0) ; :       ::'    ;      ::   `:::
//       ,' ;'  %%'  ;;'  ;;.___,',;       ;;    ;;       ;   ,:::
//      ,  ;'  :%:   ;;  ,'------''      ;;;'  .;;            :::'
//     ,' ;;   ;%;   ;;  '             ::'    ,;;;            :::
//     :  :'   :%:   `;             ;;;;'      ;;             ::%
//     :  ;;   :%'   ;;   ;...,,;;''         ;;'    ;     ;   :::
//     ;  `;   ::   ;;' ,:::'     .        .;;     ,'    ;;   `;;
//     ;  ;'   :: .;;' ,:::'   ,::%.      ;;;    ,'     ;;    ,;;
//     : ;;.  .:' ;;' ,:::' ;;:::' ;;    ;;'    ,'    ;;;    ;;;'
//      :`;;  ::  ;;  ;;;' '  .    ;;    '  _,-'     ;;;     `;'
//      : ;' .:'  ;; .::: ,%'`;   ;;;   _,-'       .;;;'     ;'
//     ,' ;; ;;  ;;' :::' ,, .;  ;;  _,' ;      ,;;;'     ,;;'
//    .'~~~~~~~~~._ ,;' ,',' ;;  ',-'   ,'    ,';;       ;;;'   ;;;
//  ,'             `-.,' .'  ;; ,'     ,' ;;;;;;'       ,;;    ;;;
// .';           .    `.,   ;; ,'      ;              ,;;%    ;;;
// : ..       _.';     ;   '_,'       .'       ,,,,,,,%;;'    `;;;
// `.  .     (_.' .  ;'  ,-'          :  ,,,,,;;;;;;;;;'      .;;;
//   `-._        ___,' ,'             :.."""""`````'        ,;;;;
//       `------'____.'               :                   ..;;;;
//          `---'                     `.               ..;;;;'
//                                     :......:::::::::;;;;'
//                                      :::::::::::::::;'      ,;;;
//                                       ;                   ;;;;'
//                                       ;                 .;;;;
//                                     ,'...:::::.        ;;;'
//                                    .'          `;;;;;;''
//                                    ;
//                                    `----------------------------

//------------------------- Seting up shop -------------------------//

let horses = [];
let stableVisitorMessage =
  "Welcome to the best stables in the world! I hope you enjoy your time!";
let latePaymentFee = 25;
let availableStalls = 10;

//------------------------- First day -------------------------//

function Horse(
  name,
  nickname,
  faveSnack,
  monthlyRent,
  isInside,
  age,
  color,
  personality
) {
  this.name = name;
  this.nickname = nickname;
  this.faveSnack = faveSnack;
  this.MONTHLY_RENT = monthlyRent;
  this.isInside = isInside;
  this.age = age;
  this.color = color;
  this.personality = personality;
  this.introduction = function () {
    console.log(
      `This is ${this[name]}, their nickname is ${this.nickname} and love ${this.faveSnack}!`
    );
  };
  this.rentNotice = function () {
    console.log(
      `${this.name}'s rent is $${this.MONTHLY_RENT}! If you don't pay in time, you will need to pay the late fee which is $${latePaymentFee}!`
    );
  };
  this.swapHorsesInsideAndOutside = function () {
    for (let i = 0; i < horses.length; i++) {
      let horse = horses[i];
      let horseName = horse.name;
      let isInside = horse.isInside;
      if (isInside) {
        console.log(
          horseName + " is being moved outside to spend time in the sun!"
        );
        horse.isInside = false;
      } else {
        console.log(
          horseName +
            " is being moved inside becasue they have spent too much time outside."
        );
        horse.isInside = true;
      }
    }
  };
}

const mango = new Horse(
  "Mango",
  "Tango",
  "chocolate",
  100,
  false,
  1,
  "orange",
  "friendly"
);

const strawberry = new Horse(
  "Strawberry",
  "Shortcake",
  "raspberries",
  100,
  false,
  2,
  "pink",
  "easy-going"
);

const banana = new Horse(
  "Banana",
  "Peel",
  "oranges",
  100,
  true,
  10,
  "yellow",
  "fearful"
);

horses = [mango, strawberry, banana];

const blueberry = new Horse(
  "Blueberry",
  "muffin",
  "root beers",
  100,
  false,
  5,
  "blue",
  "easy-going"
);

horses.push(blueberry);

//I wanted a variety of horses being hungry or not
//so all the horses that are in an even spot in the horses array will be hungry
// and all the horses with an odd spot will be full
for (let i = 0; i < horses.length; i++) {
  let horse = horses[i];
  if (i % 2 == 0) {
    horse.isHungry = true;
  } else {
    horse.isHungry = false;
  }
}

//------------------------- Stable roster -------------------------//

// horses = [
//   {
//     name: 'Mango',
//     nickname: 'Tango',
//     faveSnack: 'chocolate',
//     MONTHLY_RENT: 100,
//     isInside: false,
//     age: 1,
//     color: 'orange',
//     personality: 'friendly',
//     introduction: [Function (anonymous)],
//     rentNotice: [Function (anonymous)],
//     isHungry: true
//   },
//   {
//     name: 'Strawberry',
//     nickname: 'Shortcake',
//     faveSnack: 'raspberries',
//     MONTHLY_RENT: 100,
//     isInside: false,
//     age: 2,
//     color: 'pink',
//     personality: 'easy-going',
//     introduction: [Function (anonymous)],
//     rentNotice: [Function (anonymous)],
//     isHungry: false
//   },
//   {
//     name: 'Banana',
//     nickname: 'Peel',
//     faveSnack: 'oranges',
//     MONTHLY_RENT: 100,
//     isInside: true,
//     age: 10,
//     color: 'yellow',
//     personality: 'fearful',
//     introduction: [Function (anonymous)],
//     rentNotice: [Function (anonymous)],
//     isHungry: true
//   },
//   {
//     name: 'Blueberry',
//     nickname: 'muffin',
//     faveSnack: 'root beers',
//     MONTHLY_RENT: 100,
//     isInside: false,
//     age: 5,
//     color: 'blue',
//     personality: 'easy-going',
//     introduction: [Function (anonymous)],
//     rentNotice: [Function (anonymous)],
//     isHungry: false
//   }
// ]

//---------------------- Growing business ----------------------//

function updateAvailableStalls() {
  stalls = availableStalls - horses.length;
  if (stalls < 2) {
    console.log("We need to build more stalls");
  } else {
    console.log("We have " + stalls + " available!");
  }
}

function lateRentCost(horse) {
  horseName = horse.name;
  rent = horse.MONTHLY_RENT;
  lateRent = rent + latePaymentFee;
  console.log(
    `It will cost $${lateRent} since rent for ${horseName} is late. Don't be late again!`
  );
}

lateRentCost(horses[0]);

function checkTreat(treat) {
  for (let i = 0; i < horses.length; i++) {
    let horse = horses[i];
    let favorite = horse["faveSnack"];
    if (favorite === treat) {
      return console.log(`${horse.name} loves ${treat}!`);
    } else {
      console.log(
        `${horse.name} does not like ${treat}, they like ${horse.faveSnack}`
      );
    }
  }
}

function horseNickname(horse) {
  return horse.nickname;
}

console.log(horseNickname(horses[0]));

//------------------------- Day to day operations -------------------------//

function rideableHorses() {
  for (let i = 0; i < horses.length; i++) {
    let horse = horses[i];
    let horseName = horse["name"];
    let personality = horse.personality;
    let introduction = `${horseName} is ${personality}`;
    if (personality === "friendly") {
      console.log(
        `${introduction} and is great with working with kids and new riders!`
      );
    } else if (personality === "easy-going") {
      console.log(`${introduction} so they are a good riding horse!`);
    } else {
      console.log(`${introduction} so they aren't ready to ride with people`);
    }
  }
}

rideableHorses();

function moveHorsesOutside(dark) {
  for (let i = 0; i < horses.length; i++) {
    let horse = horses[i];
    let horseName = horse.name;
    let isInside = horse.isInside;
    if (dark === "dark") {
      if (!isInside) {
        console.log(`${horseName} is coming inside because it's getting dark!`);
        isInside = true;
      }
    } else {
      if (isInside) {
        console.log(
          horseName + " is being moved outside to spend time in the sun!"
        );
        horse.isInside = false;
      } else {
        console.log(horseName + " is already outside!");
      }
    }
  }
}

moveHorsesOutside();

function feedHorses() {
  for (let i = 0; i < horses.length; i++) {
    let horse = horses[i];
    let horseName = horse.name;
    let isInside = horse.isInside;
    let faveSnack = horse.faveSnack;
    if (isInside) {
      console.log(`${horseName} is inside already having ${faveSnack}!`);
      horse.isHungry = false;
    } else {
      console.log(`${horseName} is coming inside to for some ${faveSnack}!`);
      horse.isHungry = false;
      horse.isInside = true;
    }
  }
}

feedHorses();

moveHorsesOutside("dark");
