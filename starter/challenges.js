//  const markMass = 78;
//  const markHeight = 1.69;
//  const johnMass = 92;
//  const johnHeight = 1.95;

//  const BMIMark = markMass / markHeight ** 2;
// const BMIJohn = johnMass / (johnHeight * johnHeight);
//  const markHigherBMI = BMIMark > BMIJohn;
// //console.log(BMIMark,BMIJohn,markHigherBMI);

// console.log(BMIMark, BMIJohn);
// if(BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
  
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

/*
 const markMass = 95;
 const markHeight = 1.88;
 const johnMass = 85;
 const johnHeight = 1.76; 
 


const musaMass = 90;
const musaHeight = 1.05;
const yukaMass = 78;
const yukaheight = 1.07;

const BMIMusa = musaMass / musaHeight **2;
const BMIYuka = yukaMass / (yukaheight * yukaheight);
const musaHigherBMI = BMIMusa < BMIYuka;
console.log(BMIMusa,BMIYuka,musaHigherBMI); */

// Challenge #3

const teamDolphins = (96 + 11 + 89) / 3;
const teamKoalas = (88 + 67 + 110) / 3;
console.log(teamDolphins , teamKoalas )

// if (teamDolphins > teamKoalas) {
//   console.log('Dolphins win the trophy 🏆')
// } else if (teamKoalas > teamDolphins) {
//   console.log('Koalas win the trophy 🏆' )
// }else if (teamDolphins === teamKoalas) {
//   console.log('No one wins the trophy')
// };


if (teamDolphins > teamKoalas && teamDolphins >= 100) {
  console.log('Dolphins win the trophy 🏆')
} else if (teamKoalas > teamDolphins && teamKoalas >= 100) {
  console.log('Koalas win the trophy 🏆' )
}else if (teamDolphins === teamKoalas && teamDolphins >= 100
  && teamKoalas >= 100) {
  console.log('bOTH win the trophy!');
} else {
  console.log('No one wins the trophy😂')
}



