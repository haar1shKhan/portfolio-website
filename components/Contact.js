import Image from 'next/image'
import React from 'react'
import photo from '../public/images/World\ Map.svg'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';

const Contact = () => {


  const handleForm = (e) =>{

    
    e.preventDefault()
    
    alert('submitted')
    
    
  }

  
  return (
    <section id='contactus' className=' max-w-screen-2xl flex flex-col mb-5 lg:mb-10 bg-[#131313] rounded-3xl mx-auto '  >
      
        <h3 className='sectionheader'>Contact</h3>

        <div className='flex justify-between mx-2 flex-col lg:flex-row my-10'> 
          <form onSubmit={handleForm} className='flex lg:w-1/2' action="">
            <div className='flex flex-col mx-auto w-3/4'>

              <label htmlFor='firstName' className='text-white  text-lg font-semibold mb-2 px-2 rounded-md w-fit'>First name</label>    
              <input type="text" id='firstName' name='firstName' className='rounded-full  py-1 mt-2' />

              <label htmlFor='lastName' className='text-white text-lg font-semibold mb-2 px-2 rounded-md w-fit'>Last name</label>    
              <input type="text"  id='lastName' name='lastName'  className='rounded-full py-1 mt-2' />

              <label htmlFor='email' className='text-white text-lg font-semibold mb-2 px-2 rounded-md w-fit'>Email</label>    
              <input type="text" id='email' name='email' className='rounded-full py-1 mt-2' />

              <label htmlFor='phoneNumber' className='text-white text-lg font-semibold mb-2 px-2 rounded-md w-fit'>Phone number</label>    
              <input type="text" id='phoneNumber' name='phoneNumber' className='rounded-full py-1 mt-2' />

              <label htmlFor='message' className='text-white text-lg font-semibold mb-2 px-2 rounded-md w-fit'>Enter your message</label>    
              <textarea id='message' name='message' className='rounded-lg mt-2'   cols="30" rows="10"></textarea>

              <button className='mx-auto my-6 text-lg  primarybtn ' >Submit</button>  

            </div>
          </form>

          <div className='lg:w-1/2  flex flex-col my-10 '>

                <div className='h-1/2 '>

                  <div className='lg:w-4/5  items-start grid lg:grid-cols-2 grid-cols-1 '>
                    <Link href={'/'}  className='contactLink '>
                        <h3 ><InstagramIcon className='lg:text-4xl'/></h3>
                        <h3 className='font-light lg:text-2xl text-xl py-auto'>_hazza.de_9</h3>
                    </Link>

                    <Link href={'/'} className='contactLink '>
                        <h3><LinkedInIcon className='text-4xl'/></h3>
                        <h3 className='font-light  lg:text-2xl text-xl py-auto'>Haarish khan</h3>
                    </Link>
                    <Link href={'/'}  className='contactLink'>
                        <h3 ><WhatsAppIcon className='text-4xl'/></h3>
                        <h3 className='font-light lg:text-2xl text-xl py-auto'>+971 54 346 2678</h3>
                    </Link>
                    </div>
                   
                </div>

                <div className=' m-10 lg:my-auto '>
                    <Image src={photo} alt='world map'/> 
                </div>

          </div>
        </div>

    </section>
  )
}

export default Contact