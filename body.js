'use strict';

const { eventPool } = require('./eventPool.js');
const driverPickupHandler = require('./driver/driver-pickup.js');
const driverDropoffHandler = require('./driver/driver-dropoff.js');
const eyeHandler = require('./vendor/vendor.js');
const pupilHandler = require('./handlePupils/handlePupils.js');

//add a listener for all events that logs a timestamp and the payload of every event
// alert system when vendor has package to be picked up
// alert driver when package ready for pick up
// alert system when driver has picked up package
//alert system when package was delivered
// notify vendor when package was delivered.


eventPool.on('pickup', driverPickupHandler);
eventPool.on('dropoff', driverDropoffHandler);
eventPool.on('in-transit', eyeHandler);
eventPool.on('delivered', pupilHandler);


setInterval(() => {
  const brightness = Math.floor(Math.random() * 100);
  eventPool.emit('SUNLIGHT', { brightness });
}, 3000);