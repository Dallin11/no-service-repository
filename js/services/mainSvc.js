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
			url: 'https://api.spotify.com/v1/artists?ids=0oSGxfWSnnOXhD2fKuz2Gy,3dBVyJ7JuOMt4GE9607Qin3kjuyTCjPG1WMFCiyc5IuB,artist/0C0XlULifJtAgn6ZNCW2eu'
		})
	}
    let getTracks = () => {
        return $http({
            method: "GET",
            url: "https://api.spotify.com/v1/albums/6akEvsycLGftJxYudPjmqK/tracks?limit=2"
        })
    }
    let getAllData = () => {
        getArtist().then(function(artists){
            getTracks().then(function(tracks){
                getAlbums().then(function(albums){
                console.log(artists,tracks,albums)
                })
            })
        })
    }
    getAllData();

});

