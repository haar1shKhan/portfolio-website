import React, { useRef } from 'react'
import photo from '../public/images/skills.gif'
import Progress from './Progress'
import { gsap } from 'gsap'
import scrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'



gsap.registerPlugin(scrollTrigger)

const Skill = ({skills}) => {

    const frontend =  skills.filter(obj => obj.type === 'frontend').slice(0,4)
    const backend =  skills.filter(obj => obj.type === 'backend').slice(0,4)

    // console.log(frontend);

    const skillsRef = useRef(null)

  return (
    <section id='navSkils' className='max-w-screen-2xl  mx-auto' ref={skillsRef} >
        <div id='skils' className='flex flex-col mb-5 lg:mb-10 bg-[#131313] rounded-3xl mx-auto '>

            <h3 className='sectionheader'>Skills</h3>
            
           
            <div  className='flex flex-col lg:flex-row justify-evenly pb-10 mx-20'>
                
                <div id='skills'  className=' lg:hidden mt-5 mx-auto'>
                  <Image height={500} width={500} alt='skills image' src={photo}/>
                </div>

                <div className='lg:w-1/3 pt-10 flex flex-col  justify-center'>

                      {frontend.map((tech)=>{
                        return <Progress key={tech._id}  ref={skillsRef}  title={tech.skills} progress={tech.percentage} />
                      })}
             
                </div>

                <div id='skills'  className='hidden lg:inline-flex mt-5  '>

                    <Image height={500} width={500} alt='about image' src={photo}/>

                </div>
                
                <div className='lg:w-1/3 pt-10 flex flex-col  justify-center'>

                {backend.map((tech)=>{
                        return <Progress key={tech._id}  ref={skillsRef}  title={tech.skills} progress={tech.percentage} />
                      })}
                </div>

            </div>

        </div>
    </section>
  )
}

export default Skill