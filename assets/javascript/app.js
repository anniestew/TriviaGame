//TRIVIA GAME
$(document).ready(function () {

  $("#trivia-container").hide();
  $("#finish-container").hide();

  let countdown = function() {
    var timeLeft = 100;
    var timer = setInterval(function () {
      document.getElementById("countdown").innerHTML = timeLeft + " seconds remaining";
      timeLeft -= 1;
      if (timeLeft <= 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "Time's Up!"
      }
    }, 1000);


    $("trivia-container").hide();
    $("#finish-container").hide();
  }

    $(document).on("click", "#start-button", function () {
      console.log("start clicked");

      // Hide the start Div from the user
      $("#startGame-container").hide();


      // Show the Game Div
      $("#trivia-container").show();
      
      countdown();


    });

    //function for collecting answers in array
    //make loop for each question element and grab the checked answer
    //grab answer compare answer with the array of correct answers
    // if/else statement- if you have a match ++ correct
    //else ++ incorrect - 
    //unanswered - take amount of correct answers(array.length) 
    //and subtract the sum of correct and incorrect answers = unanswered 

    $(document).on("click", "#finished-button", function () {
      console.log("finish clicked");

      // Hide the start Div from the user
      $("#trivia-container").hide();


      // Show the Game Div
      $("#finish-container").show();


    });
})


// // Variable to hold the index of current question.
// // var questionIndex = 0;
// var game = {

//   wins: 0,
//   losses: 0,
//   unanswered: 0,
//   questions: {
//     q1: "Which Spice Girl left the group?",

