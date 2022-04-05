'use strict';

const { eventPool, chance } = require('../eventPool.js');

//payload refers to all things the client will be receiving
module.exports = (payload) => {
  console.log('VENDOR: Thank you for deliverying item ', payload.orderID);
  console.log('EVENT: delivered', payload);
  }
};