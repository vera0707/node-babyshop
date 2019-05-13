const addCartModel = require('../../model/addCartModel');

function addcart(req,res) {
  addCartModel(req.body).then(data=>{
    res.send(JSON.stringify({'msg': data.shopCart}));
  })
};

module.exports = addcart;