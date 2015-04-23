angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function(link){
    Links.linkSetter(link)
      .then(function(resp){
        $scope.link = resp;
      });
  };

});
