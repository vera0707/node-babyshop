const mongoose = require('mongoose');
const info = require("../db/shopcart");


async function deleteCartModel(id) {
	const shopCart = new Promise(resolve =>{
	  const sid = mongoose.Types.ObjectId(id);
	  info.deleteOne({"_id": sid},(err,data)=>{
	    if(err) console.log(err);
		console.log(data);
	    resolve('删除成功');
	  });
	});
	
	return {
	  shopCart
	}
}


module.exports = deleteCartModel;
