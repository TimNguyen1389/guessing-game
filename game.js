  //variable to store counter for correct answers.
  var rightAnsCounter = 0

  //variable to store user's name to personalize response.
  var userName = prompt("What is your name?");
  console.log("The user's name is " + userName);

  //use while loop to check for empty value/string.
  while (userName == false) {
    alert("Oops! You forgot to enter your name.");
    userName = prompt("What is your name?");
  }

  //concantenate user's name to greeting string.
  alert("Hi " + userName + "! Nice to meet you! Let's play a guessing game! You will guess 3 things about me!");

  //variable to store user's answer to question number 1.
  var answer1 = prompt("Am I taller than 5'6?");

  //use while loop to check for yes or no answer only.
  //use toLowerCase to convert user's answer to all lowercases.
  while (answer1.toLowerCase() != "yes" && answer1.toLowerCase() != "no") {
    alert("Invalid answer! Yes or no answer only please.");
    answer1 = prompt("Am I taller than 5'6?");
  }

  //use if else statements to give different response based on user answered yes or no.
  if(answer1.toLowerCase() == "no") {
    alert("You answered no. That's right, " + userName + "! I am not taller than 5'6!");
    //add 1 to rightAnsCounter if answer is correct.
    rightAnsCounter++;
  } else {
    alert("You answered yes. That is incorrect, " + userName + ". I am not taller than 5'6. I am 5'5.")
  }

  //log user input to console.
  console.log("The user inputted " + answer1 + " to question 1.");

  //repeat coding steps used in question/answer 1.
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

  //repeat coding steps used in question/answer 1.
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

  //variable to counter for how many guesses.
  var guessNumCounter = 0;

  //variable to store user's answer to how old question.
  var howOld;

  //use while loop - if answer is incorrect and number of guesses is under 3
  //prompt to user to guess again. Display the number of guesses left by guessNumCounter
  //from 3. ParseInt return string to integer using base/radix of 10.
  while ((parseInt(howOld, 10) !== 44) && (guessNumCounter < 3)) {
    howOld = prompt("Guess how old am I? You get 3 tries! You have " + (3 - guessNumCounter) + " guess(es) left!");
    //add 1 to guessNumCounter.
    guessNumCounter++;
    //if howOld is not a number alert user.
    if(isNaN(howOld)) {
      alert(howOld + " is not a number!");
    }
    //if user's answer is 44
    else if(parseInt(howOld, 10) === 44) {
      alert("You guessed it! I am 44 years old! :( ");
      //add 1 to rightAnsCounter
      rightAnsCounter++;
    }
    //if user's answer is greater than 44
    else if (parseInt(howOld, 10) > 44) {
      alert(howOld + " is too high.");
    }
    //user's answer is less than 44 or anything else.
    else {
      alert(howOld + " is too low.");
    }
  }
  //fifth question
  //same coding steps as question/answer 1.
  var haveFunAns = prompt("Did you enjoy playing this game?");
  while ((haveFunAns.toLowerCase() != "yes") && (haveFunAns.toLowerCase() != "no")) {
    alert("Invalid answer! Yes or no answer only please.");
    haveFunAns = prompt("Did you enjoy playing this game?");
  }
  if(haveFunAns.toLowerCase() == "yes") {
    alert("Awesome! I'm glad you're having fun!")
  } else {
    alert("I'm sorry you're having such a bad day, " + userName + "!")
  }

  alert("Be a sport and guess the answer to one more question!")

  //computer generated random number from 1 to 10.
  var guessNum = Math.floor((Math.random() * 10) + 1);
  console.log(guessNum);

  //number of guesses counter
  var guessNumCounter2 = 0;

  //user's guessed number
  var guessNumAns;

  //while loop - if answer is incorrect and number of guesses is under 3
  //prompt to user to guess again. Display the number of guesses left by guessNumCounter2
  //from 3. ParseInt return string to integer using base/radix of 10.
  while ((parseInt(guessNumAns, 10) !== guessNum) && (guessNumCounter2 < 3)) {
    guessNumAns = prompt("Guess what number(from 1 to 10) I'm thinking of? You get 3 guesses. You have " + (3 - guessNumCounter2) + " guess(es) left!");
    guessNumCounter2++;

    //alert if guessNumAns is not a number.
    if(isNaN(guessNumAns)) {
      alert(guessNumAns + " is not a number!");
    }
    //if user's guessNumAns is equal to random guessNum
    else if(parseInt(guessNumAns, 10) === guessNum) {
      alert("You got it! The number I'm thinking of is " + guessNum + "!");
      rightAnsCounter++;
    }
    //if user's guessNumAns is greater than random guessNum
    else if(parseInt(guessNumAns, 10) > guessNum) {
      alert(guessNumAns + " is too high.");
    }
    else {
    //user's guessNumAns is less than random guessNum or anything else.
      alert(guessNumAns + " is too low");
    }
  }

  //Display how many questions user answered correctly.
  alert(userName + ", you got " + rightAnsCounter + " correct answers out of 5 questions. Thanks for playing!");
