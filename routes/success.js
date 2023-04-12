const express=require('express');

const router = express.Router()
const successPage=require('../controllers/success')

router.get('/success',successPage.successPage)
module.exports = router;