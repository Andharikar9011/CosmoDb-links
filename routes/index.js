var express = require('express');
var router = express.Router();
const cosmo = require('./conn/cosmo-conn')
/* GET home page. */
router.get('/', async(req, res, next)=> {
  res.render('index', { title: 'MyApp' });
  // conso.log(req.body)
});
router.post('/',async(req, res, next)=> {
  res.render('index', { title: 'MyApp' });
  console.log(req.body.First)
  console.log(req.body.Last)
  data={
    adddatacont:{
    id:req.body.id,
    Country:'USA',
    name:req.body.First,
    email:req.body.Last
  }}
  cosmo.readDatabase().then(() => {
    cosmo.createFamilyItem(data.adddatacont)
  })
  // 
});


module.exports = router;
