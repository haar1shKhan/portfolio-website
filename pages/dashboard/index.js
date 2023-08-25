import AboutDashboard  from '@/components/AboutDashboard'
import ContactDashboard from '@/components/ContactDashboard';
import ProjectDashboard from '@/components/ProjectDashboard'
import SkillsDashboard from '@/components/SkillsDashboard'
import Testomonial from '@/components/Testomonial'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getSkills } from '../../src/features/getApi/skillsSlice'
import { getProjects } from '../../src/features/getApi/projectSlice'
import { wrapper } from '../../src/app/store';
import { getAbout } from '@/src/features/getApi/aboutSlice';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import AddUser from '@/components/AddUser';
import { getUserAPi } from '@/fetch/getApis';
import { useRouter } from 'next/navigation'

const index = ({getUser}) => {

  const [toggle, settoggle] = useState('About')
  const dispatch = useDispatch();
  // const skillss = useSelector((state) => state.skillsAPI);
  // const projectUp = useSelector((state) => state.projectAPI.isUpdateReq);
  // const projectArr = useSelector((state) => state.projectAPI.value.projects);
  const about = useSelector((state) => state.aboutAPI.value?.about);
  const isUpdateReq = useSelector((state) => state.aboutAPI.isUpdateReq);
  const router = useRouter()

  const [access, setacess] = useState(false)
  
  // console.log(getUser);

  useEffect(() => {
    

    if(!localStorage.getItem("admin")){
      console.log("in")
      router.push("/login")
      setacess(false)
      return
    }

    setacess(true)
    
    
  }, [access])

  const Logout =()=>{
    localStorage.removeItem("admin")
    router.push("/login")
  }  
  

  return (
    <>
    {
    !access?(<p>User not authorized</p>):
    (
    <div className='flex '>

      <Head>
        <title>Codeverse</title>
        <meta charSet="utf-8"/>
        <meta name="theme-color"/>
        <meta name="description" content='Welcome to code with haarish,I help clients to make their digitel presence and provide them with 
         solution to get them more reach in the internet' />
      </Head>

         <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
     />
        {/* sidebar */}

        <div className='bg-[#121212] flex  flex-col justify-around h-screen rouded-r-xl sticky top-0'>

            <h1 className=' p-4 text-[#ff4d05] text-start mx-auto text-4xl font-bold '>Codeverse</h1>
            <img className=' w-[100px] mx-auto rounded-full' src="https://lh3.googleusercontent.com/a/AGNmyxaa1OEhuV1eZYarLKHmrO5TsdnhJf-gVwcvAeJSzDs=s288-c-no" alt="" />
            
            <div className='flex flex-col  '>
              <button onClick={()=>{settoggle(curtoggle=>curtoggle='About')}} className={`navbtnMob mx-0 text-start text-xl ${toggle==='About'?'text-[#ff4d05]':''}`}>About Me</button>
              <button onClick={()=>{settoggle(curtoggle=>curtoggle='Skills')}} className={`navbtnMob mx-0 text-start text-xl ${toggle==='Skills'?'text-[#ff4d05]':''}`}>Skills</button>
              <button onClick={()=>{settoggle(curtoggle=>curtoggle='Projects')}} className={`navbtnMob mx-0 text-start text-xl ${toggle==='Projects'?'text-[#ff4d05]':''}`}>Projects</button>
              <button onClick={()=>{settoggle(curtoggle=>curtoggle='Contacts')}} className={`navbtnMob mx-0 text-start text-xl ${toggle==='Contacts'?'text-[#ff4d05]':''}`}>Contacts</button>
              <button onClick={()=>{settoggle(curtoggle=>curtoggle='addUser')}} className={`navbtnMob mx-0 text-start text-xl ${toggle==='addUser'?'text-[#ff4d05]':''}`}>Add User</button>
              <button onClick={()=>{settoggle(curtoggle=>curtoggle='testomonials')}} className={`navbtnMob mx-0 text-start text-xl ${toggle==='testomonials'?'text-[#ff4d05]':''}`}>testomonials</button>
            </div>

            <button onClick={Logout}  className={`navbtnMob mx-0 text-start text-xl`}>logout</button>
            <Link className='flex mx-0 items-center navbtnMob text-start text-xl ' href={'/'} >go to Website <ExitToAppIcon className='ml-3'/></Link>

        </div>

        {/* control */}
       {toggle==="About" && <AboutDashboard about={about}/>}
       {toggle==='Skills'&&<SkillsDashboard/>}
       {toggle==='Projects'&&<ProjectDashboard/>}
       {toggle==='Contacts'&&<ContactDashboard/>}
       {toggle==='addUser'&&<AddUser user ={getUser}/>}
       {toggle==='testomonials'&&<Testomonial/>}
    </div>
    )
    }
    </>
  )
}


export const getServerSideProps = wrapper.getServerSideProps(
  ({ dispatch }) =>
    async () => {
      await dispatch(getSkills());
      await dispatch(getProjects());
      await dispatch(getAbout());

      const getUser = await getUserAPi()
    
      return { props: { getUser } };
    }
);





export default index