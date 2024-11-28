function scuberGreetingForFeet(distance){
  // Write your code here!
  let results
   if (distance > 2500){
    results = 'No can do.'
  }
  else if (distance >= 2000){
    results = 'I will gladly take your thirty bucks.'
  }
  else if (distance <= 2000 && distance>= 400){
    results = 'That will be twenty bucks.'
  }
  if (distance <= 400){
    results = 'This one is on me!'
  }
  return results

}

function ternaryCheckCity(city){
  // Write your code here!
  let results
  if (city === 'NYC')  {
    results = 'Ok, sounds good.';
  }
  else {
    results = "No go.";
}
return results
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let results
  if ( tip === 'generous')  {
    results = "Thank you so much.";
  }
  else if (tip === 'not as generous'){
    results = "Thank you."
  }
  else {
    results = "Bye.";
}
return results
}