'use strict';

angular.module('picViewerApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<main></main>'
      });
  });
