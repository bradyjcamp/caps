'use strict';


module.exports = (socket) => (payload) => {

  console.log('IN-TRANSIT', payload);
  
  socket.emit('DELIVERED', payload);
};