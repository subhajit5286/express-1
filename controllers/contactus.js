const path=require('path')
const rootDir=require('../util/path')

exports.conatctusController = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html')) 
}

exports.postcontactusController = (req,res,next)=>{
    console.log(req.body)
    res.redirect('/success')
   
}