//const http=require('http');
const express=require('express');
const path=require('path')
const bodyParser=require('body-parser')
const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')
const contactusRoutes=require('./routes/contactus')
const successRoutes=require('./routes/success')


const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs')
app.use('/admin',adminRoutes)
app.use(shopRoutes)
app.use(contactusRoutes)
app.use(successRoutes)
app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})
//const server=http.createServer(app);
app.listen(3000);