const express = require('express')

const userRouter = express.Router()

userRouter.get("/",async(req,res)=>{
    res.send("Welcome")
})

userRouter.post("/register",async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})

userRouter.post("/login",async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})


module.exports = {userRouter}