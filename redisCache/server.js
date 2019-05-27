const net = require('net');
const modelob = require('./getdata/index');
const client = require('./redisConfig');

const server = net.createServer(Socker =>{
    console.log('tcp server created ......');
});

server.listen(5300,()=>{
    console.log('opened server on 5300')
});

server.on('connection',Socker=>{
    Socker.on('data',(name)=>{
        name = name.toString();
        client.keys('baby*',(err,keys)=>{
            // 拿到了redis下的一队 getFloor等数据名

            keys.forEach((item,index)=>{
                client.hkeys(item,(err,value)=>{
                    console.log('item',item);
                    if(value.indexOf(name) != -1){
                        client.hset(item,"id",false);
                        modelob[item]();
                    }
                })
            })
        });
    });
});

server.on('close',()=>{
    console.log('tcp server closed');
});

server.on('error',err=>{
    console.log('tcp server error:' + err);
});