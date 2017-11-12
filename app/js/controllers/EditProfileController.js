'use strict';

eventsApp.controller('EditProfileController', function($scope, gravatarUrlBuilder) {
  $scope.user = {};
  $scope.user.emailAddress = '';

  $scope.getGravatarUrl = function(email) {
    return gravatarUrlBuilder.buildGravatarUrl(email);
}
})