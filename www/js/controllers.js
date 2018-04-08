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

        var myloc = new google.maps.Marker({
          clickable: false,
          icon: new google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
                                                          new google.maps.Size(22,22),
                                                          new google.maps.Point(0,18),
                                                          new google.maps.Point(11,11)),
          shadow: null,
          zIndex: 999,
          map: map
      });
      
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(pos) {
          alert("yo");
          var me = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
          myloc.setPosition(me);
          map.setCenter(me);
        }, function(error) {
        });
      }

        var features = [{
            position: new google.maps.LatLng(-23.5632054, -46.656439),
            type: 'info',
            cardPosition: 0
        }, {
            position: new google.maps.LatLng(-23.5569532, -46.6611564),
            type: 'info',
            cardPosition: 1
        }, {
            position: new google.maps.LatLng(-23.5597883, -46.7303938),
            type: 'info',
            cardPosition: 2
        }];

        var node = document.getElementById('ev-scroll').children[0];
        var markers = features.map(function(feature) {
            var marker = new google.maps.Marker({
              position: feature.position,
              icon: 'https://s18.postimg.org/dn3av6ovt/lmss32.png',
              map: map
            });
            marker.addListener('click', function() {
                map.setCenter(marker.getPosition());
                node.style.transform = "translate3d(-" + feature.cardPosition * 215 + "px, 0px, 0px) scale(1)";
            });

            return marker;
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

  $scope.killModal = function() {
    $scope.modal.hide();
    $scope.modal.remove();
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
})

.controller('FeedCtrl', function($scope) {
});
