const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const {mongoose} = require('./db/mongoose');
const {FoodItem} = require('./db/foodItems');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'..', 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

app.get('/api/items',(req,res)=>{
  const str = req.query.q || '';

  FoodItem.find({"name":{"$regex":str,$options:"i"}}).then((FoodItems) => {
    res.json({data : FoodItems});
  }).catch(e => res.json({error : e}));

})

// to seed data quickly, you may use : curl -X POST -H 'content-type:application/json' -d '{"name":"zab","kcal":45,"protien":3,"fat":13,"imgUrl":"none"}' http://localhost:3000/api/item
app.post('/api/item',(req,res)=>{
  const {name, kcal, protien, fat, imgUrl} = req.body;
  const item = new FoodItem({
    _id: new mongoose.Types.ObjectId(),
    name, kcal, protien, fat, imgUrl
  })

  item.save().then( response => {
    console.log('User saved ' + response);
  }).catch(e => console.log(e));

})

app.get('/test',(req,res)=>{
  res.json({message : 'this is a test message'});
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});