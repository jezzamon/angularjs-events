'use strict';

eventsApp.controller('MainMenuController', [
  '$scope',
  '$location',
  function ($scope, $location) {
    $scope.createEvent = function() {
      console.log('absUrl:', $location.absUrl());
      console.log('protocol', $location.protocol());
      console.log('port', $location.port());
      console.log('host', $location.host());
      console.log('path', $location.path());
      console.log('search', $location.search());
      console.log('hash', $location.hash());
      console.log('url', $location.url());

      $location.url('/newEvent');
    };
  }]);