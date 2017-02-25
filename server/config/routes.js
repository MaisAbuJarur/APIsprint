//you need to require some files here
var songController = require('../song/songController')
var socialMediaController = require('../socialMedia/socialMediaController')

module.exports = function (app, express) {

//=============================================================================
/*								movie route									 */
//=============================================================================
	app.post('/api/song/insert', songController.insertSong);
	app.get('/api/song/getAll', songController.getAll);
	app.get('/api/song/:title', songController.getByTitle);
	//here you have to add two more routes
	
//=============================================================================
/*								book route									 */
//=============================================================================
	app.post('/api/socials/insert', socialMediaController.insertSocialMedia);
	app.get('/api/socials/getAll', socialMediaController.getAllSocialMedia);
	app.get('/api/socials/:title', socialMediaController.getByTitle);
	//here you have to add two more routes

};

