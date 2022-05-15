
// //values and variables
// let country = 'Uganda';
// let continent = 'Africa';
// let population = 40;



// console.log(country);
// console.log(continent);
// console.log(population);

// // synchronous - 1 - 2 - 3 - 4
// // asynchronous - 1 - 900 - 2 - 560000000 - 3

// // Data types
// let isIsland = false; 

// let language = 'Swahili';
// language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// // let, const ,var
// language = 'English';
// //let keyword can be changed!
// const independenceDay = 1962;
// // const keyword cannot be changed, its constant!
// var age  = 30;
// age = 31;
// // var can change though is differrent from the let keyword!

// //basic operator assignment
// let countryPoulation = 40;
// countryPoulation - 20;
// countryPoulation++;
// console.log("Country Population =",countryPoulation)

// console.log("This is language ==>",language);

// const finlandPopulation = 6;
// console.log(finlandPopulation < countryPoulation);
// const averagePopulation = 33;
// console.log(countryPoulation > averagePopulation);

// const description = 'Portugal is in Europe,and its 11 million people speak portugese.';
// console.log(description); 

// // Strings and template literals !
// console.log(`Portugal is in Europe,and its 11 million people speack portugese.`);

// // if / else statements!
// const belowAverage = averagePopulation - 22;
// if(countryPoulation > averagePopulation) {
//   console.log(`Portugal's population is  above ${averagePopulation}.`)
// } else {
  
//   console.log(`'Portugal's population is ${belowAverage} below average' `);
// }
// console.log(belowAverage)

// // conversion and coercion
// console.log('19' - '13');
// console.log('19' - '13' + 17);
// console.log('19' - '13' + '17');
// console.log('123' < '57');
// console.log(5 + 6 + '4' - 9 -4 -2);

// // EQUALITIY OPERATORS == VS ===!
//   const myNeighbors = Number(prompt('How many neighbouring countries does your country have?'));
//   console.log(myNeighbors);
//   console.log(typeof myNeighbors);
  
//   if(myNeighbors === 1) {
//     console.log('Only one boarder.')
//   } else if(myNeighbors === 2) {
//     console.log('More than 1 border' );
//   } else {
//     console.log('No borders')
//   }

// switch statement
const language = 'arabic';
switch(language) {
  case 'chinese':
    console.log('Most number of native speakers!');
    break;
    case 'spanish':
      console.log('2nd place in number of native speakers');
      break;
      case 'english':
        console.log('3rd place');
        break;
        case 'hindi':
          console.log('number 4');
          break;
          case 'arabic':
            console.log('5th most spoken language');
            break;
          default:
            console.log('Great language too: D')
}








