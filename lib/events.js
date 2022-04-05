'use strict';

module.exports = (payload, event) => {
  let time = Date.now();
  console.log('EVENT', {
    event: event,
    time: time,
    payload,
  });
};