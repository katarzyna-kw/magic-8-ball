$(document).ready(function(){

    var magic8Ball = {};
    magic8Ball.listOfAnswers = ['Yes', 'No', 'Most definitely', 'Nah', 'Probably', 'Probably Not', 'For Sure!'];

    $("#answer").hide ();

    //method//
    magic8Ball.askAQuestion = function(question){
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");

        $("#answer").fadeIn(4000);
    

        var randomNumber = Math.random();
        var randomNumberArray = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberArray);
        var randomAnswer = this.listOfAnswers[randomIndex];

        $("#answer").text( randomAnswer );


        };
    
        var onClick = function() {
        $("#answer").hide( );
        $("#8Ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

        //wait before showing prompt

        setTimeout (function () {
            var question = prompt("Ask the Magic 8 Ball a yes or no question!");
            $("#8ball").effect("shake");
            magic8Ball.askAQuestion(question)}, 500);


    
        };
    
        $("#questionButton").click( onClick );

            
});