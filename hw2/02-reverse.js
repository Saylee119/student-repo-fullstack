/** Exercise 02 - Reverse **/

function reverseNum()
{
  let number = document.getElementById('input').value;
  let answer= document.getElementById("answer");
  let num= number;
  let rev = 0;
  
  length = number.toString().length;
  if (length != 8 ||number == 00000000){
    answer.style = "color:Red";
    answer.innerHTML = "Error: Please input an 8-digit number";
    return;
  }else{
    while(number != 0){
      rem = number % 10;
      rev = rev * 10 + rem;
      number = Math.floor(number/10);
    }
    console.log(num + "=" + rev);
    answer.style = "color:Green";
    answer.innerHTML = num + " --> " + rev;
  }
}

