'use strict';

const Events = require('events');
const Chance = require('chance');


const eventPool = new Events();
const chance = new Chance();

module.exports = {
  eventPool,
  chance,
};
