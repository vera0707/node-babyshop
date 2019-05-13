const info = require('../db/shopcart');

async function shopCartModel(uid) {
  const shopCart = await new Promise(resolve =>{
	info.find({uid},(err,data)=>{
	  resolve(data);
	})
  });
  
  return {
	shopCart
  }
}


module.exports = shopCartModel;