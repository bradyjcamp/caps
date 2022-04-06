'use strict';


module.exports = (socket) => (payload) => {
  console.log('PICKUP', payload);
  socket.emit('IN-TRANSIT', payload);
};
