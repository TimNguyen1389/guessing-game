//function to start whole game
document.getElementById('gameBtn').addEventListener('click', function(){


  //variable to store counter for correct answers.
  var rightAnsCounter = 0;

  //variable to store user's name to personalize response.
  var userName = prompt("What is your name?");
  console.log("The user's name is " + userName);

  //use while loop to check for empty value/string.
  while (userName === "") {
    alert("Oops! You forgot to enter your name.");
    userName = prompt("What is your name?");
  }

  //concantenate user's name to greeting string.
  //this is to insert this line into html 'greeting' id
  document.getElementById('greeting').innerHTML = "Hi " + userName + "! Nice to meet you! Let's play a guessing game! You will guess 3 things about me!";

//create Q and A arrays
  var answer1, answer2, answer3;

  var questions = ["Am I taller than 5'6?",
                   "Do I weigh over 130 pounds?",
                   "Am I over 40 years old?"];

  var answers = [answer1, answer2, answer3];

  //first question
  //variable to store user's answer to question number 1.
  function q1() {
    var answer1 = prompt(questions[0]);

    //use while loop to check for yes or no answer only.
    //use toLowerCase to convert user's answer to all lowercases.
    while (answer1.toLowerCase() != "yes" && answer1.toLowerCase() != "no") {
      alert("Invalid answer! Yes or no answer only please.");
      answer1 = prompt(questions[0]);
    }

    //use if else statements to give different response based on user answered yes or no.
    if(answer1.toLowerCase() == "no") {
      document.getElementById('a1').innerHTML = "You answered no. That's right, " + userName + "! I am not taller than 5'6!";
      document.getElementById('a1-right').className = 'show';
      document.getElementById('a1').className = 'green';

      //add 1 to rightAnsCounter if answer is correct.
      rightAnsCounter++;
    } else {
      document.getElementById('a1').innerHTML = "You answered yes. That is incorrect, " + userName + ". I am not taller than 5'6. I am 5'5.";
      document.getElementById('a1-wrong').className = 'show';
      document.getElementById('a1').className = 'red';
    }

    //log user input to console.
    console.log("The user inputted " + answer1 + " to question 1.");
}

  //call function 1
  q1();
  //second question
  //repeat coding steps used in question/answer 1.

  function q2(){
    var answer2 = prompt(questions[1]);
    while (answer2.toLowerCase() != "yes" && answer2.toLowerCase() != "no") {
      alert("Invalid answer! Yes or no answer only please.");
      answer2 = prompt(questions[1]);
    }
    if(answer2.toLowerCase() == "no") {
      document.getElementById('a2').innerHTML = "You answered no. Good guess, " + userName + "! I do not weigh over 130 pounds!";
      document.getElementById('a2-right').className = 'show';
      document.getElementById('a2').className = 'green';
      rightAnsCounter++;
    } else {
      document.getElementById('a2').innerHTML = "You answered yes. That is incorrect, " + userName + ". I do not weigh over 130 pounds. I weigh 125 pounds.";
      document.getElementById('a2-wrong').className = 'show';
      document.getElementById('a2').className = 'red';
    }
    console.log("The user inputted " + answer2 + " to question 2.");

    //third question
    //repeat coding steps used in question/answer 1.
  }

  q2();

  function q3(){
    var answer3 = prompt(questions[2]);
    while (answer3.toLowerCase() != "yes" && answer3.toLowerCase() != "no") {
      alert("Invalid answer! Yes or no answer only please.");
      answer3 = prompt(questions[2]);
    }
    if(answer3.toLowerCase() == "yes") {
      document.getElementById('a3').innerHTML = "You answered yes. You are correct, " + userName + "! I am over 40 years old!";
      document.getElementById('a3-right').className = 'show';
      document.getElementById('a3').className = 'green';
      rightAnsCounter++;
    } else {
        document.getElementById('a3').innerHTML = "You answered no. That is incorrect, " + userName + ". I am over 40 years old. Sorry I can't tell you exactly how old I am!";
        document.getElementById('a3-wrong').className = 'show';
        document.getElementById('a3').className = 'red';
    }
    console.log("The user inputted " + answer3 + " to question 3.");
}

q3();

function q4(){
    //fourth question
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
      document.getElementById('a4').innerHTML = "You guessed it! I am 44 years old! :( ";
      //add 1 to rightAnsCounter
      rightAnsCounter++;
    }
    //if user's answer is greater than 44
    else if (parseInt(howOld, 10) > 44) {
      document.getElementById('a4').innerHTML = howOld + " is too high.";
    }
    //user's answer is less than 44 or anything else.
    else {
      document.getElementById('a4').innerHTML = howOld + " is too low.";
    }
  }
}

q4();

function q5(){
  //fifth question
  //same coding steps as question/answer 1.
  var haveFunAns = prompt("Did you enjoy playing this game?");
  while ((haveFunAns.toLowerCase() != "yes") && (haveFunAns.toLowerCase() != "no")) {
    alert("Invalid answer! Yes or no answer only please.");
    haveFunAns = prompt("Did you enjoy playing this game?");
  }
  if(haveFunAns.toLowerCase() == "yes") {
    alert("Awesome! I'm glad you're having fun!");
  } else {
    alert("I'm sorry you're having such a bad day, " + userName + "!");
  }
}

q5();

function q6(){
  //sixth question
  alert("Be a sport and guess the answer to one more question!");

  //computer generated random number from 1 to 10.
  var guessNum = Math.floor((Math.random() * 10) + 1);
  console.log(guessNum);

  //reset number of guesses counter
  guessNumCounter = 0;

  //user's guessed number
  var guessNumAns;

  //while loop - if answer is incorrect and number of guesses is under 3
  //prompt to user to guess again. Display the number of guesses left by guessNumCounter2
  //from 3. ParseInt return string to integer using base/radix of 10.
  while ((parseInt(guessNumAns, 10) !== guessNum) && (guessNumCounter < 3)) {
    guessNumAns = prompt("I am thinking of a number from 1 to 10. Guess what number it is? You get 3 guesses. You have " + (3 - guessNumCounter) + " guess(es) left!");
    guessNumCounter++;

    //alert if guessNumAns is not a number.
    if(isNaN(guessNumAns)) {
      alert(guessNumAns + " is not a number!");
    }
    //if user's guessNumAns is equal to random guessNum
    else if(parseInt(guessNumAns, 10) === guessNum) {
      document.getElementById('a5').innerHTML = "You got it! The number I'm thinking of is " + guessNum + "!";
      rightAnsCounter++;
    }
    //if user's guessNumAns is greater than random guessNum
    else if(parseInt(guessNumAns, 10) > guessNum) {
      document.getElementById('a5').innerHTML = guessNumAns + " is too high.";
    }
    else {
    //user's guessNumAns is less than random guessNum or anything else.
      document.getElementById('a5').innerHTML = guessNumAns + " is too low";
    }
  }
}

q6();
  //Display how many questions user answered correctly.
  document.getElementById('score').innerHTML = userName + ", you got " + rightAnsCounter + " correct answers out of 5 questions. Thanks for playing!";

})

