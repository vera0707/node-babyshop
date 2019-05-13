const mongodb = require('./mongodb');
const Schema = mongodb.Schema;
const cargoods = new Schema({
  	uid: {
  	  type: String
	},
  	gid: {
  	  type: String
	},
  	title: {
	  type: String
	},
  	describe: {
	  type: String
	},
  	price: {
  	  type: Number
	},
  	num: {
  	  type: Number
	},
  	image: {
  	  type: String
	}
});

// 参数1 名字 参数2 scheme 参数3 这个scheme对象所操作的myweb
module.exports = mongodb.model('cargoods',cargoods,'cargood');