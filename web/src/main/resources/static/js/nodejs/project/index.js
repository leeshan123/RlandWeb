const express = require("express");
const path = require("path");
const ejs = require("ejs");

const server = express();

server.set("views",path.join(__dirname, "views"))
server.set("view engine", "ejs");
server.use(express.static(path.join(__dirname,"public")))

server.listen(80);

server
.route("/index")
.get((req,resp)=>{
    resp.render("index.ejs",{test:"Hello"});
});