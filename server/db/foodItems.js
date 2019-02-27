const mongoose  = require('mongoose');

const FoodItemSchema = new mongoose.Schema({
  _id : mongoose.Schema.Types.ObjectId,
  name : String,
  imgUrl : String,
  kcal : Number,
  protien : Number,
  fat : Number
})

FoodItemSchema.statics.findBySubString = function(){
  
}

const FoodItem = mongoose.model('FoodItem',FoodItemSchema);

module.exports = {FoodItem};