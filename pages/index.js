
import dynamic from 'next/dynamic'


// import { getSkills } from '../src/features/getApi/skillsSlice'
// import { getProjects } from '../src/features/getApi/projectSlice'
// import { getAbout } from '@/src/features/getApi/aboutSlice';
// import{useDispatch,useSelector } from "react-redux"
// import { wrapper } from '../src/app/store';

const HeroSection = dynamic(() => import('@/components/HeroSection'), {
  loading: () => <p>Loading...</p>,
})
const About = dynamic(() => import('@/components/About'), {
  loading: () => <p>Loading...</p>,
})
const Skill = dynamic(() => import('@/components/Skill'), {
  loading: () => <p>Loading...</p>,
})
const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <p>Loading...</p>,
})
const Project = dynamic(() => import('@/components/Project'), {
  loading: () => <p>Loading...</p>,
})
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <p>Loading...</p>,
})

import Head from 'next/head'

import { getAboutApi,getProjectApi,getSkillsApi } from '@/fetch/getApis';


export default function Home({getProject,getAbout,getSkills}) {

  // const projects = useSelector((state)=>state.projectAPI.value.projects)
  // const about =useSelector((state)=>state.aboutAPI.value.about)
  // console.log(about);

  const projects = getProject.projects
  const about = getAbout.about
  const skills = getSkills.skills

  // console.log(skills);

 
  return (
    <main  className='max-w-screen-2xl mx-auto '>
      
      <Head>
        <title>Codeverse</title>
        <meta charSet="utf-8"/>
        <meta name="theme-color"/>
        <meta name="description" content='Welcome to code with haarish,I help clients to make their digitel presence and provide them with 
         solution to get them more reach in the internet' />
      </Head>
      <HeroSection/>
      <About about={about} />
      <Skill skills={skills}/>
      <Project projects={projects}/>
      <Contact/>
      <Footer/>
      
    </main>
  )
}


// export const getServerSideProps = wrapper.getServerSideProps(
//   ({ dispatch }) =>
//     async () => {
//       await dispatch(getAbout());
//       await dispatch(getProjects());
//     }
// );

export const getServerSideProps = async () => {
  
  
    const project = await getProjectApi('sjs')

    const about = await getAboutApi()

    const skills = await getSkillsApi()
    
  return { props: { getProject:project,
                    getAbout:about,
                    getSkills:skills,
                   } };
};
 
