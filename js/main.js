

// 7kyu - number with 3 roots

// I initialize 3 variables with the square root, fourth root, 
// and the eighth root. If modulus of 1 is equal to 0, it means 
// its a whole integer. Thus if all 3 variables modulus 1 === 0,
// then its a perfect integer.

function perfectRoots(n){
    let secRoot = Math.sqrt(n);
    let fourthRoot = Math.sqrt(secRoot);
    let eighthRoot = Math.sqrt(fourthRoot);
    if (secRoot %1 ===0 && fourthRoot %1 ===0 && eighthRoot%1 ===0) {
      return true;
    }
    return false;
    
  }

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


  // 7kyu - Char Code Calculation

  function calc(x){
    let total1 = "";
    for (let i = 0; i < x.length; i++) {
      total1+=x.charCodeAt(i);
    }
    let total2 = total1.replace(/7/g,'1');
    
    let sumtotal1 = 0;
    for (char of total1) {
      sumtotal1+=Number(char);
    }
    let sumtotal2 = 0;
    for (char of total2) {
      sumtotal2+=Number(char);
    }
    return sumtotal1 - sumtotal2;
  }

console.log(calc("ABC"));
console.log(calc("aaaaaddddr"));


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