var mongoose = require('mongoose');

var OrderSchema = mongoose.Schema({
	username:{
		type:String
	},
	name:{
		type:String,
		required:true
	},
	price:{
		type:Number
	},
	address:{
		type:String
	},
	staus:{
		type:String,
		default:"Accepted"
	}
});



var Order = module.exports = mongoose.model('orders', OrderSchema, 'placed');


module.exports.getOrder = function(callback, limit){
	Order.find(callback).limit(limit);
}

module.exports.getOrderById = function(id , callback){
	Order.findById(id, callback);
}

module.exports.addOrder = function(Order, callback){
	Order.create(Order, callback);
}

module.exports.updateOrder = function(id, Order, callback){
	var query = {_id: id};
	var update = {
		name: Order.name,
		price: Order.price,
		file: Order.file,
		stock: Order.stock
	};
	Order.findOneAndUpdate(query, update, callback);
	
}

