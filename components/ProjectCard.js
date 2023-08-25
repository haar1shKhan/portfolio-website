import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import photo from '../public/images/default.png'
import ImageIcon from '@mui/icons-material/Image';
import CloseIcon from '@mui/icons-material/Close';


import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch} from 'react-redux'
import { deleteProject, getProjects} from '../src/features/getApi/projectSlice'

import { useRouter } from 'next/router'
import { toast } from 'react-toastify';


const ProjectCard = ({id,title,images,description,slug,gitHubLink,Colaborator}) => {

  // console.log("id",id);
  const router = useRouter()
  const [toggle, settoggle] = useState(false)
  const [files, setFiles] = useState([])
  const [upProjectname, setProjectname] = useState("")
  const [upgitHubLink, setgitHubLink] = useState('')
  const [updescription, setdescription] = useState('')
  const [upColaborator, setColaborator] = useState([])
  const [isMounted,setIsMounted] = useState(false); // Need this for the react-tooltip

  useEffect(() => {
      setIsMounted(true);
  },[]);

  const imageRef = useRef(null)
 


  const showicon =  router.pathname==='/dashboard'?true:false
  const dispatch = useDispatch();
  // const isError = useSelector((state) => state.projectAPI.error,shallowEqual);
  // console.log(isError);
  const imageUpload =(e)=>{

    const Reader = new FileReader()
    if(e.target.files[0]){
        Reader.readAsDataURL(e.target.files[0])
    }

    Reader.onload=(readEvent)=>{
        console.log(readEvent.target.result);
        setFiles(readEvent.target.result)
    }

  }
  

  const handleEdit=async()=>{
    settoggle((!toggle))
    setProjectname(title)
    setgitHubLink(gitHubLink)
    setdescription(description)
    setColaborator(Colaborator.join(','))
    setFiles(images)
  }

  const handleDelete=async(id)=>{

    const isDelete =  confirm("Delete this Project?")
    if(!isDelete){
      return
    }
    // dispatch(deleteProject(id))
    const response = await fetch(`http://localhost:3000/api/deleteProject?id=${id}`,{
      method:'DELETE',
      headers:{
        "Content-Type": "application/json",      
      },
       // body data type must match "Content-Type" header
    })
    const data = await response.json()
    if (!data.isSuccess) {
      return toast.error(data.msg, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
 
    dispatch(getProjects())

    return toast.success(data.msg, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
  });
  }

  const handleUpdate=async(id)=>{
    // e.preventDefault()
    //  dispatch(updateProject({id,Projectname:upProjectname,gitHubLink:upgitHubLink,description:updescription,Colaborator:upColaborator.split(","),images:files}))
    const response = await fetch(`http://localhost:3000/api/updateProject`,{
      method:'PUT',
      headers:{
        "Content-Type": "application/json",      
      },
      body:JSON.stringify({id,Projectname:upProjectname,gitHubLink:upgitHubLink,description:updescription,Colaborator:upColaborator.split(","),images:files})
       // body data type must match "Content-Type" header
    })
    const data = await response.json()
    // console.log('xx',data,search);
   
    if (!data.isSuccess) {
      return toast.error(data.msg, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
 
    settoggle((!toggle))
    dispatch(getProjects())

    return  toast.success(data.msg, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
  });


    
  }


  return (
    <div className=' flex flex-col mb-5 lg:mb-10  bg-[#131313] min-w-[310px] lg:min-w-[360px] max-w-[400px] rounded-xl mt-3 mx-4 '>
        
      { toggle && <div className='absolute bg-[#121212] w-[81.9%] px-5 left-[15.8%] top-[28%] rounded-lg grid grid-cols-2 min-h-[500px] '>

              <div className='flex col-span-2  justify-center'>
                   <h1 className='text-white p-6 flex-1 text-center text-xl'>Update Project</h1>
                   <button onClick={()=>{settoggle(!toggle)}} className='text-white p-6  text-xl'><CloseIcon/></button>
              </div>
              <div className='flex flex-col w-2/3 my-3 space-y-1'>
                <label className='text-white' htmlFor="Projectname">Project name : </label>
                <input onChange={(e)=>{setProjectname(e.target.value)}} value={upProjectname} name='Projectname' className='outline-[#ff4d05] px-2 py-1 bg-[#252424] text-white  rounded-md w-full' id='Projectname' type="text" />
              </div>
              <div className='flex flex-col w-2/3 my-3 space-y-1'>
                <label className='text-white' htmlFor="gitHubLink">Github Links : </label>
                <input onChange={(e)=>{setgitHubLink(e.target.value)}} value={upgitHubLink} name='gitHubLink' className='outline-[#ff4d05] px-2 py-1 bg-[#252424] text-white   rounded-md w-full' id='gitHubLink' type="text" />
              </div>
              <div className='flex flex-col w-2/3 my-3 space-y-1'>
                <label className='text-white' htmlFor="Links">Colaborator : </label>
                <input onChange={(e)=>{setColaborator(e.target.value)}} value={upColaborator} name='Colaborator' className='outline-[#ff4d05] px-2 py-1 bg-[#252424] text-white   rounded-md w-full' id='Colaborator' type="text" />
              </div>

              <div className='flex justify-between  bg-[#1f1c1c] hover:bg-[#242323] rounded-lg items-center w-2/3 px-10 my-3 space-y-1'>
                <label   className='text-white flex-1 cursor-pointer' htmlFor="Images">Images</label>
                <div>
                  {files?.length?(<img onClick={()=>{setFiles(imageRef.current.value=null)}} src={files} className='h-[50px]' alt="" />):(<ImageIcon className='text-white'/>)}
                </div>
              </div>

                <input ref={imageRef} name='images' onChange={imageUpload}   className='hidden' id='Images' type="file" />

              <label className='col-span-2 my-3 text-white text-lg' htmlFor="description">About yourself</label>
              <textarea onChange={(e)=>{setdescription(e.target.value)}} value={updescription} placeholder='Write Description about your project here...' className=' col-span-2 outline-[#ff4d05] bg-[#252424] text-white' name="description" id="description" cols="30" rows="6"></textarea>

              <button  onClick={()=>{handleUpdate(id)}} className='col-span-2 mx-auto mt-4 text-lg  primarybtn ' >Submit</button>  

         </div>}



        <img className='rounded-t-xl h-[250px] object-fill  ' src={images[0]} alt="s" />
        <div className='flex justify-between items-center'>
          <h4 className='mx-2 my-4 text-[#ff4d05] font-bold text-xl' >{title}</h4>

           { showicon && <div className=' text-white space-x-4 mr-2 '>
            <button onClick={()=>{handleEdit(id)}} ><EditIcon  className='hover:text-[#ff4d05]  cursor-pointer'/></button>
            <button onClick={()=>{handleDelete(id)}}><DeleteIcon  className='hover:text-[#ff4d05]  cursor-pointer'/></button>
            </div>}
        </div>
        
       {isMounted && <p dangerouslySetInnerHTML={{ __html: `${description}` }} className='desc mx-2 my-2 text-white max-w-[300px] min-h-[115px] max-h-[115px] overflow-hidden font-bold text-md'>
        </p>}
        <Link className='primarybtn' href={`projects/${slug}`} >Read more...</Link>  
    </div>
  )
}

export default ProjectCard