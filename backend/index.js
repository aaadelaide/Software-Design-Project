const express = require('express');

const app = express()

app.use(express.json())

app.get("/api", (req, res)=>{
    res.json({"history": [3, "Address", "02/24/2023", 4, "$12"]})
})

app.listen(8800, ()=> {
    console.log("Connected!")
})