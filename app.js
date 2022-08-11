const express = require("express");
const app = express();
app.set("view engine", "ejs")
app.use("/static", express.static("static"))
const port = 8000;


app.get("/", (req,res)=>{
    var fruits = [
        { fruit: "apple", color: "red" },
        { fruit: "banana", color: "yellow" },
        { fruit: "grape", color: "purple" }
    ]
    res.render("test", {fru: fruits});
})

// localhost:8000/test
app.get("/test", (req,res)=>{
    res.render("test1");
})
app.listen(port, ()=>{
    console.log("server open: ", port);
})