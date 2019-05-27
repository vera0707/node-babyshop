const shopCartModel = require('../../model/shopCartModel');

function shopcart(req,res) {
  const session = req.session;
  if(session.userid){
	shopCartModel(req.session.userid).then(data=>{
	  data.session = session;
	  res.render('./shopcart.art',data);
	});
  }else{
      res.redirect('./login');
  }
}

module.exports = shopcart;
