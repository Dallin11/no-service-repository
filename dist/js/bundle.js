"use strict";

angular.module("app", ["ui.router"]).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("home", {
        url: '/',
        templateUrl: "./views/home.html"
    }).state("artists", {
        url: '/artists',
        templateUrl: "./views/artists.html"
    }).state("albums", {
        url: '/albums',
        templateUrl: "./views/about.html"
    }).state("search", {
        url: '/search',
        templateUrl: "./views/search.html"

    });
});
"use strict";

angular.module("app").controller("mainCtrl", function ($scope, mainSvc) {

    // $(".cross").hide();
    // $(".menu").hide();
    // $(".hamburger").click(function () {
    //     $(".menu").slideToggle("slow", function () {
    //         $(".hamburger").hide();
    //         $(".cross").show();
    //     });
    // });

    // $(".cross").click(function () {
    //     $(".menu").slideToggle("slow", function () {
    //         $(".cross").hide();
    //         $(".hamburger").show();
    //     });
    // });

    $scope.getAlbums = function () {
        mainSvc.getAlbums().then(function (response) {
            $scope.albums = response.data;
        });
    };
    $scope.getAlbums();

    $scope.getArtistsAndTracks = function () {
        mainSvc.getArtist().then(function (response) {
            $scope.artists = response.data.artists;
            console.log($scope.artists);
        });

        mainSvc.getTracks().then(function (response) {
            $scope.tracks = response.data.items;
            console.log($scope.tracks);
        });
    };
    $scope.getArtistsAndTracks();
}); // <--- end of controller
"use strict";

angular.module("app").service("mainSvc", function ($http) {

    var getAlbums = function getAlbums() {
        return $http({
            method: "GET",
            url: 'https://api.spotify.com/v1/albums/4OHNH3sDzIxnmUADXzv2kT,0aGwrXjKIfAMlj1vBYLtnR' //<--- this is a bad request
        }).then(function (res) {
            return res.data;
        });
    }; // <--- you were missing a brace, which was

    var getArtist = function getArtist() {
        return $http({
            method: "GET",
            url: 'https://api.spotify.com/v1/artists?ids=0oSGxfWSnnOXhD2fKuz2Gy,3dBVyJ7JuOMt4GE9607Qin3kjuyTCjPG1WMFCiyc5IuB,artist/0C0XlULifJtAgn6ZNCW2eu'
        });
    };
    var getTracks = function getTracks() {
        return $http({
            method: "GET",
            url: "https://api.spotify.com/v1/albums/6akEvsycLGftJxYudPjmqK/tracks?limit=2"
        });
    };

    var getSearch = function getSearch() {
        return $http({
            method: "GET",
            url: "https://api.spotify.com/v1/search"
        });
    };
    var getAllData = function getAllData() {
        getArtist().then(function (artists) {
            getTracks().then(function (tracks) {
                getAlbums().then(function (albums) {
                    console.log(artists, tracks);
                });
            });
        });
    };
    getAllData();
});