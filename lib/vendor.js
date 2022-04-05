'use strict';

const { eventPool, chance } = require('../eventPool.js');

module.exports = {
  vendorPickup: (payload) => {
    let newOrder = {
      store: payload,
      orderID: chance.string({ length: 25}),
      customer: chance.name(),
      address: chance.address(),
    };
    eventPool.emit('PICKUP', newOrder);
  },

  vendorDelivered: (payload) => {
    console.log('Thanks you for delivering', payload.orderID);
  },
};