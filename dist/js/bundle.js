"use strict";

angular.module("app", ["ui.router"]).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("home", {
        url: '/',
        templateUrl: "./views/home.html"
    }).state("artists", {
        url: '/artists',
        templateUrl: "./views/artists.html",
        controller: "artistsCtrl"
    }).state("albums", {
        url: '/albums',
        templateUrl: "./views/albums.html",
        controller: "albumsCtrl"
    }).state("search", {
        url: '/search',
        templateUrl: "./views/search.html"

    });
});
'use strict';

angular.module('app').controller('albumsCtrl', function ($scope, mainSvc) {
    $scope.data2 = mainSvc.data2[0].name;
});
'use strict';

angular.module('app').controller('artistsCtrl', function ($scope, mainSvc) {

    // $scope.artists = artistsSvc.artists

    $scope.data = mainSvc.data[0].name;
    console.log($scope.data);

    $scope.test = 'tesing';
});
"use strict";

angular.module("app").controller("mainCtrl", function ($scope, mainSvc) {

    $scope.data = mainSvc.data;
});

$(".cross").hide();
$(".menu").hide();
$(".hamburger").click(function () {
    $(".menu").slideToggle("slow", function () {
        $(".hamburger").hide();
        $(".cross").show();
    });
});

$(".cross").click(function () {
    $(".menu").slideToggle("slow", function () {
        $(".cross").hide();
        $(".hamburger").show();
    });
});

// $scope.getAlbums = mainSvc.getAlbums

// $scope.getArtists = mainSvc.getArtists

// $scope.getTracks = mainSvc.getTracks

// <--- end of controller
'use strict';

angular.module('app').service('artistsSvc', function ($http) {

	this.getArtist = function () {
		return $http({
			method: "GET",
			url: 'https://api.spotify.com/v1/artists/0oSGxfWSnnOXhD2fKuz2Gy/albums'
		});
	};
});
"use strict";

angular.module("app").service("mainSvc", function ($http) {

    var artists = [{
        name: ["The Killers", "Coldplay", "Billy Joel", "The Chainsmokers", "The Weeknd", "Drake", "Bruno Mars", "Shawn Mendes", "Ed Sheeran", "Maroon 5", "Big Sean", "Rihanna"]
    }];
    var albums = [{
        name: ["Sam's town", "Funneral", "Flamingo", "Still Want You", "Prolonging the Magic", "Don't Let Me Down", "A Head Full of Dreams", "Mylo Xyloto", "Parachutes", "X & Y", "Recovery", "Walking On A Dream"]
    }];

    this.data = artists;
    this.data2 = albums;

    // [
    //     {
    //         name: "The killers",
    //         albums: [
    //             {
    //                 name: "sams town",
    //                 songs: ["song name", "song name"]
    //             },
    //             {
    //                 name: "day and age",
    //                 songs: "fasd"
    //             }
    //         ]


    //     }
    // ]


    // this.data = artists;


    //  let getAlbums = function() {
    // 	 return $http({
    // 		 method: "GET",
    // 		 url: "https://api.spotify.com/v1/albums/?ids=41MnTivkwTO3UUJ8DrqEJJ,6JWc4iAiJ9FjyK0B59ABb4,6UXCm6bOO4gFlDQZV5yL37" 
    // 	 }).then(res => {
    // 	 	this.getAlbums = res.data;

    // 	 })
    //  }; // <--- you were missing a brace, which was
    // getAlbums();

    // 	let getArtist = () => {
    // 		return $http({
    // 			method: "GET",
    // 			url: 'https://api.spotify.com/v1/artists/0oSGxfWSnnOXhD2fKuz2Gy/albums'
    // 		}).then(res => {
    //             this.getArtist = res.data;
    //         })
    // 	};
    //     let getTracks = () => {
    //         return $http({
    //             method: "GET",
    //             url: "https://api.spotify.com/v1/albums/6akEvsycLGftJxYudPjmqK/tracks?limit=2"
    //         }).then(res => {
    //             this.getTracks = res.data
    //         })
    //     }


    // this.getAllData = () => {
    //     getArtist().then(function(artists){
    //         getTracks().then(function(tracks){
    //             getAlbums().then(function(albums){
    //             console.log(artists,tracks)
    //             })
    //         })
    //     })
    // }
    // getAllData();
});