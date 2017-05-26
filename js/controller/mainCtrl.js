angular.module("app").controller("mainCtrl", function($scope, mainSvc){

$scope.getAlbums = function(){
mainSvc.albums().then(function(response){
   console.log(response);
    $scope.albums = response.data.albums;

});
};

$scope.getArtist = function(){
mainSvc.artist().then(function(response){
    console.log(response);
    $scope.artist = response.data.artist;
});
};


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

