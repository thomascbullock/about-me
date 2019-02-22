'use strict';

// get the user's name

//adding function//
function processQnum(userAnswer, inRightAnswer) {
  var returnValue;
  if (userAnswer < inRightAnswer) {
    returnValue = 'Too Low';
  } else if (userAnswer === inRightAnswer) {
    returnValue = 'Correct';
  } else if (userAnswer > inRightAnswer) {
    returnValue = 'Too High';
  } else if (isNaN(userAnswer)) {
    returnValue = 'Please use a Number';
  }
  return returnValue;
}
function processQuestion(inQuestion, inRightAnswer, inText) {
  var answer = prompt(inQuestion).toUpperCase();
  console.log('answer: ', answer);
  if (answer !== 'YES' && answer!== 'Y' && answer!== 'NO' && answer !== 'N' & answer!=='') {
    alert('Invalid response. Please refresh the page to try again, using only yes or no answers to these questions.');
  } else {
    {
      //if the answer is valid, strip answer back to 1 char as we no longer care about Y vs YES
      var answerToCompare = answer.charAt(0);
      var returnValue;
      if (answerToCompare === inRightAnswer){
        returnValue = 'Correct';
      } else {
        returnValue = 'Incorrect';
      }
      alert(returnValue + ' ' + inText);
      return returnValue;
    }
  }
}

var userName = prompt('Welcome! As long as we\'re getting to know each other, what\'s your name?');
console.log('username: ', userName);

//validate userName - only alpha chars allowed, can be lower or upper, cannot be null

var alphaOnly = new RegExp('^[a-zA-Z]+$');

if (!alphaOnly.test(userName)) {
  alert('That\'s an unusual name. Refresh the page to try again using letters only.');

} else {
  alert('Hi, ' + userName + '! Nice to meet you. Find out a little more about me - try to guess the answers to the following questions using Yes or No responses.');
  var questionsArr = [
    {question: 'Was I born in the U.S.?',
      correctAnswer: 'N',
      alertTextSnip: 'Spent the first ten years of my life in the U.K. If the accent didn\'t give me away, the teeth certainly will.',
    },
    {question: 'Am I taller than Bono?',
      correctAnswer: 'N',
      alertTextSnip: 'He may only be 5\'7", but towers over me at 5\'4"',
    },
    {question: 'Do I have any pets?',
      correctAnswer: 'N',
      alertTextSnip: 'To date I\'ve had 2 border collies run over by trash trucks. Seems like I shouldn\'t get any more.'
    },
    {question: 'Does at least one of these questions have a \'yes\' answer?',
      correctAnswer: 'N',
      alertTextSnip: 'I probably should have made this the last question, it\'s a bit of a giveaway like this.'
    },
    {question: 'Is there anything else worth asking about?',
      correctAnswer: 'N',
      alertTextSnip: 'You\'ve pretty much covered it.'
    }
  ];
  var correctAnswerCount = 0;
  for (var i = 0; i < questionsArr.length; i++) {
    //get the answer in upper for ease of validation
    var results = processQuestion(questionsArr[i].question, questionsArr[i].correctAnswer, questionsArr[i].alertTextSnip);
    if (results === 'Correct') {
      correctAnswerCount++;
    }
  }
  //the last two questions don't really fit the pattern so doing them separately
  var randomNumGuessCount = 0;
  var randomNumGuessMax = 4;
  while (randomNumGuessCount < randomNumGuessMax) {
    var randomNumGuess = prompt('I\'ve picked a random number between 1 and 100. Can you guess it?');
    var randomNumAnswer = Math.round((Math.random())*100);
    var resultsQnum =  processQnum(randomNumGuess, randomNumAnswer);
    randomNumGuessCount++;
    if (resultsQnum === 'Correct') {
      alert('Congratulations! You got it in ' + randomNumGuessCount + ' tries.');
      randomNumGuessCount = 5;
    } else {
      alert(resultsQnum);
    }
  }

  var breweryList = ['New Belgium','Odell','Crooked Stave','Coopersmiths','Horse and Dragon','Equinox','Funkworks','Zwei'];
  var breweryGuessCount = 0;
  var breweryGuessMax = 6;
  var breweryAnswerCorrect = false;
  var baseAlert = 'The answers were: ' + breweryList;

  while (breweryGuessCount < breweryGuessMax) {
    var breweryGuess = prompt('I lived for many years in Fort Collins, home of most of the best breweries in the country. Can you name one?');
    breweryGuessCount++;
    console.log('guess: ' + breweryGuess);
    console.log('guess count: ' + breweryGuessCount);
    for (var breweryListIndex = 0; breweryListIndex < breweryList.length; breweryListIndex++) {
      if (breweryGuess === breweryList[breweryListIndex]) {
        breweryAnswerCorrect = true;
        //setting these two values to break the loops
        breweryListIndex = breweryListIndex.length;
        breweryGuessCount = breweryGuessMax;
        correctAnswerCount++;
      }
    }
  }
  if (breweryAnswerCorrect) {
    alert('You got one!' + baseAlert);
  } else {
    alert('Better luck next time.' + baseAlert);
  }

  alert('Thanks for playing! You got ' + correctAnswerCount + ' answers correct.');
}
