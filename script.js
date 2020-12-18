//Setting characters
//Upper character
var upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(upperLetter);
//Lower character
var lowerLetter = "abcdefghijklmnopqrstuvwxyz";
console.log(lowerLetter);
//Numeric
var num = "1234567890";
//Special character
spec = "!@#$%^&*()<>/?|,.:;'";
console.log(spec);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

var chartLengthChoose = [];
var newPassword = [];
var password = [];
var passwordText = [];
// Add event listener to generate button to open prompts
generateBtn.addEventListener("click", writePassword);
// Length of the password between 8 to 128 characters
function generatePassword() {
  chartLengthChoose = prompt("Choose character length 8<>128", "");
  console.log(Math.floor(chartLengthChoose));

  if (
    Math.floor(chartLengthChoose) >= 8 &&
    Math.floor(chartLengthChoose) <= 128
  ) {
    confirm("Character length " + chartLengthChoose);
  } else {
    alert("Not Available : " + "Character need to be between 8 <> 128");
    return;
  }

  // Character types-prompt

  //lowercase-prompt
  var lowerCasePrompt = confirm("Do you want to add a Lower case");
  if (lowerCasePrompt) {
    newPassword += lowerLetter;
    console.log("true");
  } else {
    console.log("false");
  }
  // uppercase-prompt
  var upperCasePrompt = confirm("Do you want to add a Upper case");
  if (upperCasePrompt) {
    newPassword += upperLetter;
    console.log("true");
  } else {
    console.log("false");
  }
  //numeric-prompt
  var numericCasePrompt = confirm("Do you want to add a Numeric ");
  if (numericCasePrompt) {
    newPassword += num;
    console.log("true");
  } else {
    console.log("false");
  }

  //Special-prompt
  var specCasePrompt = confirm("Do you want to add a Special character ");
  if (specCasePrompt) {
    newPassword += spec;
    console.log("true");
  } else {
    console.log("false");
  }

  //At least one character type should be selected
  if (
    specCasePrompt === false &&
    numericCasePrompt === false &&
    upperCasePrompt === false &&
    lowerCasePrompt === false
  ) {
    alert("At least one character type should be selected");
    return;
  }
  console.log(newPassword);
 
  // Generate password
      
    for (var i = 1; i <= chartLengthChoose; i++) {
      password += newPassword.charAt(
        Math.floor(Math.random() * newPassword.length) 
      );
      console.log(password);
      
    }
    
    passwordText = password;

  
  return;
};
