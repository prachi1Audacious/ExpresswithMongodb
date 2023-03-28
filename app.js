require("../MongoDB/config/configdb")
const express = require("express")
const router  = require('../MongoDB/Router/router')
const app = express()
const PORT = 2323

//Middleware
app.use(express.json())
app.use('/',router)




//Homepage
app.get("/",(req,res)=> {
    res.send("<h1>HELLO its homepage </h1>")
})


//serever creation
app.listen(PORT,()=>{
    console.log(`server is started ${PORT}`)
})
