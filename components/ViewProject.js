import React, { useEffect } from 'react'
import ProjectCard from './ProjectCard'
import { useDispatch, useSelector,shallowEqual } from 'react-redux'
import { getProjects } from '@/src/features/getApi/projectSlice';

const ViewProject = () => {
  const projectArr = useSelector((state) => state.projectAPI.value.projects);
  const projectUp = useSelector((state) => state.projectAPI.isUpdateReq);
  // console.log(projectUp);
  const dispatch=useDispatch()

  useEffect(() => {

    if(projectArr || projectUp)
     dispatch(getProjects())     

  }, [projectUp])


  // console.log("project",projectArr);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 overflow-hidden bg-[#1a1919] mx-auto lg:grid-cols-3 my-10  '>
      
        {projectArr && projectArr?.map(project=>{
         return <ProjectCard key={project._id} Colaborator={project.Colaborator} id={project._id} title={project.Projectname} images={project.images} description={project.description} gitHubLink ={project.gitHubLink} />
        })}

    </div>
  )
}

export default ViewProject