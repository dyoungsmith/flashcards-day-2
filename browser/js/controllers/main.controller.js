app.controller('MainController', function ($scope, $log, FlashCardsFactory, ScoreFactory) {
	FlashCardsFactory.getFlashCards()
	.then(function(flashCards) {
		$scope.flashCards = flashCards;
	})
	.catch($log.error);

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.selectedAnswer = answer;
			flashCard.answeredCorrectly = answer.correct;
			if (flashCard.answeredCorrectly) ScoreFactory.correct++;
			if (!flashCard.answeredCorrectly) ScoreFactory.incorrect++;
		}
	};

	$scope.categories = [
		'SQL',
		'Express',
		'Angular',
		'Node'
	];

	$scope.getCategoryCards = function(category) {
		$scope.selectedCategory = category;
		FlashCardsFactory.getFlashCards(category)
		.then(function(flashCards) {
			$scope.flashCards = flashCards;
		})
		.catch($log.error);
	};

});


