import jwt from "jsonwebtoken";
const getToken = async(userId)=>{
    try{
const token = jwt.sign({userId},process.env.JWTSECRET,{expiresIn:"7d"}) 
return token
    }catch(error){
      console.log(error)
    }
// const token = jwt.sign({userId},process.env.JWTSECRET,{expiresIn:"7d"}) 
// return token
}
 
export default getToken