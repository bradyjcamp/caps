'use strict';

const io = require('socket.io-client');
const caps = io.connect('http://localhost:3000/caps');
const vendorId = '1-800-flowers';
const Chance = require('chance');
const chance = new Chance();

function vendorPickup() {
  let payload = {
    vendorId,
    // store: chance.company(),
    orderID: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
  };
  return payload;
}

caps.on('join', (roomId) => {
  console.log('You have joined the room: ', roomId);
});
caps.on('server-connect', ({id}) => console.log('You have joined the caps server! id: ', id));

caps.emit('join', { roomId: vendorId });

setInterval(() => {
  let payload = vendorPickup();
  caps.emit('PICKUP', payload);
}, 3000);


caps.on('DELIVERED', (payload) => {
  console.log('Thank you for delivering', payload.orderID);
  process.exit();
});
