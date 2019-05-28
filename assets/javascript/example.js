//TRIVIA GAME
$(document).ready(function () {

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


    $("#start-button").on("click", function () {
      console.log("start clicked");

      // Hide the start Div from the user
      $("#startGame-container").hide();


      // Show the Game Div
      $("#trivia-container").show();
      


    });

  }
})
    countdown();