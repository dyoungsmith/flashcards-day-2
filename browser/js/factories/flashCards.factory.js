app.factory('FlashCardsFactory', function($http, $log) {
  var obj = {};

  obj.getFlashCards = function(category) {
    var queryParams = {};
    if (category) {
        queryParams.category = category;
    }
    return $http.get('/api/cards', {
        params: queryParams
    })
    .then(function (response) {
        // send a message back here for loaded content/loader???
        return response.data;
    })
    .catch($log.error);
  };

  return obj;
});