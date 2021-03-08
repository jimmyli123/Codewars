

// 7kyu - number with 3 roots

function perfectRoots(n){
    let secRoot = Math.sqrt(n);
    let fourthRoot = Math.sqrt(secRoot);
    let eighthRoot = Math.sqrt(fourthRoot);
    if (secRoot %1 ===0 && fourthRoot %1 ===0 && eighthRoot%1 ===0) {
      return true;
    }
    return false;
    
  }

  