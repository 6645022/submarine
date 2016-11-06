
export default function pickCtrl($scope, socket){
	
	$scope.pickingPlaces = function(id){
		console.log('running');
		console.log(id);
		socket.emit('picking', id);
	}
}
