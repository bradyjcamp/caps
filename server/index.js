'use strict';


const io = require('socket.io')(3000);
const caps = io.of('/caps');
const eventHandler = require('../lib/event-logger.js');

//---io.on
caps.on('connection', socket => {
  
  console.log('Socket connected!!!', socket.id);
  

  socket.on('PICKUP', (payload) => {
    eventHandler('PICKUP', payload);
    caps.emit('PICKUP', payload);
  });

  socket.on('IN-TRANSIT', (payload) => {
    eventHandler('IN-TRANSIT', payload);
    caps.emit('IN-TRANSIT', payload);
  });

  socket.on('DELIVERED', (payload) => {
    eventHandler('DELIVERED', payload);
    caps.emit('DELIVERED', payload);
  });

  // socket.on('PICKUP', (payload) => eventHandler(payload, 'PICKUP'));
  // socket.on('PICKUP', driverPickupHandler);
  // socket.on('IN-TRANSIT', (payload) => eventHandler(payload, 'IN-TRANSIT') );
  // socket.on('DELIVERED', (payload) => eventHandler(payload, 'DELIVERED'));
  // socket.on('DELIVERED', vendorDelivered);
});

