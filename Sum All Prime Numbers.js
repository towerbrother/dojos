function sumPrimes(num) {

    //function to check prime numbers
    function isPrime(number){
      //negative numbers, 0 and 1 are not prime numbers
      if (number <= 1) {
        return false;
      }
      //check even numbers
      if (number % 2 === 0 && number > 2){
        return false;
      }
      //squareroot of num - the loop is more efficient
      let sq = Math.sqrt(number);
      //the modulo shows if a divisor was found 
      for(let i = 3; i <= sq; i++) { 
          if(number % i === 0){
            return false;
          }
      }
      //if all tests are passed then return true
      return true;
      }
  
    //create an array and populate it from 2 to num
    let arr = [];
    for(let i = 0; i <= num; i++){
      arr.push(i);
    }
  
  //iterate through arr and chech whether is a prime or not
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
      if(isPrime(arr[i])){
        sum += arr[i];
      }
    }
    
    return sum;
  }
  
  // test here
  sumPrimes(10);