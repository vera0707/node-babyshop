const url = require('url');
const groupModel = require('../../model/groupModel');

function group(req,res) {
    const query = url.parse(req.url,true).query;
    const pages = query.pages || 1;

    groupModel(pages).then(data=>{
       res.render('./group.art',data);
    });
}

module.exports = group;