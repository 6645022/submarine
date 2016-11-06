import io from 'socket.io-client';
const socket = io();

export default function socketFactory(){
	return {
		on: (event, callback) => {
			socket.on(event, callback);
		},
		emit: (event, msg) => {
			socket.emit(event, msg);
		}
	}
}