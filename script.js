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
  var passwordLength = readPassLength();
  var passWord = '';
  console.log(passwordLength);

  // Verify a value has been passed for the password length
  if (!passwordLength) {
    alert('No value passed for password lenght, task canceled');
    return;
  }

  // Gets desired character types from user
  var wantsLowercase = confirm('Do you want lowercase letters?');
  var wantsUppercase = confirm('Do you want uppercase letters?');
  var wantsNumbers = confirm('How about some numbers? Ya want some numbers?');
  var wantsSpecialChar = confirm('Maybe some special characters would be nice, how about that?');

  // Checks at least on data type has been selected
  while (!wantsLowercase && !wantsUppercase && !wantsNumbers && !wantsSpecialChar) {
    wantsLowercase = confirm('You need to select at least one character type. Are you sure you don‘t want lowercase letters?');
    wantsUppercase = confirm('You need to select at least one character type. Do you want uppercase letters?');
    var wantsNumbers = confirm('You need to select at least one character type. How about some numbers? Surely you want some numbers?');
    var wantsSpecialChar = confirm('You need to select at least one character type. Maybe some special characters would be nice, how about that? If you don’t want anything, I’m going to keep asking.');
  }

  //Let the user select character sets
  console.log(characterSet)

  if (wantsLowercase) {
    characterSet = characterSet.concat(lowercaseLetters);
  }

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

// Function to scrub passwordLength input
function readPassLength() {
  var lengthDummy = prompt('Please select password length between 8 and 128 characters. If a number is not given, the length of your input string will be used.');
  var scndDummy;

  // Check if string given is a number or letters, and is between 8-128
  do {
    
    if (isNaN(+lengthDummy)){
      scndDummy = lengthDummy.length;
    } else {
      scndDummy = +lengthDummy;
    }

    if (scndDummy >= 8 && scndDummy <= 128){
      lengthDummy = scndDummy;
    } else {
      lengthDummy = prompt('Your input did not meet the requirements. Please select password length between 8 and 128 characters. If a number is not given, the length of your input string will be used.');
    }
  } while (typeof lengthDummy === 'string')
  console.log(lengthDummy)
  return lengthDummy;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
