angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function(link){
    console.log("i've been clicked")
    Links.linkSetter(link)
      .then(function(resp){
        console.log("data sent to controller", resp);
        $scope.link = resp.data.url;
      });
  };

});
