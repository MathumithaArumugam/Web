const express =require("express");
const exphbs=require("express-handlebars");
const bodyParser=require("body-parser");
const mysql=require("mysql");

require('dotenv').config();

const app = express();
const port=process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//static files

app.use(express.static("public"));

//Template Engine
const handlebars=exphbs.create({extname:".hbs"});
app.engine('hbs',handlebars.engine);
app.set("view engine","hbs");

//MySQL



//check Database Connection

//Router

/*
app.get('/',(req,res)=>{
    res.render("home");
});
*/

const routes=require("./server/routes/students");
app.use('/',routes);
//Listen Port
app.listen(port,()=>{
console.log("Listening Port:"+port)
});