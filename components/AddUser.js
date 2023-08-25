import React, { useEffect, useState } from 'react'
import { addUserApi,getUserAPi } from '@/fetch/getApis'
import { useRouter } from 'next/router';
const AddUser = ({user}) => {
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  }

    const [name, setName] = useState("")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async()=>{
        addUserApi(name,email,password)
        refreshData()
    }

  

  return (
    <div className='bg-[#121212] m-8 w-full rounded-lg  flex flex-col'>
    <h1 className='text-white pt-6 text-center text-xl'>Add Users</h1>
    <section className='grid grid-cols-1 md:grid-cols-2 w-full mx-auto' action="">

     <div className='flex flex-col  rounded-md mx-10 bg-[#202020] mt-5 mb-10 col-span-2'>

          <div className='flex p-4 justify-between items-center rounded-t-md bg-[#1a1919]'>
            <h2 className='text-white text-lg'>User details</h2>
          </div>

          <div className='grid grid-cols-2 m-10'>

            <div className='flex flex-col w-2/3 my-3 space-y-1'>
              <label className='text-white' htmlFor="name">name : </label>
              <input onChange={(e)=>{setName(e.target.value)}} className='outline-[#ff4d05] px-2 py-1 bg-[#252424] text-white border border-[#ff4d05] rounded-md w-full' id='name' type="text" />
            </div>

            <div className='flex flex-col w-2/3 my-3 space-y-1'>
              <label className='text-white' htmlFor="age">Email : </label>
              <input  onChange={(e)=>{setEmail(e.target.value)}}  className='outline-[#ff4d05] px-2 py-1 bg-[#252424] text-white border border-[#ff4d05] rounded-md w-full' id='email' type="email" />
            </div>
            <div className='flex flex-col w-2/3 my-3 space-y-1'>
              <label className='text-white' htmlFor="age">Password : </label>
              <input  onChange={(e)=>{setPassword(e.target.value)}} className='outline-[#ff4d05] px-2 py-1 bg-[#252424] text-white border border-[#ff4d05] rounded-md w-full' id='password' type="text" />
            </div>
            
           

          </div>
          <button onClick={handleLogin} className='col-span-2 mx-auto primarybtn '>submit</button>

      </div>

      <div className='flex flex-col  rounded-md mx-10 bg-[#202020] mt-5 mb-10 col-span-2'>

        <div className='flex p-4 justify-between items-center rounded-t-md bg-[#1a1919]'>
        <h2 className='text-white text-lg'>Pesonal Details</h2>
        </div>
        <div className='grid grid-cols-1'>
        <div className='grid grid-cols-5  justify-between bg-[#1a1818ce] text-white p-4'>
                <p className=''>name</p> 
                <p className='col-span-2'>email</p>
                <p>password</p>
                   {/* <div className='space-x-4 text-end'>
                       <EditIcon onClick={()=>{handleEdit(skill)}} className='hover:text-[#ff4d05] cursor-pointer'/>
                       <DeleteIcon onClick={()=>{handleDelete(skill._id)}}  className='hover:text-[#ff4d05] cursor-pointer'/>
                </div> */}
               </div>
        {user && user.user.map(user=>{
              return    (
                <div key={user._id} className='grid grid-cols-5  justify-between hover:bg-[#242323] text-white p-4'>
                <p className=''>{user.name}</p> 
                <p className='col-span-2'>{user.email}%</p>
                <p>{user.password}</p>
                   {/* <div className='space-x-4 text-end'>
                       <EditIcon onClick={()=>{handleEdit(skill)}} className='hover:text-[#ff4d05] cursor-pointer'/>
                       <DeleteIcon onClick={()=>{handleDelete(skill._id)}}  className='hover:text-[#ff4d05] cursor-pointer'/>
                </div> */}
               </div>
              )
             })}

     </div>

</div>
    </section>
    
</div>
  )
}

export default AddUser