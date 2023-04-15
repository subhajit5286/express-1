const express=require('express');

const router = express.Router()
const addproductController=require('../controllers/add-product')

router.get('/add-product',addproductController.addproductController)
router.post('/add-product',addproductController.postaddproductController)
//router.get('/get-product',addproductController.getaddproductController)

module.exports = router;