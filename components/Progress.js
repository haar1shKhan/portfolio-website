import { gsap } from 'gsap';
import React, { forwardRef, useEffect, useRef } from 'react'
import scrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(scrollTrigger)

const Progress = ({title,progress},ref) => {

    const progressRef = useRef(null)

    
    useEffect(() => {
      
      let ctx = gsap.context(() => {
      
        // Our animations can use selector text like ".box" 
        // this will only select '.box' elements that are children of the component
        gsap.fromTo(".bar",{duration:'1',width:0,},{duration:'2',width:progress+'%',ease:'bounce',scrollTrigger:{
            trigger:ref.current,
            start:'top center'
        }});
     
        // or we can use refs
        
      }, progressRef); // <- IMPORTANT! Scopes selector text
      
      return () => ctx.revert(); // cleanup
     
   }, [])
  

  return (
    <div ref={progressRef} className='my-3 mx-5'>
        <h2 className='text-white text-lg font-semibold mb-2   px-2 rounded-md w-fit'>{title}</h2>    
        <div className='bg-white h-2 w-full rounded'>
            <div className={`bar bg-gradient-to-r from-[#FFE53B] to-[#FF2525] h-full `}></div>
        </div>
    </div>
  )
}

export default forwardRef(Progress)