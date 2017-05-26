angular.module("app").service("mainSvc", function($http){
 
 this.getAlbums = function(){
     return $http({
         method: "GET",
         url:'https://api.spotify.com/v1/albums'
     }),
this.getArtist = function(){
    return $http({
        method: "GET",
        url:"https://api.spotify.com/v1/artists?ids=0oSGxfWSnnOXhD2fKuz2Gy,3dBVyJ7JuOMt4GE9607Qin"
    })
}


 }


});




