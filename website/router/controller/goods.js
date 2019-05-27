const url = require('url');
const goodsModel = require('../../model/goodsModel');


function goods(req,res) {
    const query = url.parse(req.url,true).query;
    const gid = query.gid || '001';

    goodsModel(gid).then(data=>{
	    data.session = req.session;
        res.render('./goods.art',data);
    });
}

module.exports = goods;