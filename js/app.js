'use strict';

// get the user's name

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

  for (var i = 0; i < questionsArr.length; i++) {
    //get the answer in upper for ease of validation
    var answer = prompt(questionsArr[i].question).toUpperCase();
    console.log('answer: ', answer);

    if (answer !== 'YES' && answer!== 'Y' && answer!== 'NO' && answer !== 'N' & answer!=='') {
      alert('Invalid response. Please refresh the page to try again, using only yes or no answers to these questions.');
    } else {
      //if the answer is valid, strip answer back to 1 char as we no longer care about Y vs YES
      var answerToCompare = answer.charAt(0);
      if (answerToCompare === questionsArr[i].correctAnswer) {
        alert('Correct! ' + questionsArr[i].alertTextSnip);
      } else {
        alert('Incorrect. ' + questionsArr[i].alertTextSnip);
      }
    }
  }
}

