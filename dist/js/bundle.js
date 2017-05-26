"use strict";

angular.module("app", []);
"use strict";

angular.module("app").controller("mainCtrl", function ($scope, mainSvc) {

    $scope.getAlbums = function () {
        mainSvc.albums().then(function (response) {
            console.log(response);
            $scope.albums = response.albums;
        });
    };

    // $scope.getArtist = function(){
    // mainSvc.artist().then(function(response){
    //     console.log(response);
    //     $scope.artist = response.artist;
    // });
    // };

}); // <--- end of controller


// angular.module('apiApp').controller('question4Ctrl', function ($scope, question4Service){

//   $scope.getRequest = function(){
//     question4Service.request().then(function(responseAPI){
//       console.log(responseAPI);
//       $scope.stuff = responseAPI.data.name;
//       $scope.stuff1 = responseAPI.data.birth_year;
//       $scope.stuff2 = responseAPI.data.eye_color;
//       $scope.stuff3 = responseAPI.data.gender;
//       $scope.stuff4 = responseAPI.data.hair_color;
//     });
//   };
// });


// angular.module('apiApp').service('question4Service', function($http){
//   this.request = function(){
//     return $http({
//       method: 'GET',
//       url: 'http://swapi.co/api/people/1/'
//     });
//   };
// });
"use strict";

angular.module("app").service("mainSvc", function ($http) {

    this.getAlbums = function () {
        return $http({
            method: "GET",
            url: 'https://api.spotify.com/v1/albums/?ids=41MnTivkwTO3UUJ8DrqEJJ,6JWc4iAiJ9FjyK0B59ABb4,6UXCm6bOO4gFlDQZV5yL37'
        }), this.getArtist = function () {
            return $http({
                method: "GET",
                url: "https://api.spotify.com/v1/artists?ids=0oSGxfWSnnOXhD2fKuz2Gy,3dBVyJ7JuOMt4GE9607Qin"
            });
        };
    };
});