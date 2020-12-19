// Setting characters
  //Upper character
var upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(upperLetter);
  //Lower character
var lowerLetter = "abcdefghijklmnopqrstuvwxyz";
console.log(lowerLetter);
  //Numeric character
var num = "1234567890";
console.log(num);
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

// Setting up variables
  // Character length choose by user
  var chartLengthChoose = [];
  // generate new password
var newPassword = [];
  // Identify the Id target as a variable
var password = [];
  // Identify the Id target children as a variable
var passwordText = [];

// Add event listener to generate button to open prompts
generateBtn.addEventListener("click", writePassword);


// Creating a function to generate password through user selections
function generatePassword() {
  // Length of the password between 8 to 128 characters
    // Ask question about the length of character
  chartLengthChoose = prompt("Choose character length 8<>128", "");
  console.log(Math.floor(chartLengthChoose));
    // Setting up a condition for the character length that can be choosed
  if (
    Math.floor(chartLengthChoose) >= 8 &&
    Math.floor(chartLengthChoose) <= 128
  ) {
      // Confirm the length choosed 8<=>128
    confirm("Character length " + chartLengthChoose);
  } else {
      // If the choosed length is not in the condition display alert
    alert("Not Available : " + "Character need to be between 8 <> 128");
    return;
  }

    // Character types-prompt && creating the possible password

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
    
  }
  console.log(newPassword);
 
  // Generate password
      
    for (var i = 1; i <= chartLengthChoose; i++) {
      password += newPassword.charAt(
        Math.floor(Math.random() * newPassword.length) 
      );
      console.log(password);
    }
      return password
  };
 
