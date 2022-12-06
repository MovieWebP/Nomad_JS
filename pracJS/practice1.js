const express = require("express")

const app = express()

app.get("/", (req,res) => {
    res.send("fuck you")
})

app.listen(8080, (req, res) => {
    console.log("listening to port 3000")
})