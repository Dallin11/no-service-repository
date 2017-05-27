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

    	$scope.getAlbums = function(){
    		mainSvc.getAlbums().then(function(response){
    			$scope.albums = response.data;
    		});
    	};
    $scope.getAlbums();

    $scope.getArtistsAndTracks = function(){
        mainSvc.getArtist().then(function(response){
          $scope.artists = response.data.artists;
          console.log($scope.artists)
        });

        mainSvc.getTracks().then(function(response){
            $scope.tracks = response.data.items;
            console.log($scope.tracks)
        });
    };
    $scope.getArtistsAndTracks();

}); // <--- end of controller

