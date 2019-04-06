//TRIVIA GAME
function countdown () {
  var timeLeft = 100;
  var timer = setInterval(function(){
    document.getElementById("countdown").innerHTML = timeLeft + " seconds remaining";
    timeLeft -= 1;
    if(timeLeft <= 0){
      clearInterval(timer);
      document.getElementById("countdown").innerHTML = "Time's Up!"
    }
}, 1000);
}

$(document).ready(function(){

	$("trivia-container").hide();
	$("#finish-container").hide();


$("#startButton").on("click", function(){

  // Hide the start Div from the user
  $("#startGame-container").hide();


  // Show the Game Div
  $("#trivia-container").show();

  // startCountdown();
  // return;

});

// // Variable to hold the index of current question.
// // var questionIndex = 0;
// var game = {

//   wins: 0,
//   losses: 0,
//   unanswered: 0,
//   questions: {
//     q1: "Which Spice Girl left the group?",
   
//   },

