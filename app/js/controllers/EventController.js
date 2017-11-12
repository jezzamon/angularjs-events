'use strict';

eventsApp.controller('EventController', ['$scope', 'eventDataService', '$log', function ($scope, eventDataService, $log ) {
  var ctrl = this;

  $scope.sortOrder = 'name';


  // $resource return promise like object that contains a $promise method
  eventDataService.getEvent()
    .$promise
      .then(function(event) {
        $scope.event = event; console.log(event); 
      })
      .catch(function(response) { console.log(response)
      });

  // $http
  // eventData.getEvent()
  //     .success(function(event) { $scope.event = event;})
  //     .error(function(data, status, headers, config) {
  //         $log.warn(data, status, headers(), config)
  //     });

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