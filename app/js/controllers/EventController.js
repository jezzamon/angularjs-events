'use strict';

eventsApp.controller('EventController', [
  '$scope', 
  'eventDataService', 
  '$routeParams', 
  '$log', 
  function ($scope, eventDataService, $routeParams, $log ) {
  var ctrl = this;

  $scope.sortOrder = 'name';
  
  $scope.event = eventDataService.getEvent($routeParams.eventId);

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

//if passing id and want to do something first inside the promise
// $resource return promise like object that contains a $promise method
  
// eventDataService.getEvent($routeParams.eventId)
  //   .$promise
  //     .then(function(event) {
  //       $scope.event = event; console.log(event); 
  //     })
  //     .catch(function(response) { console.log(response)
  //     });

 