'use strict';


const io = require('socket.io')(3000);
const caps = io.of('/caps');

//---io.on
caps.on('connection', socket => {
  
  console.log('Socket connected!!!', socket.id);
  

  socket.on('PICKUP', (payload) => {
    console.log('Hit PICKUP');
    caps.emit('PICKUP', payload);
  });

  socket.on('IN-TRANSIT', (payload) => {
    console.log('Hit IN-TRANSIT');
    caps.emit('IN-TRANSIT', payload);
  });

  socket.on('DELIVERED', (payload) => {
    console.log('Hit DELIVERED');
    caps.emit('DELIVERED', payload);
  });

  // socket.on('PICKUP', (payload) => eventHandler(payload, 'PICKUP'));
  // socket.on('PICKUP', driverPickupHandler);
  // socket.on('IN-TRANSIT', (payload) => eventHandler(payload, 'IN-TRANSIT') );
  // socket.on('DELIVERED', (payload) => eventHandler(payload, 'DELIVERED'));
  // socket.on('DELIVERED', vendorDelivered);
});

