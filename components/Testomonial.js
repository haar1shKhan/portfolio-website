import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

const Testomonial = () => {
  return (
    <div className='bg-[#121212] m-8 w-full rounded-lg  flex flex-col'>
    <h1 className='text-white p-6 text-center text-xl'>Testomnials Dashboard</h1>
   
     {/* bulletpoint */}


      <div className='flex flex-col h-full rounded-lg bg-[#202020] '>


          <div className=''>

             <div className='grid grid-cols-5 justify-center bg-[#1a1919] text-white p-2'>
                 <p className='ml-1  text-lg my-2'>Name</p> 
                 <p className='col-span-2 text-center text-lg ml-1 my-2'>Testomonial</p>
                 <p className=' text-center text-lg ml-1 my-2'>Ratings</p>
                 <p className=' text-center text-lg ml-1 my-2'>Show in Website?</p>
            
             </div>

             <div className='grid grid-cols-5  justify-between hover:bg-[#242323] text-white p-4'>
                 <p className=''>John wick</p> 
                 <p className='col-span-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laborum magni harum exercitationem velit temporibus?</p>
                 <p className='text-center'>4.5/5</p> 
                 <div className='space-x-8 text-center'>
                     <DoneIcon className='hover:text-[#ff4d05] cursor-pointer'/>
                     <CloseIcon className='hover:text-[#ff4d05] cursor-pointer'/>
                 </div>
             </div>

             <div className='grid grid-cols-5  justify-between hover:bg-[#242323] text-white p-4'>
                 <p className=''>Elon musk</p> 
                 <p className='col-span-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolore asperiores deleniti distinctio, iusto excepturi.</p>
                 <p className='text-center'>5/5</p> 
                 <div className='space-x-8 text-center'>
                     <DoneIcon className='hover:text-[#ff4d05] cursor-pointer'/>
                     <CloseIcon className='hover:text-[#ff4d05] cursor-pointer'/>
                 </div>
             </div>
  
          </div>
      </div> 
            
</div>
  )
}

export default Testomonial