import angular from 'angular';
import pickCtrl from './controllers/pickController';
import guessCtrl from './controllers/guessController';
import tdDirective from './directives/tdDirective';
import socketFactory from './services/socketfactory';

angular.module('submurine', [])
.factory('socket', socketFactory)
.controller('pickCtrl', pickCtrl)
.controller('guessCtrl', guessCtrl)
.directive('tdDirective', tdDirective)
.controller('mainCtrl', ['$scope', function($scope){
	$scope.tab = null;
	$scope.setCurrentTab = function(tabName){
		$scope.tab = tabName;
		console.log($scope.tab);
	}

	$scope.getCurrentTab = function(tabName){
		return $scope.tab == tabName;
	}
}]);