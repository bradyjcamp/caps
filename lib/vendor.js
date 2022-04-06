'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000/caps');
const Chance = require('chance');
const chance = new Chance();

function vendorPickup() {
  let payload = {
    store: chance.company(),
    orderID: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
  };
  return payload;
}

setInterval(() => {
  let payload = vendorPickup();
  socket.emit('PICKUP', payload);
}, 3000);

socket.on('DELIVERED', (payload) => {
  console.log('Thank you for delivering', payload.orderID);
  process.exit();
});
