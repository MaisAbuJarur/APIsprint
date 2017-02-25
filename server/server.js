//require express and mongoose here
//require your middleware and routes here
var express = require ('express');
var mongoose = require ('mongoose');

//=============================================================================
/*									Database								 */
//=============================================================================

	var app = express();
	require('./config/middleware.js')(app,express); //
	require('./config/routes.js')(app,express); //

	//here you will have to connect to your mongo database, 
	//set the port number and console log something so that 
	//you know that the mongodb is connected
	mongoose.connect('mongodb://localhost/apistrint');

	mongoose.connection.once('open',function () {
	console.log('mongoDB is open');
	});
	var Port = 3000;

//=============================================================================
/*									Server   								 */
//=============================================================================

//set express to listen to for requests or certain port


app.listen(Port, function () {
  console.log('APIsprint app listening on port 3000!')
});

module.exports= app//some thing;