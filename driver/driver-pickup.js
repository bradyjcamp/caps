'use strict';

const { eventPool, chance } = require('../eventPool.js');


module.exports = (payload) => {
  console.log('EVENT: pickup ', payload);
  console.log('DRIVER: picked up ', payload.orderID);
  eventPool.emit('in-transit', payload);
};



