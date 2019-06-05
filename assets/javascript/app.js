//TRIVIA GAME
$("#trivia-container").hide();
$("#finish-container").hide();

var correct = 0;
var incorrect = 0;
// // var unanswered = 0;

var correctText = document.getElementById("correct-text");
var incorrectText = document.getElementById("incorrect-text");
// var unansweredText = document.getElementById("unanswered-answers-text");

  
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
      
  
      $(document).on("click", "#finished-button", function () {
        console.log("finish clicked");
  
        // Hide the start Div from the user
        $("#trivia-container").hide();
  
  
        // Show the Game Div
        $("#finish-container").show();


        if ($('#correct1').is(':checked')) {
            correct++
        } else{
            incorrect++
        }
        if ($('#correct2').is(":checked")) {
            correct++
        } else{
            incorrect++
        }

        if ($('correct3').is(":checked")) {
            correct++
        } else{
            incorrect++
        }

        if ($('#correct4').is(":checked")) {
            correct++
        } else{
            incorrect++
        }

        if ($('#correct5').is(":checked")) {
            correct++
        } else{
            incorrect++
        }
        if ($('#correct6').is(":checked")) {
            correct++
        } else{
            incorrect++
        }
        answer();
  
  
      });

  function answer() {
    $("#correct").show();
    $("#incorrect").show();
    correctText.textContent = "Correct Answers: " + correct;
    incorrectText.textContent = "Incorrect Answers " + incorrect;
}