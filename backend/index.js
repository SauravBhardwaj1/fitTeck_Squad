const express = require('express')
const { healthRouter } = require('./routes/healthRoutes')
require("dotenv").config()

const app = express()

app.use(express.json())


app.use("/user", userRouter)

app.use("/health",healthRouter)



app.listen(process.env.port,()=>{
    console.log("Server running on port 4500")
})