angular.module("app").service("mainSvc", function($http){
 
 let getAlbums = function() {
	 return $http({
		 method: "GET",
		 url: 'https://api.spotify.com/v1/albums/4OHNH3sDzIxnmUADXzv2kT,0aGwrXjKIfAMlj1vBYLtnR' //<--- this is a bad request
	 }).then(res => {
	 	return res.data;
	 })
 }; // <--- you were missing a brace, which was

	let getArtist = () => {
		return $http({
			method: "GET",
			url: 'https://api.spotify.com/v1/artists/0oSGxfWSnnOXhD2fKuz2Gy/albums'
		})
	}
    let getTracks = () => {
        return $http({
            method: "GET",
            url: "https://api.spotify.com/v1/albums/6akEvsycLGftJxYudPjmqK/tracks?limit=2"
        })
    }

    let getSearch = () => {
        return $http({
            method: "GET",
            url: "https://api.spotify.com/v1/search"
        })
    }
    let getAllData = () => {
        getArtist().then(function(artists){
            getTracks().then(function(tracks){
                getAlbums().then(function(albums){
                console.log(artists,tracks)
                })
            })
        })
    }
    getAllData();

});

