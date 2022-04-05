'use strict';

const { eventPool } = require('./eventPool.js');


// list of clietns
function pickUp(){
  let time = Date.now();
  console.log('EVENT' :, { 
      event: 'pickup',
      'time': '2020-03-06T18:27:17.732Z',
      'payload': { 
        'store': '1-206-flowers',
        'orderID': 'e3669048-7313-427b-b6cc-74010ca1f8f0',
        'customer': 'Jamal Braun',
        'address': 'Schmittfort, LA'
      }
    }
  );
}

function laptop(payload){
  console.log('message received', payload);
}

eventPool.on('SEND_MESSAGE', laptop);

setInterval(() => {
  iPhone();
}, 3000);

