const express = require('express');
const app = express();
modul

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
app.get("/posts/:id",(req , res =>{
    const id = parseInt(res.params.id)
}))

app.post