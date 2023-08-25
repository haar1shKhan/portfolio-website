import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import photo from '../public/images/hero-photo.png'
import Link from 'next/link'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { gsap } from 'gsap';

const HeroSection = () => {

  const heroSection = useRef(null)

  useEffect(() => {

    let ctx = gsap.context(() => {
    
      // Our animations can use selector text like ".box" 
      // this will only select '.box' elements that are children of the component
      gsap.from(".herotitle",{duration:'1',delay:'0.5',opacity:'0',x:'-10',stagger:"0.5"});
      gsap.from(".contact",{duration:'1',opacity:'0',delay:'2',x:'-10' });
      gsap.from(".social",{duration:'1',opacity:'0',y:'-20',delay:'2',stagger:"0.25",ease:"bounce.out" });
      gsap.from(".photo",{duration:'1',opacity:'0',y:'100',delay:'2' });
      // or we can use refs
      
    }, heroSection); // <- IMPORTANT! Scopes selector text
    
    return () => ctx.revert(); // cleanup
   
 }, [])


  return (
    <section ref={heroSection} className='hero relative flex flex-col-reverse lg:flex-row  lg:justify-evenly  items-center  shadow-sm   rounded-md  max-w-screen-2xl mx-auto pb-10'>

        {/* left text */}
        <div className='flex flex-col mt-5 ml-3 pb-20 lg:pb-0 '>
            <h1 className='herotitle text-[#ff4d05] text-xl lg:text-6xl mb-4  font-serif max-w-1xl'>Web Development🔥</h1>
            <h2 className='herotitle text-white text-base lg:text-lg  font-semibold'>Hi i am Haarish Khan, A passionate Web Developer from U.A.E 🗺️</h2>

            <div className='flex mt-5 items-center space-x-3'>
                <Link className='contact primarybtn' href={'/#contactus'} >Contact Us</Link>  
                <Link aria-label='Instagram' className='' href={'/'}><InstagramIcon className='social text-white cursor-pointer hover:text-[#ff4d05]'/></Link>
                <Link aria-label='LinkedIn' href={'/'}><LinkedInIcon className='social  text-white cursor-pointer hover:text-[#ff4d05]'/></Link>
            </div>
        </div>

        {/* hero image */}
        <div className='heroImg m-10 relative lg:m-20'>
        <Image className='lg:hidden h-auto w-auto' height={150} width={100} alt='hero image'  src={photo}/>
        <Image className='photo hidden lg:inline h-auto w-auto '     height={384} width={256} alt='hero image' src={photo}/>
        </div>

    </section>
  )
}

export default HeroSection