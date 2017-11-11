$(document).ready(function() {

  $("#answer").hide();

  var magic8Ball = {};

  magic8Ball.listOfAnswers = ["yes", "no", "maybe", "probably", "definitely not"];


  magic8Ball.askQuestion = function(question) {
    $("#answer").hide();
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
    var randomNumber = Math.random();
    var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
    var randomIndex = Math.floor(randomNumberForListOfAnswers);
    var answer = this.listOfAnswers[randomIndex]

    $("#8ball").effect( "shake" );

    $("#answer").text(answer);
    $("#answer").fadeIn(2000);

    console.log(question);
    console.log(answer);
  };

  var onClick = function() {
    $("#answer").hide();
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
    var question = prompt("ASK A YES/NO QUESTION!");

    setTimeout(function() {
      magic8Ball.askQuestion(question)

    }, 100);

  };


  $("#questionButton").click(onClick);

});
