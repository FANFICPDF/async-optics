const fs = require('fs');
// require('./server/socket.js');
const async_perf_hooks = require('./async_perf_hooks.js');


// let a=1;
// for(let i = 0; i < 20; i++){
// 	setTimeout(()=>{a++;},399);
// }

function testWrite() {
  fs.writeFile('sick.json','hello world!!!', (err) => {
    if (err) console.log('ERR');
    process._rawDebug('write done');
  })
}

setInterval(testWrite,2000);
