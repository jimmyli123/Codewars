


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

  // Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer

  function getFirstPython(list) {
    let answer = `There will be no Python developers`;
    list.forEach(developer => {
      if (developer.language === 'Python') { answer = `${developer.firstName}, ${developer.country}`}
    })
    return answer
  }


  // Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer

  function getFirstPython(list) {
    // Thank you for checking out my kata :)
    for (let i =0; i < list.length; i++) {
      let currentDev = list[i]
      if (list[i].language === 'Python') { return `${currentDev.firstName}, ${currentDev.country}`}
    }
    return `There will be no Python developers`
  }

  // Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages

  function countLanguages(list) {

    let answer = {}
    list.forEach( developer => {
      let currentLanguage = developer.language
      if (answer[currentLanguage] !== undefined) { answer[currentLanguage]++}
      else {
        console.log(`else: ${answer.currentLanguage}`)
        answer[currentLanguage] = 1}
    })
    return answer
  }

  // Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
  function isSameLanguage(list) {
    let firstDevLan = list[0].language
    for (const dev of list) {
      console.log(dev)
      if (dev.language != firstDevLan) {
        return false
      }
    }
    return true
  }

  // Coding Meetup #11 - Higher-Order Functions Series - Find the average age
  function getAverageAge(list) {
    let ageArray = []
    for (let dev of list) {
      ageArray.push(dev.age)
    }
    console.log(ageArray)
    let ageSum = ageArray.reduce((acc, currentVal) => {
      return acc + currentVal
    })
    return Math.round(ageSum/ageArray.length)
  }

  // Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins

  function findAdmin(list, lang) {
    // Create an array that will contain the developers that fulfill our requirements.
    // loop through each developer
    // if developer's language === lan and githubAdmin === yes, add this developer to our answerArray
    let answerArray = []
    for (const developer of list) {
      if (developer.language === lang && developer.githubAdmin === 'yes') {
        answerArray.push(developer)
      }
    }
    return answerArray
  }

  // Coding Meetup #14 - Higher-Order Functions Series - Order the food

  function orderFood(list) {

    let answerObj = {}
    for (const dev of list) {
      if(answerObj[dev.meal] === undefined) {
        answerObj[dev.meal] = 1
      }
      else {
        answerObj[dev.meal]++
      }
    }
    return answerObj
  }

  // Triangle area.
  function tArea(tStr) {
    console.log(tStr.split("."))
    let arr = tStr.split(".")
    let count = 0;
    for (let item of arr) {
      if (item === "\n") {count++}
    }
    console.log(count)
    let height = count - 2
    return (height*height) / 2
  }
  // Highest and Lowest
  function highAndLow(numbers){
    // ...
    let numbArray = numbers.split(" ")
    let high = Math.max(...numbArray)
    let low = Math.min(...numbArray)
    return `${high} ${low}`
  }


  // Square Every Digit

  function squareDigits(num){
    //may the code be with you
    let numArray = String(num).split("")
    console.log(num)
    return Number(numArray.reduce((acc, currentValue) => 
                    acc + (Number(currentValue) * Number(currentValue)), ""))
  }

  // Sort arrays - 1
  sortme = function( names ){
    return names.sort()
  }

  // Chicken Sexing
  function correctness(bobsDecisions, expertDecisions) {
    let count = 0;
    for (let i = 0; i < bobsDecisions.length; i++) {
      if (bobsDecisions[i] === expertDecisions[i]) {
        count++
      }
      else if (bobsDecisions[i] === "?" || expertDecisions[i] ==="?") {
        count+=0.5
      }
    }
    return count;
  }