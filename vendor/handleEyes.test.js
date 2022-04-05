'use strict';

const { eventPool } = require('../eventPool.js');
const handleEyes = require('./vendor.js');

jest.mock('../eventPool.js', () => {
  return{
    on: jest.fn(),
    emit: jest.fn(),
  };
});

describe('TESTING handleEyes', () => {
  //this allows up to then test our console.logs
  console.log = jest.fn();

  test('should log mesage to console, and emit the DILATION close event ', () => {
    handleEyes({brightness: 51});

    expect(console.log).toHaveBeenCalledWith('Brightness changed!!:: ', { brightness: 51 })
    expect(eventPool.emit).toHaveBeenCalledWith('DILATION', 'close');
  });

  test('should log mesage to console, and emit the dilation open event ', () => {
    handleEyes({brightness: 49});

    expect(eventPool.emit).toHaveBeenCalledWith('DILATION', 'open');
  });
});
