const express=require('express');

const router = express.Router()

const conatctusController= require('../controllers/contactus')

router.get('/contactus',conatctusController.conatctusController)
router.post('/contactus',conatctusController.postcontactusController)
// router.get('/success',(req,res,next)=>{
//     res.sendFile(path.join(rootDir,'views','success.html')) 
// })

module.exports = router;