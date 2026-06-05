import express from "express";
import dotenv from "dotenv";
import dns from "dns";
dns.setServers(["1.1.1.1","8.8.8.8"])
import connectDb from "./config/connectDb.js"
// import dns from "dns"
// dns.setServers(["1.1.1.1","8.8.8.8"])
dotenv.config()


const app=express()


const PORT=process.env.PORT || 6000

app.get("/",(req,res)=>{
    return res.json({message:"server started"})
})


app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
    connectDb()

})
