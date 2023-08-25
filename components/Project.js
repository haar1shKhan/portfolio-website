import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProjects } from '../src/features/getApi/projectSlice'
import { wrapper } from '../src/app/store';

const ProjectCard = dynamic(() => import('@/components/ProjectCard'), {
  loading: () => <p>Loading...</p>,
})
const Project = ({projects}) => {

  // console.log('project',projects);



  return (
    <section  className=' max-w-screen-2xl overflow-hidden  mx-auto'>
        <div>
          <h3 className='text-white text-center  bg-[#131313] rounded-3xl mx-auto lg:text-2xl m-4 font-mono px-10 py-2  border-b border-b-[#ff4d05] w-full'>Projects</h3>
        </div>
      <div className='flex flex-col mb-5 lg:mb-10'>
        <div className='flex mx-7 overflow-x-auto projectsScroll'>
            {/* <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/> */}
             {projects && projects?.map(project=>{
         return <ProjectCard key={project._id} id={project._id} title={project.Projectname} images={project.images} slug ={project.Slug} description={project.description} gitHubLink ={project.gitHubLink} />
        })}
        </div>
      </div>
    </section>
  )
}




export default Project