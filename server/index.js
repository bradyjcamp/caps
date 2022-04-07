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


caps.on('connection', socket => {
  
  console.log('Socket connected!!!', socket.id);
  socket.emit('server-connect', { id: socket.id });

 
  socket.on('join', ({ queueId }) => {
    socket.join(queueId);
    socket.emit('join', queueId);
  });

  socket.on('RECEIVED', (payload) => {
    caps.emit('RECEIVED', payload);
  });

  socket.on('GETALL', (payload) => {
    caps.emit('GETALL', payload);
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

});

