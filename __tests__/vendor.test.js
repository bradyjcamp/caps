'use strict';

// const driverPickupHandler = require('../lib/driver.js');
const { vendorPickup, vendorDelivered } = require('../lib/vendor.js');
// const eventHandler = require('../lib/events.js');
const eventPool = require('../eventPool.js');

//this is a built in jest method to test 
//provide path to module to mock
jest.mock('../eventPool.js', () => {
  return{
    on: jest.fn(),
    emit: jest.fn(),
  };
});

describe('TESTING VENDOR', () => {

  test('Should publish a pickup', () => {
    let testStore = 'Chucky Cheese';
    vendorPickup(testStore);

    expect(eventPool.emit).toHaveBeenCalledWith('PICKUP', expect.objectContaining({ store: 'Chucky Cheese' }));
  });

  jest.spyOn(console, 'log');

  test('Vendor should say thanks to customer after delivery', () => {
    let payload ={ customer: 'test customer'};
    vendorDelivered(payload);

    expect(console.log).toHaveBeenCalledWith('Thank you', payload.customer);
  });
});