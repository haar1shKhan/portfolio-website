import React, { useState } from 'react'
import CreateProject from './CreateProject'
import ViewProject from './ViewProject'

const ProjectDashboard = () => {

    const [projectToggle, setprojectToggle] = useState("createProject")

  return (
    <div className='bg-[#121212] m-8 w-full rounded-lg  flex flex-col'>

    <h1 className='text-white p-6 text-center text-xl'>Projects Dashboard</h1>
    
    
        <div className='grid grid-cols-2'>
            <button onClick={()=>{setprojectToggle(toggle=>toggle='createProject')}} className={`text-white text-lg text-center cursor-pointer hover:bg-[#242323] 
             p-3 ${projectToggle==='createProject'&&"border-b-[#ff4d05] border-b"}`}>Create New Project</button>
            
            <button onClick={()=>{setprojectToggle(toggle=>toggle='viewProjects')}} className={`text-white text-lg text-center cursor-pointer hover:bg-[#242323]
             p-3 ${projectToggle==='createProject'?'':"border-b-[#ff4d05] border-b"}`}>View all Projects</button>
        </div>

        {projectToggle==='createProject' && <CreateProject/>}
        {projectToggle==='viewProjects' && <ViewProject />}

            
    </div>
  )
}

export default ProjectDashboard