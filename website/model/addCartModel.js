const info = require('../db/shopcart');

async function addCartModel(ob) {
  const shopCart = await new Promise(resolve=>{
	const infoob = new info(ob);
	infoob.save(()=>{
	  resolve('加入购物车成功');
	})
  });
  
  return {
	shopCart
  }
}

module.exports = addCartModel;