
import React, { useRef, useState } from 'react'
import ImageIcon from '@mui/icons-material/Image';
import dynamic from 'next/dynamic'
import { toast } from 'react-toastify';
var Editor = dynamic(() => import("./Editor"), {
  ssr: false
})

const CreateProject = () => {


  const [files, setFiles] = useState([])
  const [Projectname, setProjectname] = useState("")
  const [gitHubLink, setgitHubLink] = useState('')
  const [description, setdescription] = useState('')
  const [Colaborator, setColaborator] = useState('')




  const imageRef = useRef(null)

  const imageUpload =(e)=>{

    const Reader = new FileReader()
    if(e.target.files[0]){
        Reader.readAsDataURL(e.target.files[0])
    }

    Reader.onload=(readEvent)=>{
        // console.log(readEvent.target.result);
        setFiles(readEvent.target.result)

    }

  }


  const handleSubmit=async (e)=>{
    e.preventDefault()
    

    const response = await fetch("http://localhost:3000/api/addProject", {

      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({Projectname,gitHubLink,description,Colaborator,images:files})
    });

    setFiles(imageRef.current.value=null)
    const data = await response.json()

    if(!data.isSuccess){
      return  toast.error(data.msg, {
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
    <form onSubmit={handleSubmit}  className='grid grid-cols-2 m-10'>

    <div className='flex flex-col w-2/3 my-3 space-y-1'>
      <label className='text-white' htmlFor="Projectname">Project name : </label>
      <input onChange={(e)=>{setProjectname(e.target.value)}}  name='Projectname' className='outline-[#ff4d05] px-2 py-1 bg-[#252424] text-white  rounded-md w-full' id='Projectname' type="text" />
    </div>
    <div className='flex flex-col w-2/3 my-3 space-y-1'>
      <label className='text-white' htmlFor="gitHubLink">Github Links : </label>
      <input onChange={(e)=>{setgitHubLink(e.target.value)}} name='gitHubLink' className='outline-[#ff4d05] px-2 py-1 bg-[#252424] text-white   rounded-md w-full' id='gitHubLink' type="text" />
    </div>
    <div className='flex flex-col w-2/3 my-3 space-y-1'>
      <label className='text-white' htmlFor="Links">Colaborator : </label>
      <input onChange={(e)=>{setColaborator(e.target.value)}} name='Colaborator' className='outline-[#ff4d05] px-2 py-1 bg-[#252424] text-white   rounded-md w-full' id='Colaborator' type="text" />
    </div>

    <div className='flex justify-between  bg-[#1f1c1c] hover:bg-[#242323] rounded-lg   items-center w-2/3 px-10 my-3 space-y-1'>
      <label   className='text-white flex-1 cursor-pointer' htmlFor="Images">Images</label>
      <div>
         {files?.length?(<img onClick={()=>{setFiles(imageRef.current.value=null)}} src={files} className='h-[50px]' alt="" />):(<ImageIcon className='text-white'/>)}
      </div>
    </div>
    
      <input ref={imageRef} name='images' onChange={imageUpload}  className='hidden' id='Images' type="file" />

     <label className='col-span-2 my-3 text-white text-lg' htmlFor="description">About Project</label>
    {/* <textarea onChange={(e)=>{setdescription(e.target.value)}} placeholder='Write Description about your project here...' className=' col-span-2 outline-[#ff4d05] bg-[#252424] text-white' name="description" id="description" cols="30" rows="8"></textarea> */}
    <div className='col-span-2 '>
    <Editor setdescription={setdescription}/>
    </div>
    <button   className='col-span-2 mx-auto mt-4 text-lg  primarybtn ' >Submit</button>  
    

  </form>
  )
}

export default CreateProject