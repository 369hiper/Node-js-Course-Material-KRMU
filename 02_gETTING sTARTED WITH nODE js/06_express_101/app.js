const express = require("express");

const app = express()
const port = 80;

app.get("/", (req,res) => {
    res.status(200).send('This is my Home page with express on NodeJS')
})

app.get("/this", (req,res) => {
    res.status(404).send("This Page is not found")
});

app.post("/this", (req,res) => {
    res.status(404).send("This Page is not found")
})

app.listen(port, () =>{
    console.log(`The Application has started Successfully on port ${port}`)
})

