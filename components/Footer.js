import Link from 'next/link'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Footer = () => {
  return (
    <footer className='flex flex-col lg:flex-row justify-between bg-[#131313] rounded-t-lg  px-4'>
        {/* logo */}

            <div className='flex flex-col my-10 lg:mx-5 mx-auto text-3xl font-bold'>
                <Link href={'/'} className='text-[#ff4d05]'>Codeverse</Link>
            </div>

        {/* navigation */}
            <div className='grid grid-cols-1 lg:grid-cols-2 my-10 mx-5'>
                    <Link href={'/aboutme'} className='footerbtn'>About me</Link>
                    <Link href={'/#navSkils'} className='footerbtn'>Skills</Link>
                    <Link href={'/projects'} className='footerbtn'>Projects</Link>
                    <Link href={'/#contactus'} className='footerbtn'>Contact us</Link>
            </div>
        {/* credits */}

             <div className='grid grid-cols-1 my-10 mx-5 '>
                    <Link href={'/'}  className='footercontactLink '>
                        <h3 ><InstagramIcon className=''/></h3>
                        <h3 className='font-light  py-auto'>_hazza.de_9</h3>
                    </Link>

                    <Link href={'/'} className='footercontactLink '>
                        <h3><LinkedInIcon className=''/></h3>
                        <h3 className='font-light  py-auto'>Haarish khan</h3>
                    </Link>
                    <Link href={'/'}  className='footercontactLink'>
                        <h3 ><WhatsAppIcon className=''/></h3>
                        <h3 className='font-light  py-auto'>+971 54 346 2678</h3>
                    </Link>
             </div>



    </footer>
  )
}

export default Footer