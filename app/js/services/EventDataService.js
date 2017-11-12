eventsApp.factory('eventDataService', function($resource) {
  var resource = $resource('/data/event/:id', {id: '@id'});

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
  
  return {
    getEvent: function() {
      return resource.get({id:1});
    },
    save: function(event) {
      event.id = 999;
      return resource.save(event);
    }
  }
})

// $http
// eventsApp.factory('eventData', function($http) {
//   return {
//     getEvent: function() {
//       return $http({ method: 'GET', url: '/data/event/1'});
//     }
//   }
// })
