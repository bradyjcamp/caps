'use strict';

const { eventPool } = require('../eventPool.js');


module.exports = (payload) => {
  console.log('DRIVER: picked up ', payload.orderID);
  eventPool.emit('IN-TRANSIT', payload);
  console.log('DRIVER: delivered ', payload.orderID);
  eventPool.emit('DELIVERED', payload);
};