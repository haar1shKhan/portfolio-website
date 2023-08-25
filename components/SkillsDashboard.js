import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from 'react-redux'
import { getSkills} from '../src/features/getApi/skillsSlice'
import { toast } from 'react-toastify';
import Rows from './Rows';



const SkillsDashboard = () => {

  const [toggleModal, settoggleModal] = useState(false);
  const [isUpdate, setIsupdate] = useState(false);
  const [skills, setSkills] = useState("");
  const [percentage, setpercentage] = useState("");
  const [type, settype] = useState("");
  const [id, setId] = useState("");

  const dispatch = useDispatch();
  const skillss = useSelector((state) => state.skillsAPI.value.skills);

  // useEffect(() => {

  //   if(skillss && isUpdateReq)
  //   dispatch(getSkills());
    
  // }, [isUpdateReq]);

 const handleAdd=()=>{
   setSkills("");
   setpercentage("");
   settype("");
   settoggleModal(!toggleModal)
   setIsupdate(toggle => toggle=false)
  } 

 const handleEdit=({_id,skills,percentage,type})=>{
    settoggleModal(!toggleModal)
    setIsupdate(toggle => toggle=true)
    setSkills(skills);
    setpercentage(percentage);
    settype(type);
    setId(_id)
    // dispatch(updateSkills({id:_id,skills,percentage,type}))
  }
  
  const handleUpdate=async()=>{
    // dispatch(updateSkills({id,skills,percentage,type}))

    const response = await fetch(`http://localhost:3000/api/updateSkills`,{
      method:'PUT',
      headers:{
        "Content-Type": "application/json",      
      },
      body:JSON.stringify({skills,percentage,type,id})
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
    setSkills("");
    setpercentage("");
    settype("");
    settoggleModal(!toggleModal)
    setIsupdate(toggle => toggle=false)
    dispatch(getSkills());

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

  const handleDelete = async(id)=>{
    const isDelete =  confirm("Delete this Skills?")
    if(!isDelete){
      return
    }
    const response = await fetch(`http://localhost:3000/api/deleteSkills?id=${id}`,{
      method:'DELETE',
      headers:{
        "Content-Type": "application/json",      
      },
       // body data type must match "Content-Type" header
    })
    const data = await response.json()
    // dispatch(deleteSkills(id))
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
    dispatch(getSkills());

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

  const handleSubmit = async () => {
    setIsupdate(toggle => toggle=false)
    const response = await fetch("http://localhost:3000/api/addSkills", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ skills, percentage, type }), // body data type must match "Content-Type" header
    });
    const data = await response.json(); // parses JSON response into native JavaScript objects

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

    setSkills("");
    setpercentage("");
    settype("");
    settoggleModal(false);
    dispatch(getSkills());
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
  };

  return (
    <>
    <div  className='relative bg-[#121212] m-8 w-full rounded-lg   flex flex-col'>
    <h1 className='text-white p-6 text-center text-xl'>Skills Dashboard</h1>
     {/* skills modal */}
   {toggleModal && <div className='absolute rounded-xl bg-[#110f0f] left-[25%] -translate-x-[25%] top-4 w-[1000px] h-[500px]' >
        <div className='flex justify-center'>
            <h1 className='text-white p-6 flex-1 text-center text-xl'>{isUpdate?"Update Skills":"Add Skills"}</h1>
            <button onClick={handleAdd} className='text-white p-6  text-xl'><CloseIcon/></button>
        </div>

        <div className='grid grid-cols-2 m-10'>
          
          <div className='flex col-span-2 flex-col  my-3 space-y-1'>
            <label className='text-white' htmlFor="Skills">Skills : </label>
            <input placeholder='Enter your skills' value={skills}   onChange={(e)=>{setSkills(e.target.value)}} className={`outline-[#ff4d05] px-2 py-1 bg-[#252424] text-white   rounded-md w-full`} id='skills' type="text" />
          </div>
          <div className='flex col-span-2 flex-col  my-3 space-y-1'>
            <label className='text-white' htmlFor="percentage">percentage : </label>
            <input  placeholder='Enter your percentage' value={percentage} onChange={(e)=>{setpercentage(e.target.value)}} className='outline-[#ff4d05] px-2 py-1 bg-[#252424] text-white  rounded-md w-full' id='percentage' type="text" />
          </div>
          <div className='flex col-span-2 flex-col  my-3 space-y-1'>
            <label className='text-white' htmlFor="type">type : </label>
            <input  placeholder='Enter your type of technology' value={type} onChange={(e)=>{settype(e.target.value)}} className='outline-[#ff4d05] px-2 py-1 bg-[#252424] text-white rounded-md w-full' id='type' type="text" />
          </div>

          <div className='flex justify-end col-span-2 mt-4'>
          <button onClick={isUpdate?handleUpdate:handleSubmit} className='primarybtn '>{isUpdate?"Update Skills":"Add Skills"}</button>
        </div>

        </div>
        
    </div>}
   
      <div className='flex flex-col h-full rounded-lg bg-[#202020] '>

          <div className=''>

             <div className='grid grid-cols-5 justify-center bg-[#1a1919] text-white p-2'>
                 <p className='ml-1  text-lg my-2'>Skills Name</p> 
                 <p className='col-span-2  text-lg ml-1 my-2'>percentage %</p>
                  <p className='ml-1 my-2  text-lg'>Type</p>
                <div className='flex space-x-4 items-center justify-end text-end'>
                   <AddIcon onClick={()=>{settoggleModal(!toggleModal)}} className='mr-3 hover:text-[#ff4d05]  cursor-pointer'/>
                 </div>
             </div>

             {skillss && skillss.map(skill=>{
              return    (
                  <Rows key={skill._id} skill={skill} handleEdit={handleEdit} handleDelete={handleDelete} />
              )
             })}
  
          </div>

      </div> 
            
</div>
</>
  )
}



export default SkillsDashboard