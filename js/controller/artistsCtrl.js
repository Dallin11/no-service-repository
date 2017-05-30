angular.module('app').controller('artistsCtrl', function($scope, mainSvc) {

    // $scope.artists = artistsSvc.artists
   
 $scope.data = mainSvc.data[0].name;
 console.log($scope.data)

 $scope.test = 'tesing'


})
