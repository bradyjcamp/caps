'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000/caps');
const chance = require('./chance.js');
const handleReceived = require('./lib/delivery.js');
const vendorCB = require('./lib/vendor.js');
const vendorCBcurry = vendorCB(socket);
const driverCB = require('./lib/driver.js');
const driverCBcurry = driverCB(socket);



function vendorPickup() {
  let payload = {
    time: new Date,
    store: chance.company(),
    orderID: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
  };
  return payload;
}

socket.on('PICKUP', vendorCBcurry);
socket.on('IN-TRANSIT', driverCBcurry);
socket.on('DELIVERED', handleReceived);



setInterval(() => {
  let payload = vendorPickup();
  socket.emit('PICKUP', payload);
}, 3000);