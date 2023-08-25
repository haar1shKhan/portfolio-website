import Footer from '@/components/Footer'
import React, { useState } from 'react'
import { LoginApi } from '@/fetch/getApis'
import { useRouter } from 'next/router';

const login = () => {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [IsError, setIsError] = useState(false)
  const router = useRouter()


  const handleLogin = async(e)=>{

    e.preventDefault()

   const details = await LoginApi(email,password)
   console.log(details.admin);
   localStorage.setItem('admin',JSON.stringify(details.admin))

   if(details.isSuccess){
    router.push("/dashboard")
    setIsError(false)
    return
   }
   setIsError(true)

  }

  return (
    <>

      <div className='max-w-screen-2xl relative flex justify-center items-center login h-  my-auto'>

        <div className='my-10 flex flex-col justify-center items-center bg-[#131313] h-[500px] w-[800px] rounded-t-lg '> 

            <form className='flex item-center justify-center flex-col space-y-3  w-1/2' onSubmit={(e)=>handleLogin(e)}>
                <h3 className='sectionheader'>Log in</h3>
                <label htmlFor='email' className='text-white  text-lg font-semibold mb-2 px-2 rounded-md w-fit'>Email</label>    
                <input onChange={(e)=>{setemail(e.target.value)}} className='rounded-full pl-2 py-1 mt-2'  type="email" name='email'  />
                <label htmlFor='password' className='text-white  text-lg font-semibold mb-2 px-2 rounded-md w-fit'>password</label>    
                <input onChange={(e)=>{setpassword(e.target.value)}} className='rounded-full pl-2 py-1 mt-2' type="password" name='password' />
                <div className='mx-auto my-auto'>
                  <button className='primarybtn'>Login</button>
                </div>
            </form>
            {IsError && <p className='text-red-500 '>Enter valid username and password</p>}
        </div>

      </div>

      <Footer/>
    </>
  )
}

export default login