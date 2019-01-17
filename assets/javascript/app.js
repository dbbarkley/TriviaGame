
var quizContainer = document.getElementById("questions");
var resultsContainer = document.getElementById("results");

var myQuestions = [
	{
		question: "What nickname does Peter give himself?",
		answers: {
			a: 'Badass Pete',
			b: 'Peter the Great',
			c: 'Pistol Pete',
			d: 'Star Lord'
		},
	},
	{
		question: "In the film, Peter Quill was raised by which group of thieves and smugglers?",
		answers: {
			a: 'The Ravagers',
			b: 'The Justice League',
			c: 'The Avengers',
			d: 'None of them'
		},
    },
    {
		question: "Which prison are the gang taken to?",
		answers: {
			a: 'Star Prison',
			b: 'Big House',
			c: 'The Kyln',
			d: 'The Daeth Star'
		},
    },
    {
		question: "Which planet does Ronan The Accuser attack at the end of the first movie?",
		answers: {
			a: 'Jupiter',
			b: 'Alderaan',
			c: 'Endor',
			d: 'Xandar'
		},
	},	{
		question: "Groot is a Dutch word, meaning...",
		answers: {
			a: 'Tree',
			b: 'Small',
			c: 'Big',
			d: 'Wood'
		},
    },
    {
		question: "Who in the mining colony, do they bring the orb to?",
		answers: {
			a: 'The Collector',
			b: 'The Banker',
			c: 'The Punisher',
			d: 'The Joker'
		},
    },
    {
		question: "What is the name of Ronan's large ship?",
		answers: {
			a: 'The Pearl',
			b: 'The Death Aster',
			c: 'The Dark Aster',
			d: 'The Falcon'
		},
    },
    {
		question: "After a medical scan, what does the Nova Prime tell Peter about himself?",
		answers: {
			a: 'The infinity stone has become a part of him',
			b: "He's only half human",
			c: 'He has two hearts',
			d: "He's related to Gamora"
		},
	}
];

$(".btn").click(function () {
		$(".main-div").hide();
		startGame(myQuestions, quizContainer);
		run();
});
// Timer functions ===================================================================
var timer = 20;
var intervalId;

function run() {
	clearInterval(intervalId);
	intervalId = setInterval(decrement, 1000);
}
	
function decrement() {
	timer--;
	//  Show the number
	$("#show-timer").html("<h2>Time remaining: " + timer + "</h2>");
		if (timer === 0) {
			stop();
		}
}
	
function stop() {
	clearInterval(intervalId);
		$("#show-timer").hide();
		$("#questions").hide();
	showResults();
}

// Main game function.
function startGame () {	
// Generate questions ================================================================

	// Store output and the answer choices
	var output = [];
	var answers;

	// for each question...
	for(var i=0; i < myQuestions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer...
		for(letter in myQuestions[i].answers){

			// add an html radio button
			answers.push( 
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ myQuestions[i].answers[letter]
				+'</label>' + "<br>" 
			);
		}

		// add this question and its answers to the output
		output.push(
			"<hr>" +
			'<div class="question">' + myQuestions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}
	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
}


// Show results function =============================================================

function showResults () {
		// gather answer containers from our quiz
		//$("#results").append("<h3>Incorrect answers: 0</h3>");
		//var answerContainers = myQuestions.answers;
		var numCorrect = 0;
		var numIncorrect = 0;
		var numUnanswered = 0;

		var total = 8;
		var userAnswers = [
		$("input[name=question0]:checked").val(),
		$("input[name=question1]:checked").val(),
		$("input[name=question2]:checked").val(),
		$("input[name=question3]:checked").val(),
		$("input[name=question4]:checked").val(),
		$("input[name=question5]:checked").val(),
		$("input[name=question6]:checked").val(),
		$("input[name=question7]:checked").val(),
		];
		
		console.log(userAnswers);

		var answers = ["d", "a", "c", "d", "c", "a", "c", "b"]
		console.log(answers);
		for(var i = 0; i < total; i++) {

			if (userAnswers[i] === answers[i]) {
				numCorrect++;
				$("#results").html("<h3>Correct answers: "+numCorrect+"</h3>");
			}/*else if(userAnswers[i] !== answers[i]) {
					numIncorrect++;
					$("#results").html("<h3>Correct answers: "+numIncorrect+"</h3>");
				}*/
			}

		}