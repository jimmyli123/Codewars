
// Convert a Number to a String!

function numberToString(num) {
    return String(num)
  }


// Convert boolean values to strings 'Yes' or 'No'.

function boolToWord( bool ){
    if (bool) { return 'Yes'}
    else { return 'No'}
  }


// Do I get a bonus?

function bonusTime(salary, bonus) {
      if (bonus) { return `£${salary * 10}`}
      else { return `£${salary}`}
    }

    
// Compare within margin
function closeCompare(a, b, margin){
  switch(true) {
      case Math.abs(a-b) <= margin:
      return 0;
      case a < b:
      return -1;
      case a > b:
      return 1;
      default:
      return 0;
  }
}

// Quarter of the year
const quarterOf = (month) => {
  switch (true) {
      case (month <= 3):
      return 1;
      case (month <= 6):
      return 2;
      case (month <= 9):
      return 3;
      case (month <= 12):
      return 4
  }
}

// Count by X
function countBy(x, n) {
  let arr = []
  for (let i = 1; i<= n; i++) {
    arr.push(x*i)
  }
  return arr
}

// Training JS #3: Basic data types--String
var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  return d1 + a2 + d2
}
function Bee(){
  //select some variable to combine "Bee"
  return b1 + e2 + e2
}
function banana(){
  //select some variable to combine "banana"
  return b2 + a2 + n2 + a2 + n2 + a2
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer2(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer3(){
  //the answer should be "yes" or "no"
  return "yes";
}

// The Wide-Mouthed frog!
function mouthSize(animal) {
  let animalSmall = animal.toLowerCase()
  switch (animalSmall) {
      case 'alligator': 
      return 'small'
      default:
      return 'wide'
  }
}

// Is the string uppercase?
String.prototype.isUpperCase = function() {
  // your code here
  return this.toString() === this.toUpperCase()
}

// Is n divisible by x and y?
function isDivisible(n, x, y) {
  return n%x===0 && n%y===0
}


// Reversed sequence
const reverseSeq = n => {
  let answer =[];
  for (let i = n; i>0; i--) {
    answer.push(i)
  }
  return answer
};

// Get the mean of an array

function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
/* 
Easiest way to do it.
    let total = 0;
  for (let i =0; i<marks.length; i++) {
    total+=marks[i]
  }
  return Math.floor(total/marks.length)
  
*/

// Using reduce method.
  return Math.floor(
          marks.reduce((acc, curVal) => acc + curVal)/marks.length
  
  )
}

// Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}