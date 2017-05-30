angular.module('app').controller('albumsCtrl', function($scope, mainSvc) {
    $scope.data2 = mainSvc.data2[0].name;


})
