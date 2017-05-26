angular.module("app").service("mainSvc", function($http){
 
 // this.getAlbums = function() {
	//  return $http({
	// 	 method: "GET",
	// 	 url: 'https://api.spotify.com/v1/albums' //<--- this is a bad request
	//  }).then(res => {
	//  	return res.data;
	//  })
 // }; // <--- you were missing a brace, which was

	this.getArtist = () => {
		return $http({
			method: "GET",
			url: 'https://api.spotify.com/v1/artists?ids=0oSGxfWSnnOXhD2fKuz2Gy,3dBVyJ7JuOMt4GE9607Qin'
		})
	},
    this.getTracks = () => {
        return $http({
            method: "GET",
            url: "https://api.spotify.com/v1/albums/6akEvsycLGftJxYudPjmqK/tracks?limit=2"
        })
    }
});

