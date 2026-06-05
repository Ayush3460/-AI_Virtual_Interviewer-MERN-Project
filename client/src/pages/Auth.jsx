import React from 'react'

import { TbRobot } from "react-icons/tb";
import { IoSparkles } from "react-icons/io5";
import { motion } from "motion/react"
import { FaGoogle } from "react-icons/fa";
import { signInWithPopup } from 'firebase/auth';
//import { auth, provider } from "../firebase"; // adjust path
import {auth,provider} from '../utils/firebase';

function Auth() {
    const handleGoogleAuth= async()=>{
        try{
                const response=await signInWithPopup(auth,provider)
                console.log(response)
        }catch(error){
                console.log(error)
        }
    }
  return (
    <div className='w-full min-h-screen bg-white flex items-center
    justify-center px-6 py-20'>
      <motion.div 
      initial={{opacity:0,y:-40}}
      animate={{opacity:1,y:0}}
      transition={{duration:1.05}}
      className='w-full max-w-md p-8 rounded-3xl bg-white shadow-2xl
      border border-gray-200'>
       <div className='flex items-center justify-center gap-3 mb-6'>
         <TbRobot size={22}/>
        <div>
              <h2 className='font-semibold text-center leading-snug mb-4'>
                InterviewIQ.AI
              </h2>
              <h1 className='text-2xl md:text-3xl font-semibold text-center leading-snug mb-4'>
                Continue with
                <span className='bg-green-100 text-green-600 px-3 py-1 rounded-full inline-flex items-center gap-2'>
                    <IoSparkles size={16}/>
                    AI Smart Interview

                </span>
              </h1>
              <p className='text-gray-500 text-center text-sm md:text-base leading-relaxed mb-8'>
                Sign in to start AI-powered mock interview,track your
                progress,and unlock detailed performance insights.
              </p>
              <motion.button 
              onClick= {handleGoogleAuth}
              whileHover={{opacity:0.9,scale:1.15}}
              whileTap={{opacity:1,scale:.9}}
              className='w-full flex items-center justify-center gap-3 py-3 bg-black
              text-white rounded-full shadow-md'>
              <FaGoogle size={20}/>
              Continue with Google

              </motion.button>
        </div>
       

       </div>
      </motion.div>

    </div>
  )
}

export default Auth


