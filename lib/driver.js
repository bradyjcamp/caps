'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000/caps');

socket.on('PICKUP', payload => {
  console.log('DRIVER: picked up', payload.orderID);
  socket.emit('IN-TRANSIT', payload);
  console.log('DRIVER: delivered', payload.orderID);
  socket.emit('DELIVERED', payload);
});
