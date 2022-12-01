/* eslint-disable no-unused-vars */
'use strict';

let score=0;

function enterName() {
  let user =prompt('What is your name? ');
  alert(`hello ${user}. I'm Ty. Let's get to know each other. These are all yes/no or y/n got it?`);
  return user;
}


function questions() {
function q1() {
  let question1 =prompt('Are my eyes brown?').toLowerCase();
  if (question1 ==='yes' || question1 === 'y'){
    alert('correct'); score++;
  }
  else alert('wrong-o');
  //console.log ('answer 1 is yes');
  return question1;
}

function q2() {
  let question2 =prompt('Is my hair curly?').toLowerCase();
  if (question2 ==='yes' || question2 === 'y'){
    alert('correct'); score++;
  }
  else alert('wrong-o');
  //console.log ('answer 2 is yes');
  return question2;
}

function q3() {
  let question3 =prompt('Do I use gender neutral pronouns? ').toLowerCase();
  if (question3 ==='yes' || question3 === 'y'){
    alert('correct'); score++;
  }
  else alert('wrong-o');
  //console.log ('answer 3 is yes');
  return question3;
}

function q4() {
  let question4 =prompt('Do I like videogames?').toLowerCase();
  if (question4 ==='yes' || question4 === 'y'){
    alert('correct'); score++;
  }
  else alert('wrong-o');
  //console.log ('answer 4 is yes');
  return question4;
}

function q5() {
  let question5 =prompt('Do I have cats?').toLowerCase();
  if (question5 ==='yes' || question5 === 'y'){
    alert('correct'); score++;
  }
  else alert('wrong-o');
  //console.log ('answer 5 is yes');
  return question5;
}
}

function q6() {
  let lives = 4;{
    let answer =prompt('now guess a number 1-10 you have 4 lives'); {
      if (answer >= 6) {
        answer =prompt(`nope! too high, guess again ${lives} left `);
        lives--;
        return lives;
      }
    }
    {
      if (answer <= 4) {
        answer =prompt(`nope! too low ${lives} left`);
        lives--;
        return lives;
      }
    }
    {
      if (lives<1){
        answer=prompt('youre out of lives, but the answer is 5');
      }
    }
  }
}


questions();