export default function tdDirective(socket){
	return{
		restrict: 'A',
		scope: {pickingGuessing: '&'},
		link: function(scope, element, attr){
			element.bind('click', (e) => {
				const { id } = e.target;
				element[0].style.background = 'black';
				scope.pickingGuessing({id});
			});

			socket.on('isSubmarine', (id) => {
				console.log('something is working', id);
				if(element[0].id === id){
					element[0].style.background = 'red';
				}
			});
			
		}
	}
}