const express = require('express');
const app = express();
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
});
app.post("/post" (req , res =>{
    try {
        const data = req.body; // Access the data sent in the request body
        console.log(data); // Log the data to the console
        res.send("Post request received with data: " + JSON.stringify(data));
    } catch (error) {
        app.send("error has occured "+ error.message)
    }
}))
