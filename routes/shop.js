const express=require('express');
const path=require('path')
const rootDir=require('../util/path')
const router = express.Router()
const addproductController=require('../controllers/add-product')
// router.get('/',(req,res,next)=>{
//    // res.sendFile(path.join(rootDir,'views','shop.html')) 
      
// })
router.get('/',addproductController.getaddproductController)
module.exports = router;