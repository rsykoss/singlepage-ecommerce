const express = require ('express');
const router = express.Router();

router.post('/product/save', (req, res, next) => {
    var new_product = Product(req.body);
    new_product.save()
          .then(data => res.json(data))
          .catch(next)
});

router.get('/product', (req, res, next) => {
  var query = {};
  var sort = { _id: 1 }
  if(req.query.category){
    query.category = req.query.category;
  }
  if(req.query.price){
    if(req.query.price == "asc")
      sort = { price: 1, _id: 1 };
    else if(req.query.price == "desc")
      sort = { price: -1, _id: 1 };
  }
  if(req.query.pagesize && req.query.pagesize){
    var pagesize = parseInt(req.query.pagesize);
    var pagenum = parseInt(req.query.pagenum);
    Product.find(query)
          .sort(sort)
          .skip(pagenum > 0 ? ( ( pagenum - 1 ) * pagesize ) : 0 )
          .limit(pagesize)
          .then(data => res.json(data))
          .catch(next)
  } 
  else {
    Product.find(query)
          .sort(sort)
          .then(data => res.json(data))
          .catch(next)
  }
});

router.get('/product/:id', (req, res, next) => {
    Product.findById(req.params.id)
          .then(data => res.json(data))
          .catch(next)
});

module.exports = router;