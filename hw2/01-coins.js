/** Exercise 01 - Coins **/

const calculateChange = (input) => {
  let remainder = 0;
  if(input <= 15 && input > 0){
    const dollers = Math.floor(input);
    remainder = input - dollers;
  
    quarters = Math.floor(remainder / 0.25);
    remainder -= quarters * 0.25;
  
    const dimes = Math.floor(remainder / 0.1);
    remainder -= dimes * 0.1;
  
    const nickles = Math.floor(remainder / 0.05);
    remainder -= nickles * 0.05;
  
    const pennies = Math.round(remainder * 100);
    
    if(input === 1){
      console.log(`${dollers} dollar, ${quarters} quarter, ${dimes} dime, ${nickles} nickel, ${pennies} penny`);
    }
    else if(input <1){
      console.log(`${quarters} quarters, ${dimes} dime, ${nickles} nickels, ${pennies} pennies`);
    }else{
      console.log(`${dollers} dollars, ${quarters} quarters, ${dimes} dime, ${nickles} nickels, ${pennies} pennies`);
    }
  }else{
    console.log("Error: the number is too large or negative");
  } 
};

// Sample Test Cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(9.74));
// $9.74 ==> 9 dollars, 2 quarters, 2 dimes, 4 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(0.75));
// 0.75  ==> 3 quarters, 0 dime, 0 nikels, 0 pennies
console.log(calculateChange(2.44));
// $2.44 ==> 9 dollars, 2 quarters, 2 dimes, 4 pennies
console.log(calculateChange(1));
// $1 ==> 1 dollar, 0 quarters, 0 dimes, 0 pennies
console.log(calculateChange(15.11));
// $15.11 ==> Error: the number is too large or negative
console.log(calculateChange(-1));
// -$1 ==> Error: the number is too large or negative
