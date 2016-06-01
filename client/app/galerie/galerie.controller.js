'use strict';

(function() {

class GalerieController {

  constructor($http) {
    this.$http = $http;
    this.imageList = [];
  }

  $onInit() {
    this.$http.get('/api/things').then(response => {
      this.imageList = response.data;
    });
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('picViewerApp')
  .component('galerie', {
    templateUrl: 'app/galerie/galerie.html',
    controller: GalerieController
  });

})();
