const quest = require('request');


async function goods(gid) {
    const getGoods = await new Promise(resolve => {
       quest.get('http://localhost:3000/getGoods?gid=' + gid,(err,res,body)=>{
          if(!err && res.statusCode == 200){
              const data = JSON.parse(body);
              resolve(data);
          }
       });
    });


    return {
        getGoods
    };
}


module.exports = goods;