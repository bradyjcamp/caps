'use strict';

const { eventPool, chance } = require('../eventPool.js');

let timestamp = Date.now();

module.exports = (payload) => {
  console.log(`EVENT: in-transit, ${timestamp} ${payload}`);
  console.log('DRIVER: delivered ', payload.orderID);
  eventPool.emit('delivered', payload);
};
