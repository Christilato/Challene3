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
    // ask if they want uppercase?

  var wantUpper= confirm('Do you want to include uppercase characters in your password?')   
  var wantLower= confirm('Do you want to include lowercase characters in your password?')   

    // ask if they want lowercase?
    // ask if they want special characters
    // ask if they want numerics?

//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
    // ask what the length of the password should be 
    // answer needs to be between 8 and 128
  var desiredPasswordLength = prompt("How long do you want the password? Must be 8-128 characters");
if((parseInt(desiredPasswordLength) >= 8) && (parseInt(desiredPasswordLength) <= 128)){

  if(wantUpper) {
    availableCharacters = availableCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if(wantLower) {
    availableCharacters = availableCharacters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
  }

for(var i = 0; i < parseInt(desiredPasswordLength); i++) {
// get a random index based on the length of our character bank and use that to select one from that bank and then concatenate it into a password
var randomIndex = Math.floor(Math.random()*availableCharacters)
var randomCharacter = availableCharacters[randomIndex];

completedPassword = completedPassword + randomCharacter
}
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
    // all prompts answered-- verify at least one character type is chosen


//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
    // return completed password
return completedPassword;

} else {
  alert("the length needs to be a number between 8 and 128");
  return "";
 // generatePassword();
  //return null;
  }
}