angular.module('app').service('artistsSvc', function($http) {

	this.getArtist = () => {
		return $http({
			method: "GET",
			url: 'https://api.spotify.com/v1/artists/0oSGxfWSnnOXhD2fKuz2Gy/albums'
		})
	}
});