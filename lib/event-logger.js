'use strict';

module.exports = (event, payload) => {
  let time = new Date();
  console.log('EVENT', {
    event: event,
    time: time,
    payload,
  });
};