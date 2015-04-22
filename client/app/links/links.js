angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function() {
  Links.linkGetter()
    .then(function(resp){
      $scope.data.links = resp;
    });

  };
  $scope.getLinks();
});
