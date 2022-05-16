
// let js = 'amazing';
// console.log(40 + 8 +23 - 10);

// console.log('John');
// console.log(50);

// let firstName = 'Musa';

// // Basic Operators e.g +, *, -, /, typeof, =!
// // Math operators
// const now = 2038;
// const ageYuka = now - 2018;
// const ageMusa = now - 1990;
// console.log(ageYuka,ageMusa);
// console.log(ageYuka * 2, ageMusa / 2, 2 ** 3);
// console.log(now - 2018 > now - 1990);

// // 2 ** 3 means 2 * 2 * 2.
// const lastName = 'Lukenge';
// const secondName = 'Faridu';
// console.log(lastName + ' ' + secondName);

// // Assignment operators
// let x = 10 + 5; //15
// x += 10; //10 + 15 = 25
// x *= 4; //100
// x ++; //100 + 1=101
// x --;//101 - 1
// x --;// 100-1
// console.log(x);
 
// //Comparison operators e.g <, >, <=, >= they are used for booleans
// console.log(ageYuka < ageMusa);
// console.log(ageMusa >= ageYuka);

// const isFullAge = ageYuka <= 40;
// console.log(now - 1990);

// //let x, y ;
// x = y = 25 - 10 -5;// x = 10, y = 10
// console.log(x, y); 

// // Using template literals!
// const myFirst = 'Luke';
// const job = 'Programmer';
// const birthday = 1990;
// const year = 2022;
// const lukaNew = " I'm" +  myFirst + ' a ' + (year - birthday) + ' year old ' +  job + ' !'; // old way to declare strings!
// console.log(lukaNew);

// const luke = `I'm ${myFirst}, a ${year - birthday} year old ${job}!`; // new way to declare strings ES6!
// console.log(luke); 

// console.log(`I love  programming so much....`);//You can also use this formular!
// console.log('string with \n\
// multiple \n\
// lines'); // Writing multiple lines in old version before ES6!!

// console.log(`string with
// multiple
// lines`); // ES6 introduced a new to declare multiple lines!!

// // if / else statements
// const ageMus = 19;

// if (ageMus >= 18) {
//   console.log(`Mus can drive a car 🏎 🚗.`);
// } else {
//   const yearsLeft = 18 - ageMus;
//   console.log(`Mus is too young,wait anorher ${yearsLeft} years :)`);
// }

// const birthYear = 1990;

// let century;
// if(birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century)

// // Type conversion
// // This one manually converts from one type to another
// const inputYear= '1990';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Musa'));
// console.log(typeof NaN);

// console.log(String(24), 24);

// // type coercion
// // JavaScript automatically converts for us behind the scenes
// console.log('I am '  +  31  +   ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2')

// let n = '1' + 1;// joins up the numbers to 11
// n = n - 1;// 11 - 1 = 10
// console.log(n)
 
// // fsalsy has 5 values e.g 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean('Alex'));
// console.log(Boolean({}));
// console.log(Boolean(''));
// console.log(Boolean(undefined));// don't use the boolean keyword when excuting your  code

// const money = 100;// here the boolean is true because 100 is a number but if  its 0 then it executes false becoz 0 i sa falsy value!

// if(money) {
//   console.log("Don't spend it all!")
// } else {
//   console.log('You should get a job!')
// }
 /*
// Equality operators === vs ==
const ageChild = 18;
if(ageChild === 18) console.log('You just became an adult :D!');('strict')// strict operator is allowed to be used!
if(ageChild == 18) console.log('You just became an adult :D!');('loose') // Avoid using it

const favourate = Number(prompt("What's your favourate number?"));
console.log(favourate);
console.log(typeof favourate);

if(favourate === 12) {
  console.log('cool 12 is a lovely number.')
} else if(favourate === 7) {
  console.log('nice 7 is also a nice number.')
} else if(favourate === 9) {
  console.log('lovely 9 is also a good number.')
} else {
  console.log('Number is not 12 or 7 or 9');
}

if (favourate !== 12) {
  console.log('Why not 12');
} */
   

// logic Operatots
const hasDriversLicense = true;// A
const hasGoodVision = false;//B
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


// if(hasDriversLicense && hasGoodVision) {
//   console.log('Musa can drive');
// } else {
//   console.log('Some else should drive')
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);
if(hasDriversLicense && hasGoodVision || isTired) {
  console.log('Musa should drive');

} else {
  console.log('someone else should drive');
}; 

// Switch Statements
const day = 'thursday'
switch(day) {
  case 'monday':
    console.log('shopping');
    console.log('I walk the dog');
    break;
    case 'tuesday':
      console.log('Go school')
      break;
      case 'wednesday':
        console.log('Play soccer')
        break;
        case 'thursday':
          case 'friday':
            console.log('Enjoyment');
            break;
            default : 
            console.log('Not a valid day')


};
  // Also we can use if else statements instead of a switch statement

  if(day === 'thursday' || day === 'friday') {
    console.log('Enjoyment');
  } else if (day === 'monday') {
    console.log('shopping');
    console.log('I walk the dog')
  } else if(day === 'tuesday') {
    onsole.log('Go school')
  } else if (day === 'wednesday') {
    console.log('Play soccer')
  } else {
    console.log('Not a valid day')

  };
  
  //Conditional(Ternary) Operator

  const age = 19;
  // age >= 18 ? console.log('can drink wine 🍷 ') :
  //  console.log('can drink water 💦');

   const drink = age >= 18 ? 'wine 🍷' : 'water 💦';
   console.log(drink);

// Also if else condition appllies here

   let drink2;
   if(age >= 18) {
     drink2 = 'wine 🍷';
   } else {
     drink2 = 'water 💦';
   };
   console.log(drink2);

   console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💦'}`);