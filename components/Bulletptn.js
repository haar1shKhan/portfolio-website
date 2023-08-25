import React from 'react'

const Bulletptn = ({text}) => {
  return (
   <div className='flex my-3 items-center space-x-4'>
    <div className='h-2 w-2 rounded-full  bg-gradient-to-r from-[#FFE53B] to-[#FF2525] '></div> 
    <p className='text-white'>{text}</p>
  </div>
  )
}

export default Bulletptn