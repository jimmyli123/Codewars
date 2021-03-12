

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
