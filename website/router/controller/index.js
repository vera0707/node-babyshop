const indexModel = require('../../model/indexModel');
const template = require('art-template');
const redisClient = require('../../redisConfig');
const nowdata = new Date().getTime();

function index(req,res) {
    redisClient.hset('babytest','id',(err,value)=>{
        const _index = global._pagecache.index;

        if(_index && _index.id = value &&  _index.html && _index.timeout > nowdata){
            res.send(global._pagecache.index.html);
        }else{
            indexModel().then(data=>{
                const html = template(__dirname + '/../../views/index.art',data);
                global._pagecache.index = {
                    id: value,
                    timeout: Date.now() + 3600*1000,
                    html
                };
                res.send(html);

            });
        }
    });
}

module.exports = index;