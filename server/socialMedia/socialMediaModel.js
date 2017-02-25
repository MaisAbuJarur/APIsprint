//implement model here

var mongoose = require('mongoose');

var socialMediaSchema = new mongoose.Schema({
	title: String
	
	
});

var socialMedia = mongoose.model('socialMedia', socialMediaSchema);

module.exports = socialMedia; 