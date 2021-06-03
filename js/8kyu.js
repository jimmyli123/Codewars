
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
