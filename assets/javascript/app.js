$("#start").on("click", function () {//when user presses the "start" button the function initilizes the game.
    game.start();//starts the game
})
// we need to create this because #end dosen't exist at the time the document is loaded.
$(document).on('click','#Done', function(){//ends the game when user presses the "done" button.
    game.done();
})

//Created a questions array which includes a bunch of objects. Each object has a question, an array of answers and 
//the correct answer.
var questions = [{
    question: "Who was the shortest player ever to play in the NBA?",
    answers: ["Nate Robinson", "Tyronn Lue", "Isaiah Thomas", "Muggsy Bogues"],
    correctAnswer: "Muggsy Bogues"
}, {
    question: "What male tennis player has won the most Grand Slam titles?",
    answers: ["Rafael Nadal", "Novak Djokovic", "Roger Federer", "Pete Sampras"],
    correctAnswer: "Roger Federer"
}, {
    question: "How many holes are there in a full round of golf?",
    answers: ["18", "10", "20", "15"],
    correctAnswer: "18"

}, {
    question: "What is professional wrestler, John Cena, catch phrase?",
    answers: ["You're Garbage", "You Cannot See Me!", "Hello, How Are You?", "I Will Find You, And I Will Kill You"],
    correctAnswer: "You Cannot See Me!"

}, {
    question: "Who is the only athlete ever to play in a Super Bowl and a World Series?",
    answers: ["Bo Jackson", "Tim Tebow", "Deion Sanders", "Brian Jordan"],
    correctAnswer: "Deion Sanders"

}, {
    question: "What city hosted the 2012 Summer Olympics?",
    answers: ["Tokyo, Japan", "Athens, Greece", "Rio De Janeiro, Brazil", "London, England"],
    correctAnswer: "London, England"

}, {
    question: "What year was the first Super Bowl played?",
    answers: ["1950", "1967", "1960", "1930"],
    correctAnswer: "1960"

}, {
    question: "Which team did the Chicago Cubs play in the 1945 World Series?",
    answers: ["Detroit Tigers", "Los Angeles Dodgers", "New York Yankees", "Miami Marlins"],
    correctAnswer: "Detroit Tigers"

}, {
    question: "What rule did the Oakland Raiders get shafted by against the New England Patriots in the 2001 AFC Championship Game?",
    answers: ["Holding", "Pass Interference", "The Tuck Rule", "Roughing The Passer"],
    correctAnswer: "The Tuck Rule"

}, {
    question: "Brazil was eliminated in the 2014 world cup by what team?",
    answers: ["Australia", "Spain", "Japan", "Germany"],
    correctAnswer: "Germany"

}];
//created an object called "game". Within the object we create unique properties and methods.
var game = {
    correct: 0, //keeps track of how many correct answers the player gives.
    incorrect: 0, //keeps track of how many incorrect answers the player gives. 
    counter: 120, //created a counter that is 120 seconds and counts down each second.
    countdown: function () { //created a function to allow the counter to countdown.
        game.counter--; //decreases the counter by 1.
        $("#counter").html(game.counter); //changes a element on the page to be that #.
        if (game.counter <= 0) { //if counter is <= 0 we want the game to end.
            
            game.done(); //runs when the game is finished.
        }
    },
    start: function () { //
        timer = setInterval(game.countdown, 1000);//created a timer running that every 1000 milliseconds will run the game.countdown function, which we created above. it's going to decrease the game counter by 1, if the counter is <=0 it will run the game.done function. 
        $('#subheader').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');//this adds the time remaining to the trivia game.
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            $("#subheader").append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                //append each and every single question with a radio type with a name that is equal to the # of the question
                //then a value that is equal to the answer. That way we can store the value within the buttons themselves.
                $("#subheader").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
         
            }
        }
        //creates a "done" button at the end of the trivia so user can press if they finish before time is up.
        $('#button-position').append("<br><button id='Done'>Done</button>");//created a div id called "button-position" so I could independently stylize the button so I didn't have to include it in the #subheader.
    },
    done: function () {//this function is in charge of checking whether or not a question was correct or incorrect. Has to do this for each and every question on the page.
        $.each($("input[name='question-0']:checked"), function () { //this(.each) looks for each element that we mention within these parantheses. It looks for any input type that has the name of question 1 and is currently checked.
            if ($(this).val() == questions[0].correctAnswer) {//checks to see if the value is = to the correct answer.
                game.correct++;//increases correct score count by 1
            } else {
                game.incorrect++;//decreases correct score count by 1
            }
                    //REPEAT THIS FOR THE REST OF THE QUESTIONS!
        });

        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }

        });

        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }

        });

        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }

        });

        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }

        });

        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }

        });

        $.each($("input[name='question-6']:checked"), function () {
            if ($(this).val() == questions[6].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }

        });

        $.each($("input[name='question-7']:checked"), function () {
            if ($(this).val() == questions[7].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }

        });

        $.each($("input[name='question-8']:checked"), function () {
            if ($(this).val() == questions[8].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }

        });

        $.each($("input[name='question-9']:checked"), function () {
            if ($(this).val() == questions[9].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }

        });

        this.result(); //This prints the results of the game,
    },
    result: function () {
        clearInterval(timer);//stops the timer from running after the game is done,
        $("#subheader h2").remove();//this removes the time remaining section.
        $("#button-position").remove();//removes the "done" button.
        $("#subheader").html('<h2>Finished!</h2>');//alerts the player that they are finished on the screen
        $("#subheader").append("<h3>Correct Answers: " + this.correct + "</h3>");//Prints all our correct answers.
        $("#subheader").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");//Prints all our incorrect answers.
        //This list's the questions that were left unanswered by saying: How many questions were there? If they weren't correct or incorrect then they must have not been answered.
        $("#subheader").append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }
}

















