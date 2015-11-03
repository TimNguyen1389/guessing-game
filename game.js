  var rightAnsCounter = 0
  var userName = prompt("What is your name?");
  while (userName == false) {
    alert("Oops! You forgot to enter your name.");
    userName = prompt("What is your name?");
  }
  alert("Hi " + userName + "! Nice to meet you! Let's play a guessing game! You will guess 3 things about me!");

  var answer1 = prompt("Am I taller than 5'6?");
  while (answer1.toLowerCase() != "yes" && answer1.toLowerCase() != "no") {
    alert("Invalid answer! Yes or no answer only please.");
    answer1 = prompt("Am I taller than 5'6?");
  }
  if(answer1.toLowerCase() == "no") {
    alert("You answered no. That's right, " + userName + "! I am not taller than 5'6!");
    rightAnsCounter++;
  } else {
    alert("You answered yes. That is incorrect, " + userName + ". I am not taller than 5'6. I am 5'5.")
  }
  console.log("The user inputted " + answer1 + " to question 1.");

  var answer2 = prompt("Do I weigh over 130 pounds?");
  while (answer2.toLowerCase() != "yes" && answer2.toLowerCase() != "no") {
    alert("Invalid answer! Yes or no answer only please.");
    answer2 = prompt("Do I weigh over 130 pounds?");
  }
  if(answer2.toLowerCase() == "no") {
    alert("You answered no. Good guess, " + userName + "! I do not weigh over 130 pounds!");
    rightAnsCounter++;
  } else {
    alert("You answered yes. That is incorrect, " + userName + ". I do not weigh over 130 pounds. I weigh 125 pounds.");
  }
  console.log("The user inputted " + answer2 + " to question 2.");

  var answer3 = prompt("Am I over 40 years old?");
  while (answer3.toLowerCase() != "yes" && answer3.toLowerCase() != "no") {
    alert("Invalid answer! Yes or no answer only please.");
    answer3 = prompt("Am I over 40 years old?");
  }
  if(answer3.toLowerCase() == "yes") {
    alert("You answered yes. You are correct, " + userName + "! I am over 40 years old!");
    rightAnsCounter++;
  } else {
      alert("You answered no. That is incorrect, " + userName + ". I am over 40 years old. Sorry I can't tell you exactly how old I am!");
  }
  console.log("The user inputted " + answer3 + " to question 3.");

  var guessNumCounter = 0;
  var howOld;

  while ((parseInt(howOld) != 44) && (guessNumCounter < 3)) {
    howOld = prompt("Guess how old am I? You get 3 tries! You have " + (3 - guessNumCounter) + " guess(es) left!");
    guessNumCounter++;
    if(isNaN(howOld)) {
      alert(howOld + " is not a number!");
    }
    else if(parseInt(howOld) == 44) {
      alert("You guessed it! I am 44 years old! :( ");
      rightAnsCounter++;
    }
    else if (parseInt(howOld) > 44) {
      alert(howOld + " is too high.")
    }
    else {
      alert(howOld + " is too low.")
    }
  }


  alert(userName + ", you got " + rightAnsCounter + " correct answers out of 3 questions. Thanks for playing!");
