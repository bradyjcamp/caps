'use strict';

const io = require('socket.io-client');
const caps = io.connect('http://localhost:3000/caps');


caps.on('join', (roomId) => {
  console.log('You have joined the room: ', roomId);
});

caps.on('server-connect', ({id}) => console.log('You have joined the caps server! id: ', id));


caps.on('PICKUP', (payload) => {
  caps.emit('join', { roomId: payload.vendorId });
  console.log('DRIVER: picked up', payload.orderID);

  caps.emit('IN-TRANSIT', payload);

  setTimeout(() =>{
    console.log('DRIVER: delivered', payload.orderID);
    caps.emit('DELIVERED', payload);
  }, 2000);
});
