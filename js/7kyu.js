


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

// 7kyu - Isograms

function isIsogram(str){
  let temp = str.toLowerCase();
  if (str.length === 0) { return true;}
  else {
    while (temp.length > 0) {
      let test = temp.substring(1);
      if (test.includes(temp.charAt(0))) {
        return false;
      } 
      temp = temp.substring(1);
    }
    return true;
  }
}

// 7kyu - String ends with?

function solution(str, ending){
    // TODO: complete
    let xLength = ending.length
    if (str.substr(str.length - xLength) === ending) { return true}
    else { return false;}
  }


  // 7kyu - Thinkful - String Drills: Poem formatter
  

  function formatPoem(poem) {
    //your code here
    let eachSentence = poem.split(". ")
    return eachSentence.join(".\n")
  }