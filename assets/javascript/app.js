// For generating the questions
var quizContainer = document.getElementById("questions");
// Array of my questions
var myQuestions = [
	{
		question: "What nickname does Peter give himself?",
		possibleAnswers: {
			a: 'Badass Pete',
			b: 'Peter the Great',
			c: 'Pistol Pete',
			d: 'Star Lord'
		},
	},
	{
		question: "In the film, Peter Quill was raised by which group of thieves and smugglers?",
		possibleAnswers: {
			a: 'The Ravagers',
			b: 'The Justice League',
			c: 'The Avengers',
			d: 'None of them'
		},
    },
    {
		question: "Which prison are the gang taken to?",
		possibleAnswers: {
			a: 'Star Prison',
			b: 'Big House',
			c: 'The Kyln',
			d: 'The Daeth Star'
		},
    },
    {
		question: "Which planet does Ronan The Accuser attack at the end of the first movie?",
		possibleAnswers: {
			a: 'Jupiter',
			b: 'Alderaan',
			c: 'Endor',
			d: 'Xandar'
		},
	},	
	{
		question: "Groot is a Dutch word, meaning...",
		possibleAnswers: {
			a: 'Tree',
			b: 'Small',
			c: 'Big',
			d: 'Wood'
		},
    },
    {
		question: "Who in the mining colony, do they bring the orb to?",
		possibleAnswers: {
			a: 'The Collector',
			b: 'The Banker',
			c: 'The Punisher',
			d: 'The Joker'
		},
    },
    {
		question: "What is the name of Ronan's large ship?",
		possibleAnswers: {
			a: 'The Pearl',
			b: 'The Death Aster',
			c: 'The Dark Aster',
			d: 'The Falcon'
		},
    },
    {
		question: "After a medical scan, what does the Nova Prime tell Peter about himself?",
		possibleAnswers: {
			a: 'The infinity stone has become a part of him',
			b: "He's only half human",
			c: 'He has two hearts',
			d: "He's related to Gamora"
		},
	}
];

// Timer functions ===================================================================
var timer = 45;
var intervalId;

function runTimer () {
	$("#show-timer").html("<h2>Time remaining: " + timer + " Seconds</h2>");
	clearInterval(intervalId);
	intervalId = setInterval(decrement, 1000);
};
function decrement () {
	timer--;
	$("#show-timer").html("<h2>Time remaining: " + timer + " Seconds</h2>");
		if (timer === 0) {
			stop();
		}
};
function stop () {
	clearInterval(intervalId);
		$("#show-timer").hide();
		$("#questions").hide();
		showResults();
};
// Generate questions ================================================================
function startGame () {	
	var output = [];
	var possibleAnswers;

	// for each question
	for(var i=0; i < myQuestions.length; i++){
		// reset the list of possibleAnswers
		possibleAnswers = [];
		// for each available answer
		for(letter in myQuestions[i].possibleAnswers){
			// add an html radio button
			possibleAnswers.push( 
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ myQuestions[i].possibleAnswers[letter]
				+'</label>' + "<br>" 
			);
		}
		// add this question and its possibleAnswers to the output
		output.push(
			"<hr>" +
			'<div class="question">' + myQuestions[i].question + '</div>'
			+ '<div class="possibleAnswers">' + possibleAnswers.join('') + '</div>' 	
		);
	}
	// combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
	// Add 'done' button
	var btn = $('<button type="button">Done</button>').addClass("btn btn-info btn-lg done");
	$("#questions").append(btn);
};
// Show results function =============================================================
function showResults () {
	// Remove hidden class to show 'results'
	$("#results").removeClass("hidden");
	// Set all scores to 0
	var numCorrect = 0;
	var numIncorrect = 0;
	var numUnanswered = 0;
	// Correct answers
	var answers = ["d", "a", "c", "d", "c", "a", "c", "b"]
	// I know that this is too wet. I couldn't get the dry way to work, ran out of time so I did what works.
	var userpossibleAnswers = [
	$("input[name=question0]:checked").val(),
	$("input[name=question1]:checked").val(),
	$("input[name=question2]:checked").val(),
	$("input[name=question3]:checked").val(),
	$("input[name=question4]:checked").val(),
	$("input[name=question5]:checked").val(),
	$("input[name=question6]:checked").val(),
	$("input[name=question7]:checked").val(),
	];

	for(var i = 0; i < 8; i++) {

		if (userpossibleAnswers[i] === answers[i]) {
			numCorrect++;
			$("#correct").html("<h3>Correct possibleAnswers: "+numCorrect+"</h3>");
		} 		else if (userpossibleAnswers[i] === undefined){
			  		numUnanswered++;
					$("#unanswered").html("<h3>Unanswered: "+numUnanswered+"</h3>");
				}		else if (userpossibleAnswers[i] !== answers[i]) {
							numIncorrect++;
							$("#incorrect").html("<h3>Incorrect possibleAnswers: "+numIncorrect+"</h3>");
						};
	};
};
// Click events =====================================================================
$(".start-game").click(function () {
	$(".main-div").hide();
	$("#questions").show();
	runTimer();
	startGame();
});

$(document).on("click", ".done", function () {
	$("#show-timer").hide();
	$("#questions").hide();
	stop();
});