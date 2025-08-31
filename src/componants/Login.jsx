import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [signInStatus, setSignInStatus] = useState(true)
    const signInSignUpHandler =()=>{
        setSignInStatus(!signInStatus);
    }
  return (
    <div className='h-screen'>
        <Header/>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg' alt='Login Background' className='absolute -z-10 '/>
        <div className='flex justify-center items-center h-screen '>
            <div className='bg-black opacity-85 flex flex-col w-1/3  text-white p-10 rounded-sm'>
                <form action="" className='w-full flex flex-col'>
                <h1 className='text-3xl font-bold my-6'> {signInStatus? "Sign In" : "Sign Out"} </h1>
                {!signInStatus?<input type='text' placeholder='Full Name' className='my-4 p-4 bg-gray-800 text-white opacity-100 text-2xl rounded-sm' /> :""}

                <input type="email" placeholder='Email' className='my-4 p-4 bg-gray-800 text-white opacity-100 text-2xl rounded-sm' />
                <input type="password" placeholder='Password' className='my-4 p-4 bg-gray-800 text-2xl rounded-sm'/>
                <button className='p-4 my-4 bg-red-600 rounded-sm cursor-pointer'>{signInStatus? "Sign In" : "Sign Out"}</button>
                </form>
                <div className='flex gap-1'>
                    <p className='text-gray-400'>{signInStatus?"New to Netflix? ":"Already user?"} </p>
                    <button className='font-bold cursor-pointer' onClick={signInSignUpHandler}>{signInStatus? "Sign In" : "Sign Out"} Now</button>

                </div>

            </div>
        </div>
  
    </div>
  )
}

export default Login