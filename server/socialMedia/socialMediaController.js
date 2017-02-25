//require the model here
var socialMedia = require ('./socialMediaModel');

module.exports ={
	getAllSocialMedia : function (req, res) {
    	socialMedia.find().exec(function (err, result) {
			if(err){
				res.status(500).send('err');
			}else{
				res.status(200).send(result);
			}
		});
	},
	insertSocialMedia : function (req, res) {

			var data = req.body
			console.log (data)
			var temp=[]
		for(var i = 0; i<data.length; i++){
			var newsocialMedia = new socialMedia({title:data[i].title})
              temp.push(newsocialMedia)  
			newsocialMedia.save(function(err, newsocialMedia2){
                if(err){
                        res.status(500).send(err);
              	}
           	})
    	}
    		if(temp){    			
            res.json(temp)
    		}
},
    getByTitle : function (req, res) {

    	socialMedia.find({title:req.params.title}).exec(function (err, result) {
			if(err){
				res.status(500).send('err');
			}else{
				res.status(200).send(result);
			}
		});
	}
//you have to use the movie model to make a new database entry 
	
//you need to use params.id to find a movie from your database
		
}