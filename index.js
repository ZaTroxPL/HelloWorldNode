console.log("hello world");

//

console.log(global.luckyNumber);

global.luckyNumber = 23;

console.log(global.luckyNumber);

//

console.log(process.platform);

//

const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {
    console.log('pizza')
})

eventEmitter.emit('lunch');
eventEmitter.emit('lunch');

//
/*
const { readFile, readFileSync } = require('fs');

const txt = readFileSync('./hello.txt', 'utf-8')

console.log(txt)

console.log('do this ASAP')

//

readFile('./hello.txt', 'utf8', (err, txt) => {
    console.log(txt)
});

console.log('do this ASAP');

//

const { readFile } = require('fs').promises;

async function hello() {
    const file = await readFile('./hello.txt', 'utf8');
    console.log(file)
}

hello();*/

//

const myModule = require('./my-module.js')

console.log(myModule);