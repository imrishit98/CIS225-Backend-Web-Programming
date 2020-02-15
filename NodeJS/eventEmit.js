var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
    console.log('I hear a scream!');
}

var myCream = function () {
    console.log('I have cream!');
}

//Assign the eventhandler to an event:
eventEmitter.on('scream', myEventHandler);
eventEmitter.on('cream', myCream);

//Fire the 'scream' event:
eventEmitter.emit('scream');

eventEmitter.emit('cream');