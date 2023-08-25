import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import React, {useRef} from 'react'
import Herophoto from '../public/images/hero-photo.png'
import { wrapper } from '@/src/app/store'
import { getAbout } from '@/src/features/getApi/aboutSlice';
import { useSelector } from 'react-redux'

// import { wrapper } from '../src/app/store';
// import { getAbout } from '@/src/features/getApi/aboutSlice'
// import {useDispatch, useSelector } from 'react-redux'


const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <p>Loading...</p>,
})
const Bulletptn = dynamic(() => import('@/components/Bulletptn'), {
  loading: () => <p>Loading...</p>,
})

const aboutme = ({getAbout}) => {

  const aboutme = useRef(null)
  // const about = useSelector((state) => state.aboutAPI.value.about);
  const about = getAbout.about
  


  return (
    <div className='max-w-screen-2xl mx-auto'>
     <Head>
        <title>Codeverse - aboutme</title>
     </Head>
    
    <div className='bg-[#121212]  rounded-xl' >

        <div className=' flex  flex-col lg:flex-row justify-evenly md:mx-20 md:py-10 '>


                <div className='heroImg  md:h-[35%]   m-10 lg:m-20 mx-auto '>

                  <Image className='lg:hidden  h-auto w-auto' priority='true' height={100} width={100} alt='hero image'  src={Herophoto}/>
                  <Image className='photo hidden lg:inline h-auto w-auto' priority='true' height={384} width={256} alt='hero image' src={Herophoto}/>

                </div>

            <div ref={aboutme}  className=' lg:w-4/5 my-10 mx-auto'>

              <h3 className='sectionheader'>About me</h3>

              <div className=''>

                <p className='text-white m-4 mx-10 md:text-lg w-[85%]  text-sm '>
                   {about?.description}
                </p>

                  <div className=' m-4 mx-10 space-y-2'>
                      {
                        about?.bulletptn?.map((points,index)=>{
                          return<Bulletptn key={index} text={points}/>
                        })
                      }
                   
                    
                  </div>

                  <div className='mt-10  m-4 mx-10 space-y-2'>
                     <h3 className='text-white w-fit  text-center lg:text-xl font-mono  border-b border-b-[#ff4d05]'>More details</h3>

                    <div className=' grid grid-cols-1 md:grid-cols-2'>
                      
                    <Bulletptn text={`Age : ${about?.age} `}/>
                    <Bulletptn text={`Nationality : ${about?.nationality}`}/>
                    <Bulletptn text={`lives in : ${about?.livesIn}`}/>
                    <Bulletptn text={`Email : ${about?.email}` }/>
                    <Bulletptn text={`WhatsApp no : ${about?.whatsApp}`}/>
                    <Bulletptn text={`Additonal Skills : ${about?.addSkills?.join(',')}`}/>                    


                  </div>
                </div>
                  
              </div> 

            </div>

        </div>

    </div>
        <Footer/>
    </div>
  )
}



// export const getStaticProps = wrapper.getStaticProps(
//   ({ dispatch }) =>
//     async () => {
      
//       await dispatch(getAbout());
//     }
// );

export const  getStaticProps = async () => {
  
  const getAbout = await fetch(`http://localhost:3000/api/getAbout`,{
    method:'GET',
  })
  const about = await getAbout.json()
  
return {
   props: {
            getAbout:about      
          } ,
   revalidate:300
       };
};

export default aboutme