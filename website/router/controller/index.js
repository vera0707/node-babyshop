const indexModel = require('../../model/indexModel');

function index(req,res) {
    indexModel().then(data=>{
        data.session = req.session;
        res.render('./index.art',data);
    });
}

module.exports = index;