import angular from 'angular';
import pickCtrl from './controllers/pickController';

angular.module('submurine', [])
.controller('pickCtrl', pickCtrl)
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