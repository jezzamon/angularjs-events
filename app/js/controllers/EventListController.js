
eventsApp.controller('EventListController', 
  function ($scope, $location, eventDataService) {
    $scope.events = eventDataService.getAllEvents();
  });
