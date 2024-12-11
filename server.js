const express = require("express")
const app  = express();

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get("/", (req, res)=> {
    res.send("Hit the main endpoint!")
})

app.listen(8000,()=> {
    console.log("App running on port 8000")
})