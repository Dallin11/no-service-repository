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




