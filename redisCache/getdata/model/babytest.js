const request = require('request');
const client = require('../../redisConfig');

async function index(){
    const getAllclassify = await new Promise((resolve)=>{
        request.get('http://localhost:3000/getAllclassify',(err,res,body)=>{
            if(!err && res.statusCode == 200){
                const data = JSON.parse(body);
                resolve(data);
            }
        });
    });

    const getIndexpic = await new Promise((resolve)=>{
        request.get('http://localhost:3000/getIndexpic',(err,res,body)=>{
            if(!err && res.statusCode == 200){
                const data = JSON.parse(body);
                resolve(data);
            }
        });
    });

    const getMore = await new Promise((resolve)=>{
        request.get('http://localhost:3000/getMore',(err,res,body)=>{
            if(!err && res.statusCode == 200){
                const data = JSON.parse(body);
                resolve(data);
            }
        });
    });

    const getHot = await new Promise((resolve)=>{
        request.get('http://localhost:3000/getHot',(err,res,body)=>{
            if(!err && res.statusCode == 200){
                const data = JSON.parse(body);
                resolve(data);
            }
        });
    });

    const getFloor = await new Promise((resolve)=>{
        request.get('http://localhost:3000/getFloor',(err,res,body)=>{
            if(!err && res.statusCode == 200){
                const data = JSON.parse(body);
                resolve(data);
            }
        });
    });

    client.hset('babytest','id','babytest' + Date.now());
    client.hset('babytest','getAllclassify',JSON.stringify(getAllclassify));
    client.hset('babytest','getIndexpic',JSON.stringify(getIndexpic));
    client.hset('babytest','getMore',JSON.stringify(getMore));
    client.hset('babytest','getHot',JSON.stringify(getHot));
    client.hset('babytest','getFloor',JSON.stringify(getFloor));


    return {
        getAllclassify,
        getIndexpic,
        getMore,
        getHot,
        getFloor
    };
}
module.exports=index;