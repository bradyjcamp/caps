'use strict';

const { eventPool } = require('../eventPool.js');
const handlePupils = require('./handlePupils.js');

jest.mock('../eventPool.js', () => {
  return{
    on: jest.fn(),
    emit: jest.fn(),
  };
});

describe('Testing the pupil handler', () => {

  console.log = jest.fn();

  test('Should log "open" for open payload', () => {
    handlePupils('close');

    expect(console.log).toHaveBeenCalledWith('Dilation Updated!', 'close');
  })
})