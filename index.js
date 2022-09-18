const express = require('express')
const path = require('path');
const { view,add } = require('./controllers/addController');
const { index,update } = require('./controllers/indexController');
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended:false})

const app = express();
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
const port = 8000
app.get('/',urlencodedParser,(req,res)=>{
    
    index(req,res)
    
})
app.post('/',urlencodedParser,(req,res)=>{
    update(req,res)
})
app.get('/add',(req,res)=>{
    view(req,res)
})

app.post('/add', urlencodedParser, (req,res)=>{
    add(req,res)
})
app.listen(port)