'use strict';

const { io } = require('socket.io-client');
const caps = 'http://localhost:3000/caps'; //may need to change this to remove "io.connect" if Vendor Client is used
const Chance = require('chance');
const chance = new Chance();

class VendorClient {
  constructor(queueId){
    this.queueId = queueId;
    this.socket = io(caps);
    this.socket.emit('join', { queueId } );
    this.socket.on('join', (id) => {
      console.log('Joined Client Queue! : ', id);
    });
  }

  publish(event, payload) {
    this.socket.emit(event, { queueId: this.queueId, ...payload });
  }

  subscribe(event, cb) {
    this.socket.on(event, cb);
  }
}



function vendorPickup(vendorId) {
  let payload = {
    vendorId,
    // store: chance.company(),
    orderID: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
  };
  return payload;
}

// caps.on('join', (roomId) => {
//   console.log('You have joined the room: ', roomId);
// });
caps.on('server-connect', ({id}) => console.log('You have joined the caps server! id: ', id));

// caps.emit('join', { roomId: vendorId });

setInterval(() => {
  let payload = vendorPickup();
  caps.emit('PICKUP', payload);
}, 3000);


caps.on('DELIVERED', (payload) => {
  console.log('Thank you for delivering', payload.orderID);
  process.exit();
});
