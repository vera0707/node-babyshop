const  deleteCartModel = require('../../model/deleteCartModel');

async function deletecart(req,res) {
 deleteCartModel(req.body.id).then(data=>{
    res.send(JSON.stringify({msg: data}));
 })
}


module.exports = deletecart;