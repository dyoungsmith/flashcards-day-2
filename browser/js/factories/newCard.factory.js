app.factory('NewCardFactory', function($http, $log) {
	var obj = {};

	obj.submitNewCard = function(cardToSubmit) {
		return $http.post('/cards', cardToSubmit)
		.then(function(response) {
			console.log('flashcard response', response);
			return response.data;
		})
		.catch($log.error);
	};

	return obj;
});