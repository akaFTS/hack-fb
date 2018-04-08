angular.module('starter.controllers', [])

.controller('EventsCtrl', function($scope, $ionicModal) {
    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: {lat: -23.5616153, lng: -46.6849476},
            gestureHandling: "greedy",
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false
        });

        var features = [{
            position: new google.maps.LatLng(-23.5632054, -46.656439),
            type: 'info'
        }, {
            position: new google.maps.LatLng(-23.5569532, -46.6611564),
            type: 'info'
        }, {
            position: new google.maps.LatLng(-23.5597883, -46.7303938),
            type: 'info'
        }];

        var markers = features.map(function(feature) {
            return new google.maps.Marker({
              position: feature.position,
              icon: 'https://s18.postimg.org/dn3av6ovt/lmss32.png',
              map: map
            });
        });

        // Add a marker clusterer to manage the markers.
        // var markerCluster = new MarkerClusterer(map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    }

    $scope.openModal = function() {
        $ionicModal.fromTemplateUrl('templates/event-view.html', {
          scope: $scope
        }).then(function(modal) {
          $scope.modal = modal;
          $scope.modal.show();
          initMap();
        });
    }
})

.controller('EventViewCtrl', function($scope, $ionicModal) {
  $scope.toggleSecondModal = function() {
    $scope.showModal = !$scope.showModal;
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
})

.controller('FeedCtrl', function($scope) {
});
