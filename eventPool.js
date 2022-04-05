'use strict';

const EventEmitter = require('events');
const Chance = require('chance');


const eventPool = new EventEmitter();
const chance = new Chance();

module.exports = {
  eventPool,
  chance,
};
