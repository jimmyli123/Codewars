
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