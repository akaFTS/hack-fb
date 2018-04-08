angular.module('starter.services', [])

.directive('backImg', function() {
  return function(scope, element, attrs) {
      attrs.$observe('backImg', function(value) {
          element.css({
              'background-image': 'url(' + value + ')',
              'background-size': 'cover'
          });
      });
  };
})

.service("eventService", function($http, $q) {
    this.getEvents = function() {
        var deferred = $q.defer();
        $http.get("http://hackfb.us-west-2.elasticbeanstalk.com/events.json").then(function(data) {
            return deferred.resolve(data.data);
        });
        return deferred.promise;
    }

    this.getParticipants = function() {
        var deferred = $q.defer();
        $http.get("http://hackfb.us-west-2.elasticbeanstalk.com/events/1/confirmations.json").then(function(data) {
            return deferred.resolve(data.data);
        });
        return deferred.promise;        
    }

    this.getPlaces = function(id) {
        var deferred = $q.defer();
        $http.get("http://hackfb.us-west-2.elasticbeanstalk.com/events/"+id+"/places.json").then(function(data) {
            return deferred.resolve(data.data);
        });
        return deferred.promise;  
    }

    this.getPeople = function(place) {
        var deferred = $q.defer();
        $http.get("http://hackfb.us-west-2.elasticbeanstalk.com/places/"+place+"/confirmations.json").then(function(data) {
            return deferred.resolve(data.data);
        });
        return deferred.promise;          
    }

    this.getClusters = function(event) {
        var deferred = $q.defer();
        $http.get("http://hackfb.us-west-2.elasticbeanstalk.com/events/"+event+"/clusters.json").then(function(data) {
            return deferred.resolve(data.data);
        });
        return deferred.promise;          
    }
})