// <flash-card>
app.directive('flashCard', function($log, FlashCardsFactory, ScoreFactory) {
	return {
		restrict: 'E',
		templateUrl: 'html/flash-card.html',
		scope: {
			isLoaded: '@'
		},
		link: function(scope, eleme, attrs) {
			// scope.isLoaded = false;

			FlashCardsFactory.getFlashCards()
			.then(function(flashCards) {
				scope.flashCards = flashCards;
				scope.isLoaded = true;
			})
			.catch($log.error);

			scope.answerQuestion = function (answer, flashCard) {
				if (!flashCard.answered) {
					flashCard.answered = true;
					flashCard.selectedAnswer = answer;
					flashCard.answeredCorrectly = answer.correct;
					if (flashCard.answeredCorrectly) ScoreFactory.correct++;
					if (!flashCard.answeredCorrectly) ScoreFactory.incorrect++;
				}
			};

			scope.categories = [
				'SQL',
				'Express',
				'Angular',
				'Node'
			];

			scope.getCategoryCards = function(category) {
				scope.isLoaded = false;
				scope.selectedCategory = category;
				FlashCardsFactory.getFlashCards(category)
				.then(function(flashCards) {
					scope.flashCards = flashCards;
					scope.isLoaded = true;
				})
				.catch($log.error);
			};
		}
	};
});