const net = require('net');

const client = net.Socket();

client.connect(5300,'127.0.0.1',()=>{
   client.write('getAllclassify');
});

client.on('data',data=>{
   console.log('data');
});
