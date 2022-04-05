'use strict';

const driverPickupHandler = require('../lib/driver.js');
const { eventPool } = require('../eventPool.js');

//this is a built in jest method to test 
//provide path to module to mock
jest.mock('../eventPool.js', () => {
  return{
    on: jest.fn(),
    emit: jest.fn(),
  };
});

describe('TESTING DRIVER', () => {

  test('Should log deliveries and pickups as well as emit in-transit and delivered events', () => {
    let test = { orderID: 123456};
    
    driverPickupHandler(test);

    // expect(eventPool.emit).toHaveBeenCalledWith('BRIGHTNESS', { brightness: 50 });
  });
});