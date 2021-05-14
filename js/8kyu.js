
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