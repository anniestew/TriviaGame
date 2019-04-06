//TRIVIA GAME

var timeleft = 120;
var downloadTimer = setInterval(function(){
  document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Time's Up!"
  }
}, 1000);

// Variable to hold the index of current question.
// var questionIndex = 0;
var game = {

  wins: 0,
  losses: 0,
  unanswered: 0,
  questions: {
    q1: "Which Spice Girl left the group?",
   
  },

  choices: {
    q1: ["Scary Spice, Sporty Spice, Posh Spice, Ginger Spice"],
    
  },

  answers: {
    q1: "Ginger Spice",

  }
},




  // Function to render questions.
  function renderQuestion() {
      // If there are still more questions, render the next one.
      if (questionIndex <= (questions.length - 1)) {
        document.querySelector("#question").innerHTML = questions[questionIndex].q;
      }
      // If there aren't, render the end game screen.
      else {
        document.querySelector("#question").innerHTML = "All done!";
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
      }
    }

    // $('#results')
    //     .html('<h3>All done!</h3>'+
    //     '<p>Correct: '+ game.correct +'</p>'+
    //     '<p>Incorrect: '+ game.incorrect +'</p>'+
    //     '<p>Unaswered: '+ game.unanswered +'</p>');
