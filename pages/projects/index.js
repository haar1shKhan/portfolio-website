import dynamic from 'next/dynamic'
import Head from 'next/head'
import React, { useEffect } from 'react'
// import { getProjects } from '../../src/features/getApi/projectSlice'
// import { useSelector } from 'react-redux'
// import { wrapper } from '../../src/app/store';
// import { getAbout } from '@/src/features/getApi/aboutSlice'
import {getProjectApi} from '../../fetch/getApis'
const ProjectCard = dynamic(() => import('@/components/ProjectCard'), {
  loading: () => <p>Loading...</p>,
})
const projects = ({getProject}) => {

  // const projectArr = useSelector((state) => state.projectAPI.value.projects);
  const projectArr = getProject.projects;

  console.log('project',projectArr);

 

  return (
    <div className='mx-auto max-w-screen-2xl'>
      <Head>
        <title>Codeverse - projects</title>
     </Head>

     <h3 className='text-white text-center  bg-[#131313] rounded-lg mx-auto lg:text-2xl m-4 font-mono px-10 py-4  border-b border-b-[#ff4d05] w-[90%]'>Projects</h3>


      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4 mx-auto w-[90%]'>

      {projectArr && projectArr?.map(project=>{
         return <ProjectCard key={project._id} id={project._id} title={project.Projectname} images={project.images} slug ={project.Slug} description={project.description} gitHubLink ={project.gitHubLink} />
        })}

      </div>


    </div>
  )
}

// export const getStaticProps = wrapper.getStaticProps(
//   ({ dispatch }) =>
//     async () => {
//       await dispatch(getProjects());
//     }
// );

export const getServerSideProps = async () => {
  
  const project = await getProjectApi()

  
return { props: { 
                  getProject:project,
                } };
};

export default projects