'use strict';

eventsApp.controller('EventController', ['$scope', 'eventDataService', '$log', function ($scope, eventDataService, $log ) {
  var ctrl = this;

  $scope.sortOrder = 'name';

  //if passing id
  // eventDataService.getEvent({{id: $routeParams.id}})
  eventDataService.getEvent()
  // $resource return promise like object that contains a $promise method
    .$promise
      .then(function(event) {
        $scope.event = event; console.log(event); 
      })
      .catch(function(response) { console.log(response)
      });

 

  $scope.upVoteSession = function (session) {
      session.upVoteCount++;
      console.log('clicked', session)
  }

  $scope.downVoteSession = function (session) {
      session.upVoteCount--;
  }

  $scope.scrollToSession = function() {
    $anchorScroll();
  }
}]);

 // $http eg
  // eventData.getEvent()
  //     .success(function(event) { $scope.event = event;})
  //     .error(function(data, status, headers, config) {
  //         $log.warn(data, status, headers(), config)
  //     });