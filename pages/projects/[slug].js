import Bulletptn from '@/components/Bulletptn'
import React, { useEffect, useState } from 'react'
import connectDb from '@/middleware/connect'
import Project from '@/models/project'


const project = ({project}) => {
  console.log("cliemt",project);
  const [isMounted,setIsMounted] = useState(false); // Need this for the react-tooltip

  useEffect(() => {
      setIsMounted(true);
  },[]);

  return (
    <div >
            <img className='w-full h-60 object-cover rounded-t-lg' src={project.image?project.image:"../../images/default.png"} alt="" />
            <div className='bg-[#131313]  my-3 mx-7 rounded-lg'>
                <h1 className='text-[#ff4d05] text-xl lg:text-4xl py-4 mx-2  font-bold border-b border-b-[#ff4d05] '>{project.projectsName}</h1>
                {isMounted && <p  dangerouslySetInnerHTML={{ __html: `${project.description}` }}  className='text-white text-justify font-sans mx-5 my-4'></p>}

                    <div className='mx-5 my-4'>
                        
                        <h3 className='text-[#ff4d05] text-2xl font-semibold'>collaborate</h3>
                        
                        <div className='py-2 mx-5 '>
                          {
                            project.colaborator.map((col)=>{
                              return <Bulletptn text={col}/>
                            })
                          }
                        </div>

                    </div>
            </div>
    </div>
  )
}


export const getStaticPath = async () => {

  connectDb()
  const projects = await Project.find({Slug:{}})

  console.log("gsp",projects)

  const paths = projects.map((project) => {
    return {
      params: {
        current: project.slug,
      },
    };
  });

  
  return{
    paths,
    fallback:'blocking'
  }
};

export const getServerSideProps = async ({params})=>{

  console.log("para",params.slug);

  connectDb()
  const projects = await Project.findOne({Slug:params.slug})

  console.log("ssr",projects)


  if(!projects){
      return {
          notFound:true
      }
  }

  return{
      props:{
              project:{
                  projectsName:projects.Projectname,
                  githubLink:projects.gitHubLink,
                  colaborator:projects.Colaborator,
                  image:projects.images,
                  description:projects.description
                }
            }
  }
}

export default project