//Setting characters
//Upper character
var upperLetter = ["A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"];
console.log(upperLetter);
//Lower character
var lowerLetter = ["a	b	c	d	e	f	g	h	i	j	k	l	m	n	o	p	q	r	s	t	u	v	w	x	y	z"];
console.log(lowerLetter);
//Numeric
var num = ["1 2 3 4 5 6 7 8 9 0"];
//Special character
spec = ["!@#$%^&*()<>/?|,.:;'"];
console.log(spec);

// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

var chartLengthChoose = []
var newPassword = [];
// Add event listener to generate button to open prompts
generate.addEventListener("click", writePassword);
// Length of the password between 8 to 128 characters
function writePassword() {
   chartLengthChoose = prompt("Choose character length 28<>128", "");
  console.log(Math.floor(chartLengthChoose));

  if (
    Math.floor(chartLengthChoose) >= 28 &&
    Math.floor(chartLengthChoose) <= 128
  ) {
    confirm("Character length " + chartLengthChoose);
  } else {
    alert("Not Available");
    return;
  }

  // Character types-prompt
  
  
  //lowercase-prompt
  var lowerCasePrompt = confirm("Do you want to add a Lower case");
  if (lowerCasePrompt) {
    newPassword += lowerLetter;
    console.log("true");
  } else {
    newPassword -= lowerLetter;
    console.log("false");
    return;
  }
  // uppercase-prompt
  var upperCasePrompt = confirm("Do you want to add a Upper case");
  if (upperCasePrompt) {
    newPassword += upperLetter;
    console.log("true");
  } else {
    newPassword -= upperLetter;
    console.log("false");
    return;
  }
  //numeric-prompt
  var numericCasePrompt = confirm("Do you want to add a Numeric ");
  if (numericCasePrompt) {
    newPassword += num;
    console.log("true");
  } else {
    newPassword -= num;
    console.log("false");
    return;
  }

  //Special-prompt
  var specCasePrompt = confirm("Do you want to add a Numeric ");
  if (specCasePrompt) {
    newPassword += spec;
    console.log("true");
  } else {
    newPassword -= spec;
    console.log("false");
    return;
  }

};

// Generate password

for (var i = 28; i <= chartLengthChoose; i++) {
  newPassword = (Math.floor(Math.random(newPassword) * Math.floor(newPassword.length))) - chartLengthChoose ;
};
console.log(newPassword)


//Display password as an alert or written;
//document.getElementById("password").value = newPassword
