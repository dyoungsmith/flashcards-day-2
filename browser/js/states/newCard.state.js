app.config(function($stateProvider) {
	$stateProvider.state('newCard', {
		url: '/create',
		templateUrl: 'html/new-card.html',
		controller: 'NewCardController'
	})
})