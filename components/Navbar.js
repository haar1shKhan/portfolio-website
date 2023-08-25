import React, { useEffect, useRef, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useRouter } from 'next/router';


const Navbar = () => {

  const navbtnRef = useRef(null)
  const [open, setopen] = useState(false)

  const handleMenu =() =>{
    setopen(curopen => !curopen)

  }

  useEffect(() => {

    let ctx = gsap.context(() => {
   
      gsap.from(".navbtn",{duration:'1',opacity:'0',y:'10' ,stagger:'0.25' });
      gsap.from(".mainlogo",{duration:'2',x:'-80',ease:'bounce'});

      
    }, navbtnRef); 
    
    return () => ctx.revert();
   
 }, [])
 const router = useRouter()


  return (
    <nav ref={navbtnRef} className='sticky top-0  bg-[#201f1f] lg:rounded-lg  md:inline-flex 
     items-center justify-between py-3 lg:py-0 z-50 w-full max-w-screen-2xl'>

       <Link href={'/'} className='hidden md:inline-flex mainlogo text-[#ff4d05] mx-4 text-2xl font-bold '>Codeverse</Link>
        
        <div  className='md:flex text-center hidden'>
            <Link href={'/'} className={`navbtn ${ router.pathname==='/'?'text-[#ff4d05]':''}`}>Home</Link>
            <Link href={'/aboutme'} className={`navbtn ${ router.pathname==='/aboutme'?'text-[#ff4d05]':''}`}>About me</Link>
            <Link href={'/#navSkils'} className={`navbtn ${ router.pathname==='/#navSkils'?'text-[#ff4d05]':''}`}>Skills</Link>
            <Link href={'/projects'} className={`navbtn ${ router.pathname==='/projects'?'text-[#ff4d05]':''}`}>Projects</Link>
            <Link href={'/#contactus'} className={`navbtn ${ router.pathname==='/#contactus'?'text-[#ff4d05]':''}`}>Contact us</Link>
        </div>

        <div  className='md:hidden  relative  p-3 mx-auto text-white'>
          <div className='flex justify-between items-center'>
            {!open?<MenuIcon className='' onClick={()=>{handleMenu()}}/>:<CloseIcon onClick={()=>{handleMenu()}} />}
            <Link href={'/'} className='md:hidden  mainlogo text-[#ff4d05]  text-2xl'>Codeverse</Link>
          </div>

          {open && <div className='my-5 absolute  bg-[#201f1f] h-screen w-full left-0  flex flex-col '>
                      <Link href={'/'} onClick={()=>{setopen(false)}} className='navbtnMob'>Home</Link>
                      <Link href={'/aboutme'} onClick={()=>{setopen(false)}} className='navbtnMob'>About me</Link>
                      <Link href={'/#navSkils'} onClick={()=>{setopen(false)}} className='navbtnMob'>Skills</Link>
                      <Link href={'/projects'} onClick={()=>{setopen(false)}} className='navbtnMob'>Projects</Link>
                      <Link href={'/#contactus'} onClick={()=>{setopen(false)}} className='navbtnMob'>Contact us</Link>
                  </div>}
        </div>
        
    </nav>
  )
}

export default Navbar