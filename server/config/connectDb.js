import mongoose from "mongoose";
// import dns from "dns";
// dns.setServers(["1.1.1.1","8.8.8.8"])

const connectDb=async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DATABASE CONNECTED")
    }
    catch(error){
           console.log(`DataBase Error ${error}`)   
    }
}
export default connectDb
