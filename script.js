// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page
  passwordText.value = password;

}
//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var availableCharacters = "";
  var completedPassword = "";

//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    // prompt to ask for uppercase//
    // prompt to ask for lowercase//
    // prompt to ask for special characters//
    // prompt to ask for numerics?//

  var desiredPasswordLength = parseInt(prompt("How long do you want the password? Must be 8-128 characters"));
// create a statement to check if password length is a number
if(Number.isNaN(desiredPasswordLength)){
  alert("passsword length must be a number");
  return null;
}

//alerting that it must be atleast 8
if(desiredPasswordLength < 8){
  alert("There must be atleast 8");
  return null;
} 
// alerting error if over 128
if(desiredPasswordLength > 128) {
  alert("The password cannot be more than 128 characters");
  return null;
}

  var wantUpper= confirm('Do you want to include uppercase characters in your password?')   
  var wantLower= confirm('Do you want to include lowercase characters in your password?')   
  var wantSpecialCharacters= confirm('Do you want to include special characters?')
  var wantNumerics = confirm('Do you want to include numerics in you password?')

if(
  wantUpper === false && 
  wantLower === false &&
  wantSpecialCharacters === false &&
  wantNumerics === false 
) { 
  alert("Must have atleast one character type");
  return null;
}
 
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
    // all prompts answered-- verify at least one character type is chosen

  // object: password options criteria give true or false 

//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
    // prompt to ask what the length of the password should be// 
    // let them know the answer needs to be between 8 and 128//
 

  if(wantUpper) {
    availableCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if(wantLower) {
    availableCharacters = availableCharacters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
  }

  if(wantSpecialCharacters){
    availableCharacters = availableCharacters + "~!@#$%^&*()_+-=[]{}}|;:<>?/.,";
  }

  if(wantNumerics){
    availableCharacters = availableCharacters + "1234567890";
  }
console.log(availableCharacters);


for(var i = 0; i < parseInt(desiredPasswordLength); i++) {
// get a random index based on the length of our character bank and use that to select one from that bank and then concatenate it into a password
console.log((parseInt(desiredPasswordLength)));

var randomIndex = Math.floor(Math.random()*availableCharacters.length) // string so had to do .length
var randomCharacter = availableCharacters[randomIndex];
console.log(randomCharacter);
completedPassword = completedPassword + randomCharacter
}
 
 console.log(completedPassword);

//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
    // return completed password
 return completedPassword;

//  } else {
//    alert("the length needs to be a number between 8 and 128");
//    return "";
//   // generatePassword();
//    //return null;
//   }
}