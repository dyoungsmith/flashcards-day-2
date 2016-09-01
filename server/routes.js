var express = require('express');
var router = express.Router();
var FlashCard = require('./db/models/flash-card.js');


router.post('/cards', function(req, res, next) {
	FlashCard.create(req.body)
	.then(function(newFlashCard) {
		console.log('flashcard has been made by server', newFlashCard);
		res.send(newFlashCard);
	})
	.catch(next);
});


module.exports = router;