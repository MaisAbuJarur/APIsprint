var mongoose = require('mongoose');

var songSchema = new mongoose.Schema({
	title: String
	
	
});

var song = mongoose.model('song', songSchema);

module.exports = song; 