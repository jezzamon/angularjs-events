eventsApp.factory('eventDataService', [
  '$resource', 
  function($resource) {
  
  var resource = $resource('/data/event/:id', {id: '@id'});

  return {
    getEvent: function(eventId) {
      return resource.get({ id: eventId });
    },
    save: function(event) {
      event.id = 999;
      return resource.save(event);
    },
    getAllEvents: function() {
      return resource.query();
    }
  }
}]);

// $http
// eventsApp.factory('eventData', function($http) {
//   return {
//     getEvent: function() {
//       return $http({ method: 'GET', url: '/data/event/1'});
//     }
//   }
// })

  //resource with custom method (ie. PUT, or passing params for logins etc)
  // var resource = $resource(
  //   '/data/event/:id', 
  //   {id: '@id'},
  //   { "Update": {
  //       method: 'PUT', 
  //       isArray: true, 
  //       params: { secret: 'foo'}
  //     } 
  //   }
  // );
