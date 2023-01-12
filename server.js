// IMPORT MODDULES
const express = require("express")

// WEB APP
const app = express();
app.set("view engine", "ejs");
app.use('/public', express.static('public'));

// REQ-RES
app.get('/', (req, res)=>{
    res.render("index");
});

// SERVER-PORT
app.listen(8080);