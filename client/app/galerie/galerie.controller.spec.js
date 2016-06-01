'use strict';

describe('Component: galerieComponent', function() {

  // load the controller's module
  beforeEach(module('picViewerApp'));

  var scope;
  var galerieComponent;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(
    _$httpBackend_,
    $http,
    $componentController,
    $rootScope) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/api/things')
        .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

      scope = $rootScope.$new();
      galerieComponent = $componentController('galerie', {
        $http: $http,
        $scope: scope
      });
  }));

  it('should attach a list of things to the controller', function() {
    mainComponent.$onInit();
    $httpBackend.flush();
    expect(mainComponent.awesomeThings.length).toBe(4);
  });
});
