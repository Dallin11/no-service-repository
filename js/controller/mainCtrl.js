angular.module("app").controller("mainCtrl", function($scope, mainSvc){

// 	$scope.getAlbums = function(){
// 		mainSvc.getAlbums().then(function(response){
// 			$scope.albums = response.data;
// 		});
// 	};
// $scope.getAlbums();

  $scope.getArtist = function(){
    mainSvc.getArtist().then(function(response){
      $scope.artists = response.data.artists;
      console.log($scope.artists)
    });
  };

  $scope.getArtist(); //<-- you weren't invoking the function to actually get a response

$scope.getTracks = function(){
    mainSvc.getTracks().then(function(response){
        $scope.tracks = response.data.items;
        console.log($scope.tracks)
    });
};
$scope.getTracks();

}); // <--- end of controller

