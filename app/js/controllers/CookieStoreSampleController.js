'use strict';

eventsApp.controller('CookieStoreSampleController',
  function($scope, $cookieStore) {
    $scope.event = {id: 1, name: 'My Event'};

    $scope.saveEventToCookie = function(event) {
      console.log('clicked')
      $cookieStore.put('event',event);
    };

    $scope.getEventFromCookie = function() {
      console.log($cookieStore.get('event'));
    }

    $scope.removeEventFromCookie = function() {
      $cookieStore.remove('event');
    }
  });