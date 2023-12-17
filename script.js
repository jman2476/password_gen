// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global variables
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', '\\', ';', ':', "'", '"', ',', '.', '/', '<', '>', '?'];

// Function to generate password
function generatePassword() {

  var characterSet = [];
  var passwordLength = +prompt('Please select password length');
  var passWord = '';
  console.log(passwordLength);

  var wantsLowercase = true;
  var wantsUppercase = true;
  var wantsNumbers = false;
  var wantsSpecialChar = false;

  //Let the user select character sets
  console.log(characterSet)

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

  do {
    for (var count = 0; count < passwordLength; count++) {
      var randIndex = Math.floor(Math.random() * characterSet.length);
      passWord += characterSet[randIndex];
    }

    //Check password meets requirements
  } while (!checkPassword(passWord, wantsLowercase, wantsUppercase, wantsNumbers, wantsLowercase));

  console.log('Your new password: \n' + passWord);
  return passWord;
}

//Check that each prefered type is in the password
//if wantsType == true, check there is one character of the type in the password

function checkPassword(pword, lowercase, uppercase, num, specChar) {
  var hasReqs = true; //change to false if missing requirements
  var intersection;
  var alpha;
  var passPlaceholder = pword;

  if (lowercase) {
    for (var i = 0; i < lowercaseLetters.length; i++) {
      alpha = passPlaceholder.includes(lowercaseLetters[i])
      console.log(alpha)
      if (alpha) {
        if (intersection === undefined) {
          intersection = lowercaseLetters[i];
          console.log(intersection);
        } else {
          intersection += lowercaseLetters[i];
          console.log(intersection);
        }

      }
    }
    if (intersection === undefined) {
      hasReqs = false;
    }
    console.log("Has lowercase: " + hasReqs);
  }

  if (hasReqs && uppercase) {
    for (var i = 0; i < uppercaseLetters.length; i++) {
      alpha = passPlaceholder.includes(uppercaseLetters[i])
      console.log(alpha)
      if (alpha) {
        if (intersection === undefined) {
          intersection = uppercaseLetters[i];
          console.log(intersection);
        } else {
          intersection += uppercaseLetters[i];
          console.log(intersection);
        }

      }
    }
    if (intersection === undefined) {
      hasReqs = false;
    }
    console.log("Has uppercase: " + hasReqs);
  }

  if (hasReqs && num) {
    for (var i = 0; i < numbers.length; i++) {
      alpha = passPlaceholder.includes(numbers[i])
      console.log(alpha)
      if (alpha) {
        if (intersection === undefined) {
          intersection = numbers[i];
          console.log(intersection);
        } else {
          intersection += numbers[i];
          console.log(intersection);
        }

      }
    }
    if (intersection === undefined) {
      hasReqs = false;
    }
    console.log("Has numbers: " + hasReqs);
  }

  if (hasReqs && specChar) {
    for (var i = 0; i < specialCharacters.length; i++) {
      alpha = passPlaceholder.includes(specialCharacters[i])
      console.log(alpha)
      if (alpha) {
        if (intersection === undefined) {
          intersection = specialCharacters[i];
          console.log(intersection);
        } else {
          intersection += specialCharacters[i];
          console.log(intersection);
        }

      }
    }
    if (intersection === undefined) {
      hasReqs = false;
    }
    console.log("Has special characters: " + hasReqs);
  }
  return hasReqs
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
