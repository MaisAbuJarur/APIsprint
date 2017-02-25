//require files here
var song = require('./songModel');


module.exports ={
	insertSong : function (req, res) {
			

			var newSong = new song ({
				title: req.body.title
			})
			newSong.save(function(err, newSong){
                if(err){
                        res.status(500).send(err);
                }else{
                    res.json(newSong)
                };
            });
       
    },
    getAll : function (req, res) {
    	song.find().exec(function (err, result) {
			if(err){
				res.status(500).send('err');
			}else{
				res.status(200).send(result);
			}
		});
	},

	getByTitle : function (req, res) {

			console.log(req.params.title)
    	song.find({title:req.params.title}).exec(function (err, result) {
			if(err){
				res.status(500).send('err');
			}else{
				res.status(200).send(result);
			}
		});
	}
}



	//you have to use the books model to make a new database entry 
	
	//you need to use params.id to find a books from your database

