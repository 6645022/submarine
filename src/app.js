import angular from 'angular';

angular.module('submurine', [])
.controller('mainCtrl', ['$scope', function($scope){
	$scope.first = 'submarine';
}]);