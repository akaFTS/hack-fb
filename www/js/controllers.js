angular.module('starter.controllers', [])

.controller('EventsCtrl', function($scope, $ionicModal) {
  $scope.openModal = function() {
    $ionicModal.fromTemplateUrl('templates/event-view.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
    });
  }
})

.controller('EventViewCtrl', function($scope, $ionicModal) {
  
})

.controller('ChatsCtrl', function($scope, Chats) {
})

.controller('FeedCtrl', function($scope) {
});
