'use strict';

const { eventPool, chance } = require('./eventPool.js');
const driverPickupHandler = require('./lib/driver.js');
const { vendorPickup, vendorDelivered } = require('./lib/vendor.js');
const eventHandler = require('./lib/events.js');

//add a listener for all events that logs a timestamp and the payload of every event
// alert system when vendor has package to be picked up
// alert driver when package ready for pick up
// alert system when driver has picked up package
//alert system when package was delivered
// notify vendor when package was delivered.


eventPool.on('PICKUP', (payload) => eventHandler('PICKUP', payload));
eventPool.on('PICKUP', driverPickupHandler);
eventPool.on('IN-TRANSIT', (payload) => eventHandler('IN-TRANSIT', payload) );
eventPool.on('DELIVERED', (payload) => eventHandler('DELIVERED', payload));
eventPool.on('DELIVERED', vendorDelivered);


setInterval(() => {
  let newStore = chance.company();
  vendorPickup(newStore);
}, 3000);