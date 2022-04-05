'use strict';

const handleBrain = require('../driver-pickup.js');
const { eventPool } = require('../eventPool.js');

//this is a built in jest method to test 
//provide path to module to mock
jest.mock('../eventPool.js', () => {
  return{
    on: jest.fn(),
    emit: jest.fn(),
  };
});

describe('TESTING THE BRAIN MODULE', () => {

  test('Emits BRIGHTNESS event', () => {
    handleBrain({brightness: 50});

    expect(eventPool.emit).toHaveBeenCalledWith('BRIGHTNESS', { brightness: 50 });
  });
});