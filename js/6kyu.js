


  // 6kyu - Take a ten minute walk

  // Length of walk array has to equal exactly 10. 
  // If the count of each direction is equal to its
  // opposite direction, then we are back at our
  // starting point.

  function isValidWalk(walk) {
    let north = 0;
    let south = 0;
    let west = 0;
    let east = 0;
    if (walk.length !==10 ) { return false;}
    for (let i = 0; i < walk.length; i++) {
      switch(walk[i]) {
          case 'n':
          north++;
          break;
          case 's':
          south++;
          break;
          case 'w':
          west++;
          break;
          case 'e':
          east++;
          break;
      }
    }
    if (north === south && west === east) {return true;}
  }


// 6kyu - Playing with digits

function digPow(n, p){
  // ...
  let numStr = String(n);
  let numArray = numStr.split('');
  let sum = 0;
  numArray.forEach((element,index) => {
    sum+=Math.pow(Number(element), index+p);
  })
  if (sum % n === 0) {return sum / n}
  else { return -1}
}

// 6kyu - Is a number prime?


function isPrime(num) {
  //TODO
  if (num < 2) { return false;}
  else if (num ===2 || num ===3 || num ===5 ) { return true;}
  else if (num % 2 ===0) { return false;}
  else {
    for (let i = 3; i*i <= num; i+=2) {
      if (num % i ===0) { return false;}
    }
    return true;
  }
  
}

// 6kyu - Who likes it?
// 

function likes(names) {
  let numberOfLikes = names.length;
  if (numberOfLikes ===0) { return `no one likes this`}
  else if (numberOfLikes ===1) { return `${names[0]} likes this`} 
  else if (numberOfLikes === 2) { return `${names[0]} and ${names[1]} like this`} 
  else if (numberOfLikes ===3) { 
    return `${names[0]}, ${names[1]} and ${names[2]} like this`}
  else {
  return `${names[0]}, ${names[1]} and ${numberOfLikes - 2} others like this`
  }
}

// 6kyu - Convert string to camel case

function toCamelCase(str){
  let symbol = "";
  if (/[\-]/.test(str)) {
    symbol = '-'
  }
  else if(/[\_]/.test(str)) {
    symbol = '_'
  }
  let tempArray = str.split(symbol);
  for (let i =1; i < tempArray.length; i++) {
    tempArray[i] = tempArray[i][0].toUpperCase() + tempArray[i].substr(1);
  }
  return tempArray.join('');
}

// 6kyu - Format a string of names like 'Bart, Lisa & Maggie'.

function list(names){

  let len = names.length
  if (len === 1) { return names[0].name} 
  else if (len ===0) { return ''}
  else {
    let answer = "";
    for (let i =0; i <len - 2; i++) {
      answer = answer + names[i].name + ", "
    }
    answer = `${answer}${names[len - 2].name} & ${names[len - 1].name}`
    return answer
  }
  
}

// 6kyu - Find the Parity Outlier

function findOutlier(integers){

  let even = 0;
  let odd = 0;
  let lastEven = 0;
  let lastOdd = 0;
    for (let i =0; i < integers.length; i++) {
      if (integers[i] % 2 ===0) {
        lastEven = integers[i];
        even++
      }
      else {
        lastOdd = integers[i];
        odd++
      }
    }
  if (even === 1) { return lastEven;}
  else { return lastOdd;}
  }
  
  // 6kyu - Replace with Alphabet Position

  function alphabetPosition(text) {
    let alpha = {
      "A": 1,"B": 2,"C": 3,"D":4, "E":5,"F":6, "G":7, "H":8,"I":9,"J":10,"K":11,"L":12,"M":13,"N":14,"O":15,"P":16,
      "Q":17,"R":18,"S":19,"T":20,"U":21,"V":22,"W":23,"X":24,"Y":25,"Z":26
    }
    return text.toUpperCase().split("").filter(x => alpha[x] > 0).map(x => alpha[x]).join(" ")
  }

  // 6kyu - Adjacent repeated words in a string

  function countAdjacentPairs(searchString) {
    let arr = searchString.toLowerCase().split(" ")
    let windowShade = 1;
    let counter = 0;
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[windowShade]) {
        while (arr[i] === arr[windowShade]) {
          windowShade++
        }
        i = windowShade - 1
        counter++
      }
      windowShade++
    }
    return counter;
  }
  
  // 6kyu - Create Phone Number
  function createPhoneNumber(numbers){
    let zip = String(numbers.shift()) + String(numbers.shift()) + String(numbers.shift())
    let middle = String(numbers.shift()) + String(numbers.shift()) + String(numbers.shift())
    let rest = numbers.join("")
    return `(${zip}) ${middle}-${rest}`
  }

  // Are they the "same"?

  function comp(array1, array2){
    try {
      if (array1 === null || array2 === null) {return false}
      for (let item1 of array1) {
      let itemSquared = item1 * item1
      if (array2.includes(itemSquared)) {
        let itemIndex = array2.indexOf(itemSquared)
        array2.splice(itemIndex, 1)
      } 
      else { return false; }
    }
    return true;
    }
    catch(error) {
      console.log(`Error happened: array1 is ${array1}`)
    }
    
  }

  // Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer

  function findSenior(list) {
  let greatest = 0;
  let answerArray = []
  for (const dev of list) {
    if (dev.age > greatest) { greatest = dev.age}
  }
  for (const dev of list) {
    if (dev.age === greatest) {
      answerArray.push(dev)
    }
  }
  return answerArray
}


// Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?
function allContinents(list) {
  if (list.length < 5) { return false}
  let continents = {'Africa':0, 'Americas':0, 'Asia':0, 'Europe':0, 'Oceania':0}
  for (let dev of list) {
    continents[dev.continent]++;
  }
  for (let cont in continents) {
    if (continents[cont] === 0) { return false}
  }
  return true;
}