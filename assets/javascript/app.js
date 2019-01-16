
var quizContainer = document.getElementById("questions");

var myQuestions = [
	{
		question: "What nickname does Peter give himself?",
		answers: {
			a: 'Badass Pete',
			b: 'Peter the Great',
			c: 'Pistol Pete',
			d: 'Star Lord'
		},
		correctAnswer: 'd'
	},
	{
		question: "In the film, Peter Quill was raised by which group of thieves and smugglers?",
		answers: {
			a: 'The Ravagers',
			b: 'The Justice League',
			c: 'The Avengers',
			d: 'None of them'
		},
		correctAnswer: 'a'
    },
    {
		question: "Which prison are the gang taken to?",
		answers: {
			a: 'Star Prison',
			b: 'Big House',
			c: 'The Kyln',
			d: 'The Daeth Star'
		},
		correctAnswer: 'c'
    },
    {
		question: "Which planet does Ronan The Accuser attack at the end of the first movie?",
		answers: {
			a: 'Jupiter',
			b: 'Alderaan',
			c: 'Endor',
			d: 'Xandar'
		},
		correctAnswer: 'd'
	},	{
		question: "Groot is a Dutch word, meaning...",
		answers: {
			a: 'Tree',
			b: 'Small',
			c: 'Big',
			d: 'Wood'
		},
		correctAnswer: 'c'
    },
    {
		question: "Who in the mining colony, do they bring the orb to?",
		answers: {
			a: 'The Collector',
			b: 'The Banker',
			c: 'The Punisher',
			d: 'The Joker'
		},
		correctAnswer: 'a'
    },
    {
		question: "What is the name of Ronan's large ship?",
		answers: {
			a: 'The Pearl',
			b: 'The Death Aster',
			c: 'The Dark Aster',
			d: 'The Falcon'
		},
		correctAnswer: 'c'
    },
    {
		question: "After a medical scan, what does the Nova Prime tell Peter about himself?",
		answers: {
			a: 'The infinity stone has become a part of him',
			b: "He's only half human",
			c: 'He has two hearts',
			d: "He's related to Gamora"
		},
		correctAnswer: 'b'
	}
];

$(".btn").click(function () {
		$(".main-div").hide();
		$()
		startGame(myQuestions, quizContainer);
});



function startGame (myQuestions, quizContainer) {
	// we'll need a place to store the output and the answer choices
	var output = [];
	var answers;

	// for each question...
	for(var i=0; i < myQuestions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer...
		for(letter in myQuestions[i].answers){

			// ...add an html radio button
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






