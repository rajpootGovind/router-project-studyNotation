import React from 'react'
import frameImage from "../assets/frame.png"
// import image from "../assets/signup.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import {FcGoogle} from "react-icons/fc"

function Tempelate({title, des1, des2, image,formType, setIsLoggedIn}) {
// we have to send this data when we hava to need
    return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto 
    justify-between gap-y-0'>
       <div className='w-11/12 max-w-[450px]'>

       <h1 className='text-richblack-5 font-semibold text-[1.875rem]
       leading-[2.375rem]'>
       {title}
       </h1>

        <p className='text-[1.125rem] leading[1.625rem] mt-4'>
            <span className='text-richblack-100' >{des1}</span>
            <br/>
            <span className='text-blue-100 italic'>{des2}</span>
        </p>

        {formType==="signup"?
        (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
        (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

        <div className='flex w-full items-center gap-x-2'>
            <div className='w-full h-[1px] bg-richblack-700'></div>
            <p className='text-richblack-700 font-medium leading[1.375rem] '>OR</p>
            <div className='w-full h-[1px] bg-richblack-700'></div>
        </div>
        
        <button className='w-full flex justify-center items-center rounded-[8px]
        font-medium text-richblack-100 border border-richblack-100 px-[12px]
        py-[8px] gap-x-2 mt-6' >
        <FcGoogle/>
            <p>Sign Up with Google</p>
        </button>

       </div>

       <div className='relative w-11/12 max-w-[450px] '>
        <img src={frameImage} alt="pattern"
        width={558}
        height={504}
        loading={"lazy"}/>
        <img src={image} alt="Students"
        width={558}
        height={504}
        loading={"lazy"}
            className='absolute top-4 right-4 '
        />
       </div>

    </div>
  )
}

export default Tempelate