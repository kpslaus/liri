var request = require('request');
 
var twitter = require('twitter');

var client = new Twitter({
	consumer_key: "5c63Y0s0vFWZFvJkEApN3Kh1w",
	consumer_secret: "DxZ1gEP8gSboRC1Q5WSxbtvQwOu1TZAElY11nwMKuM6KSapghy",
	access_token_key: "503255000-5ffCTkVSMjBIw40oQT6hvoGRYty0jxhdCAJEW9yF",
	access_token_secret: "bEcIIiEf57gaYdVVLKyJihdhscA8Fat1vtV53oAmYGqur"
});

var params = {slausinator: 'nodejs'};
client.get("statuses/slausinator", params, function (error, tweets, response){
	if(!error){
		console.log(tweets);
	}
});

var spotify = require('spotify');

spotify.search({ type: "track", query: "My search query"}, function (err, data){
	if(err){
		console.log('Error occured: ' + err);
		return;
	}

})
