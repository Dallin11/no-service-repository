"use strict";

angular.module("app", []);
"use strict";

angular.module("app").controller("mainCtrl", function ($scope, mainSvc) {

  // 	$scope.getAlbums = function(){
  // 		mainSvc.getAlbums().then(function(response){
  // 			$scope.albums = response.data;
  // 		});
  // 	};
  // $scope.getAlbums();

  $scope.getArtist = function () {
    mainSvc.getArtist().then(function (response) {
      $scope.artists = response.data.artists;
      console.log($scope.artists);
    });
  };

  $scope.getArtist(); //<-- you weren't invoking the function to actually get a response

  $scope.getTracks = function () {
    mainSvc.getTracks().then(function (response) {
      $scope.tracks = response.data.items;
      console.log($scope.tracks);
    });
  };
  $scope.getTracks();
}); // <--- end of controller
"use strict";

angular.module("app").service("mainSvc", function ($http) {

	// this.getAlbums = function() {
	//  return $http({
	// 	 method: "GET",
	// 	 url: 'https://api.spotify.com/v1/albums' //<--- this is a bad request
	//  }).then(res => {
	//  	return res.data;
	//  })
	// }; // <--- you were missing a brace, which was

	this.getArtist = function () {
		return $http({
			method: "GET",
			url: 'https://api.spotify.com/v1/artists?ids=0oSGxfWSnnOXhD2fKuz2Gy,3dBVyJ7JuOMt4GE9607Qin'
		});
	}, this.getTracks = function () {
		return $http({
			method: "GET",
			url: "https://api.spotify.com/v1/albums/6akEvsycLGftJxYudPjmqK/tracks?limit=2"
		});
	};
});