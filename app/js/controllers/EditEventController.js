'use strict';

eventsApp.controller('EditEventController', function($scope, eventDataService) {
  
  $scope.event = {};
  $scope.event.name = '';
  
  $scope.saveEvent = function(event, newEventForm) {
    console.log(newEventForm);
    if (newEventForm.$valid)
      eventDataService.save(event)
        .$promise.then(
          function(response) {
            console.log('success', response);
          }
        ).catch(
          function(response) {
            console.log('error', response);
          }
        );
  }

  $scope.cancelEdit = function() {
    window.location = "/EventDetails.html";
  }
})