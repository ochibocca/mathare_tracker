const express = require('express');
const app = express();
const data = require("./productschema")
app.get("/", (req, res) => { 
    res.send("hello world");
});


const posts = [ {
    id: "1",
    name : "regan"
}]
app.get("/posts", (req , res)=>{
    res.json(posts)
    console.log("You are learning");
    
})
app.listen(3000, () => {
    console.log("Server connected on port 3000");
    
});app.post("/post", (req, res) => { // Corrected the syntax by closing the parentheses properly
    try {
        const data = req.body; // Access the data sent in the request body
        console.log(data); // Log the data to the console
        res.send("Post request received with data: " + JSON.stringify(data));
    } catch (error) {
        res.send("An error has occurred: " + error.message); // Corrected 'app.send' to 'res.send'
    }
});

