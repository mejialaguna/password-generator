 
  let allAnswer =[]
  let guaranteeCharacters = []
  let password =[]


// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




function generatePassword() {
   // array of special 
   var randomSymbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
   // array of numbers
   var randomNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
 
   // array of lower case letters
   var randomLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
   // array of upper case letters
   var randomUpper = ["A","B","C", "D", "E", "F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z" ];
   
 
   // empty array of characters
   empty = []
  //ask the user how many characters
  let answer = parseInt(prompt("How many characters do you need for you new password..?"));
    if (!answer){
      alert("you need to place a valid value");
    }

    if (answer < 8 || answer > 128){
      alert("you need to place a valid answer between 8 and 128");
      // this make them go back to the question again if they have an invalid answer

      generatePassword()     
    }
  
  //ask the user if they want numbers
  let answer2 = confirm("would you like to add some numbers?")
    if (answer2){
      allAnswer = allAnswer.concat (randomNumber);

      guaranteeCharacters.push(randomNumber[Math.floor(Math.random() * randomNumber.length)]);
    }
    
  //ask the user if they want special characters
  let answer3 = confirm("would you like to add some special characters?")
  if (answer3){
    allAnswer = allAnswer.concat (randomSymbol);

    guaranteeCharacters.push(randomSymbol[Math.floor(Math.random() * randomSymbol.length)]);
  }
  
  //ask the user if they want uppercase letters
  let answer4 = confirm("would you like to add some UPPERCASE letters?")
  if (answer4){
    allAnswer = allAnswer.concat (randomUpper);
    
    guaranteeCharacters.push(randomUpper[Math.floor(Math.random() * randomUpper.length)]);
  }
  
  //ask the user if they want lower case letters
  let answer5 = confirm("would you like to add some lower case letters?")
  if (answer5){
    allAnswer = allAnswer.concat (randomLower);

    guaranteeCharacters.push(randomLower[Math.floor(Math.random() * randomLower.length)]);
  }

  if ( !answer2 && !answer3 && !answer4 && !answer5){ alert("your need to pick something....!");
   

 // calling the function to start over if they did not answer any of the questions..................

  generatePassword();
}

  
  
  for (var i = 0; i < answer; i++) {   
    password.push( allAnswer[Math.floor(Math.random() * allAnswer.length)]);
}
  



return password.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

