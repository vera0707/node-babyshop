const client = require('../redisConfig');

async function index(){
    const getAllclassify = await new Promise((resolve)=>{

        client.hset('babytest','getAllclassify',(err,value)=>{
            resolve(JSON.parse(value));
        });
    });

    const getIndexpic = await new Promise((resolve)=>{
        client.hset('babytest','getIndexpic',(err,value)=>{
            resolve(JSON.parse(value));
        });
    });

    const getMore = await new Promise((resolve)=>{
        client.hset('babytest','getMore',(err,value)=>{
            resolve(JSON.parse(value));
        });
    });

    const getHot = await new Promise((resolve)=>{
        client.hset('babytest','getHot',(err,value)=>{
            resolve(JSON.parse(value));
        });
    });

    const getFloor = await new Promise((resolve)=>{
        client.hset('babytest','getFloor',(err,value)=>{
            resolve(JSON.parse(value));
        });
    });


    return {
        getAllclassify,
        getIndexpic,
        getMore,
        getHot,
        getFloor
    };
}
module.exports=index;