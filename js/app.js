angular.module("app", ["ui.router"])
.config(function ($stateProvider, $urlRouterProvider){
  $stateProvider
  .state("home",{
      url:'/',
      templateUrl:"./views/home.html"
  })

.state("artists",{
      url:'/artists',
      templateUrl:"./views/artists.html",
      controller: "artistsCtrl"
  })

  .state("albums",{
      url:'/albums',
      templateUrl:"./views/albums.html",
      controller:"albumsCtrl"
  })

  .state("search",{
      url:'/search',
      templateUrl:"./views/search.html"

  })
  
  
});