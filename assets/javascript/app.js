$("#start").on("click", function () {
    game.start();
})
// we need to create this because #end dosen't exist at the time the document is loaded.
$(document).on('click','#Done', function(){
    game.done();
})

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

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is up!");
            game.done();
        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $('#subheader').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            $("#subheader").append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subheader").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
        
        $('#button-position').append("<br><button id='Done'>Done</button>");
    },
    done: function () {
        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }

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

        this.result();
    },
    result: function () {
        clearInterval(timer);
        $("#subheader h2").remove();
        $("#button-position").remove();
        $("#subheader").html('<h2>Finished!</h2>');
        $("#subheader").append("<h3>Correct Answers: " + this.correct + "</h3>");
        $("#subheader").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        //This list's the questions that were left unanswered by saying: How many questions were there? If they weren't correct or incorrect then they must have not been answered.
        $("#subheader").append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }
}

















