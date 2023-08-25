import Image from 'next/image'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import photo from '../public/images/aboutImg.png'
import { gsap } from 'gsap'
import scrollTrigger from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
gsap.registerPlugin(scrollTrigger)


const About = ({about}) => {

  const aboutRef = useRef(null)

  const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {

    let ctx = gsap.context(() => {
    
      // Our animations can use selector text like ".box" 
      // this will only select '.box' elements that are children of the component
      gsap.from("#id", {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top center",
        },
        duration: "1",
        opacity: "0",
        scale: "0",
      });

      // or we can use refs
      
      
    }, aboutRef); // <- IMPORTANT! Scopes selector text
    
    return () => ctx.revert(); // cleanup
   
 }, [])


  return (
    <section className=' max-w-screen-2xl mx-auto' ref={aboutRef}>

        <div  id='id' className='flex flex-col m-5 lg:m-10 bg-[#131313]  p-10   rounded-3xl mx-auto '>

            <h3 className='sectionheader'>About Me</h3>

            <div className='flex flex-col lg:flex-row justify-evenly items-center lg:mx-10'>

                <div className='mt-5 mx-auto  '>

                    <Image className='lg:hidden h-auto w-auto' priority={true}  height={250} width={250} alt='about image' src={photo}/>
                    <Image className='hidden lg:inline-flex h-auto w-auto' priority={true}  height={500} width={500} alt='about image' src={photo}/>
                  
                </div>

                
                <div className='flex flex-col h-full  lg:w-1/2   '>

                    <p className='text-white text-base lg:text-lg  font-semibold'>{about.description}</p>

              <div className='mt-5 space-y-8'>

                 { about.bulletptn.map((ptn,index)=>{
                    return <div key={index} className='flex items-center space-x-4'>
                               <div  className='h-2 w-2 rounded-full  bg-gradient-to-r from-[#FFE53B] to-[#FF2525] '></div> <p className='text-white'>{ptn}</p>
                           </div>
                 })
                 }
                
                    
              </div>


              <Link className='mt-10  primarybtn ' href={'/aboutme'} >More details</Link>  
                    
                </div>

            </div>

        </div>
    </section>
  )
}

export default About
