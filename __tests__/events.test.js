'use strict';

const eventPool = require('../eventPool.js');
const eventHandler = require('../lib/delivery.js');

jest.spyOn(console, 'log');

describe('TESTING EVENTHANDLER', () => {

  test('Should log event names and payload', () => {
    let event = 'PICKUP';
    let payload = {
      store: 'Wal-Mart',
      orderID: 'test1',
      customer: 'Brady Camp',
      address: '123 ave',
    };
    let time = new Date();

    eventHandler(payload, event);

    expect(console.log).toHaveBeenCalledWith('EVENT', {
      event: event,
      time: time,
      payload: payload,
    });

  });
});
