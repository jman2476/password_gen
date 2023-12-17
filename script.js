// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global variables
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', '\\', ';', ':', "'", '"', ',', '.', '/', '<', '>', '?'];

var characterSet = [];
var passwordLength = +prompt('Please select password length');
var password = '';
console.log(passwordLength);

var wantsLowercase = true;
var wantsUppercase = false;
var wantsNumbers = false;
var wantsSpecialChar = false;

// Function to generate password
function generatePassword() {

  //Let the user select character sets

  if (wantsLowercase) {
      characterSet = characterSet.concat(lowercaseLetters);
  }
  console.log(characterSet);
  if (wantsUppercase) {
      characterSet = characterSet.concat(uppercaseLetters);
  }

  if (wantsNumbers) {
      characterSet = characterSet.concat(numbers);
  }

  if (wantsSpecialChar) {
      characterSet = characterSet.concat(specialCharacters);
  }

  //Generate the password

  for (var count = 0; count < passwordLength; count++) {
      var randIndex = Math.floor(Math.random() * characterSet.length);
      password += characterSet[randIndex];
  }

  console.log('Your new password: \n' + password);
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
