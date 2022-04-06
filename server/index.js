'use strict';


const io = require('socket.io')(3000);
const caps = io.of('/caps');
// const eventHandler = require('../lib/event-logger.js');


function eventHandler(event, payload){
  let time = new Date();
  console.log('EVENT', {
    event: event,
    time: time,
    payload,
  });
}

//---io.on
caps.on('connection', socket => {
  
  console.log('Socket connected!!!', socket.id);
  socket.emit('server-connect', { id: socket.id });

  // this is room joining
  socket.on('join', (payload) => {
    socket.join(payload.roomId);
    socket.emit('join', payload.roomId);
  });

  socket.on('PICKUP', (payload) => {
    eventHandler('PICKUP', payload);
    caps.emit('PICKUP', payload);
  });

  socket.on('IN-TRANSIT', (payload) => {
    eventHandler('IN-TRANSIT', payload);
    caps.to(payload.vendorId).emit('IN-TRANSIT', payload);
  });

  socket.on('DELIVERED', (payload) => {
    eventHandler('DELIVERED', payload);
    caps.to(payload.vendorId).emit('DELIVERED', payload);
  });

  // socket.on('PICKUP', (payload) => eventHandler(payload, 'PICKUP'));
  // socket.on('PICKUP', driverPickupHandler);
  // socket.on('IN-TRANSIT', (payload) => eventHandler(payload, 'IN-TRANSIT') );
  // socket.on('DELIVERED', (payload) => eventHandler(payload, 'DELIVERED'));
  // socket.on('DELIVERED', vendorDelivered);
});

