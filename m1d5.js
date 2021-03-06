/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

/*
const area = function (l1, l2) {
  return l1 * l2;
};
const areaResult = area(5, 9);
console.log(areaResult);
*/

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

/* 

const crazySum = function(int1, int2) {

    if (int1 === int2) {
         return (int1 + int2) * 2
    } else {
        return int1 + int2
    }
}
const sum = crazySum(5, 5)
console.log(sum)

*/


/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/*
const crazyDiff = function(number1, number2) {


  if (number1 <= number2) {

    return number2 - number1
  } else {
  
    return (number1 - number2) *3

  }

}

let abDifference = crazyDiff(29, 19)
console.log(abDifference)
*/


/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/


/*
const boundary = function (intN) {

  if (((intN >= 20) & (intN <=100 )) || (intN === 400)) {

     return true
  } else {
    return false
  }

}

let trueOrFalse = boundary(60)
console.log(trueOrFalse)
*/


/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/*

const strivify = function (string) {
  if (string.startsWith("Strive")) {
    return string;
  } else {
    return "Strive " + string;
  }
};

console.log(strivify("Strive all day"))

*/

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

/*
const check3and7 = function (number) {
  if (number >= 0 && (number % 3 === 0 || number % 7 === 0)) {
    return true;
  } else {
    return false;
  }
}

console.log(check3and7(15))

*/


/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/* 

function reverseString(givenString) {

  return givenString.split("").reverse("").join("");

}

console.log(reverseString("mare sole"))

*/

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* 

function upperFirst (capital) {
 let separateWord = capital.toLowerCase().split(' ')
  for (let i = 0; i < separateWord.length; i++) {
    separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
    separateWord[i].substring(1);
 }
 return separateWord.join(' ');
}

console.log(upperFirst("forza juve"))

*/

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* 

function cutString(firstLast) {

  return firstLast.slice(1, firstLast.length -1)

}

console.log(cutString("Mamma Mia"))

*/

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* 

function giveMeRandom(n) {
  const array = []
  for (let i=0; i <= n; i++) {
array.push(Math.floor(Math.random() * 10))

  }
  return array
}

console.log(giveMeRandom(3))

 */