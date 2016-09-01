app.controller('NewCardController', function($scope, NewCardFactory) {
	$scope.cleanCard = {
	    question: null,
	    category: null,
	    answers: [
	        { text: null, correct: false },
	        { text: null, correct: false },
	        { text: null, correct: false }
	    ]
	};

	$scope.newCard = {
	    question: null,
	    category: null,
	    answers: [
	        { text: null, correct: false },
	        { text: null, correct: false },
	        { text: null, correct: false }
	    ]
	};

	// $scope.categories = [
	// 	'SQL',
	// 	'Express',
	// 	'Angular',
	// 	'Node'
	// ];

	$scope.submitNewCard = NewCardFactory.submitNewCard;
	
})