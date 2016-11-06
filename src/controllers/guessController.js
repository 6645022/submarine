

export default function guessCtrl($scope, socket){
	
	$scope.guessPlaces = function(id){
		console.log('running');
		console.log(id);
		socket.emit('guess', id);
	}

	socket.on('guessAnswer', (guessAnswer) => {

	});
}
