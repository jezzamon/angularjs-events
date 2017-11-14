'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource', 'ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/newEvent',
      {
        templateUrl: 'templates/NewEvent.html',
        controller: 'EditEventController'
      });
    $routeProvider.when('/events',
      {
        templateUrl: 'templates/EventList.html',
        controller: 'EventListController'
      });
    $routeProvider.when('/event/:eventId',
      {
        foo: 'bar', //set custom property
        templateUrl: 'templates/EventDetails.html',
        controller: 'EventController',
        resolve: {
          event: function( $route, eventDataService) {
            return eventDataService.getEvent($route.current.pathParams.eventId).$promise;
          }
        }
      });
      $routeProvider.when('/sampleDirective',
      {
        foo: 'bar', //set custom property
        templateUrl: 'templates/SampleDirective.html',
        controller: 'SampleDirectiveController'
      });
    $routeProvider.otherwise({redirectTo: '/events'});
    $locationProvider.html5Mode(true);

  });
