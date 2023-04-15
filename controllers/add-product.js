const path=require('path')
const rootDir=require('../util/path')
const Product=require('../models/product')
exports.addproductController = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html')) 
}

exports.postaddproductController = (req,res,next)=>{
    console.log(req.body)
    const product= new Product(req.body.title)
    product.save()
    //console.log(Product.fetchAll())
    res.redirect('/')
   
}

exports.getaddproductController = (req,res,next)=>{
    Product.fetchAll(products=>{
        for(let i=0;i<products.length;i++)
    console.log(products[i].title)
    //res.sendFile(path.join(rootDir,'views','shop.html')) 
    res.render('shop',{
        prods: products,
        path:'/'
    });
    });
}