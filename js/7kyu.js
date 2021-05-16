


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


  // 7kyu - Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe

  function countDevelopers(list) {
    let counter = 0;
    list.forEach(developer => {
      if (developer.continent === "Europe" && developer.language === "JavaScript") {
        counter++;
      }
    })
    return counter
  }

  // 7kyu - Coding Meetup #2 - Higher-Order Functions Series - Greet developers

  function greetDevelopers(list) {
    list.forEach(developer => {
      developer['greeting'] = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`
    })
    return list
  }

  // Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?

  function isRubyComing(list) {
    let answer = false;
    list.forEach( developer => {
      if (developer.language === 'Ruby') answer = true
    })    
    return answer
  }