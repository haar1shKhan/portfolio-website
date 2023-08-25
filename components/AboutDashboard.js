import React, {useState } from 'react'
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';


const AboutDashboard = ({about}) => {

  const [aboutDes, setaboutDes] = useState(about.description)
  const [name, setName] = useState(about?.name)
  const [age, setAge] = useState(about?.age)
  const [nationality, setNationality] = useState(about?.nationality)
  const [livesIn, setLivesIn] = useState(about?.livesIn)
  const [email, setEmail] = useState(about?.email)
  const [whatsApp, setWhatsApp] = useState(about?.whatsApp)
  const [addSkills, setaddSkills] = useState(about?.addSkills.join(','))
  const [bulletptn, setbulletptn] = useState(about?.bulletptn.join(','))

  // console.log(bulletptn);
  // const dispatch = useDispatch();
  // console.log('ab',about);

    const handleUpdate = async (id)=>{

      // dispatch(updateAbout({name,age,nationality,livesIn,email,whatsApp,addSkills,description:aboutDes,bulletptn,languages:'',socialMedia:[""],id}))
      const response = await fetch(`http://localhost:3000/api/updateAbout`,{
        method:'PUT',
        headers:{
          "Content-Type": "application/json",      
        },
        body:JSON.stringify({name,age,nationality,livesIn,email,whatsApp,addSkills,description:aboutDes,bulletptn,languages:'',socialMedia:[""],id})
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


  // const handleSubmit=async ()=>{
    
  //   const response = await fetch("http://localhost:3000/api/addAbout", {

  //     method: "POST", // *GET, POST, PUT, DELETE, etc.
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({name,age,nationality,livesIn,email,whatsApp,addSkills,description:aboutDes,bulletptn}), // body data type must match "Content-Type" header
  //   });

  //   const data = await response.json()

  //   if(!data.isSuccess){
  //     return  toast.error(data.msg, {
  //       position: "bottom-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "dark",
  //       });
  //   }
  //   return  toast.success(data.msg, {
  //       position: "bottom-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "dark",
  //       });
  // }

  return (
    <div className='bg-[#121212] m-8 w-full rounded-lg  flex flex-col'>
        <h1 className='text-white pt-6 text-center text-xl'>About Dashboard</h1>
        <section className='grid grid-cols-1 md:grid-cols-2 w-full mx-auto' action="">
          {/* desc */}

            <div className='flex flex-col ml-5 col-span-2 m-10 rounded-md'>

              <div className='flex p-4 justify-between items-center bg-[#1a1919]'>
                <label className='text-white text-lg' htmlFor="description">About yourself</label>
              </div>
              
              <textarea onChange={(e)=>{setaboutDes(e.target.value)}} value={aboutDes} placeholder='Write About yourself...' className='  outline-[#ff4d05] bg-[#252424] text-white' name="description" id="description" cols="30" rows="10"></textarea>
           </div>
         {/* bulletpoint */}


           {/* <div className='flex flex-col h-full rounded-lg mx-10 bg-[#202020] max-h-[78%]'>

              <div className='flex p-4 justify-between items-center rounded-t-md bg-[#1a1919]'>
                <h2 className='text-white text-lg'>BulletPoints</h2>
                  <div>
                    <AddIcon className='text-white hover:text-[#ff4d05] cursor-pointer'/>
                  </div>
              </div>

              <div className='overflow-y-scroll'>
                
                 <div className='flex justify-between hover:bg-[#252424] text-white p-5'>
                  
                      <p> Strong problem-solving skills and attention to detail</p> 
                      <div className='space-x-4'>
                          <EditIcon className='hover:text-[#ff4d05] cursor-pointer'/>
                          <DeleteIcon className='hover:text-[#ff4d05] cursor-pointer'/>
                      </div>
                </div>

                <div className='flex justify-between hover:bg-[#252424] text-white p-5'>
                    <p> Ability to work collaboratively in a team setting</p> 
                    <div className='space-x-4'>
                      <EditIcon className='hover:text-[#ff4d05] cursor-pointer'/>
                      <DeleteIcon className='hover:text-[#ff4d05] cursor-pointer'/>
                    </div>
                </div>
 
               <div className='flex justify-between hover:bg-[#242323] text-white p-5'>
                   <p> Commitment to best practices in the industry</p> 
                     <div className='space-x-4'>
                       <EditIcon className='hover:text-[#ff4d05] cursor-pointer'/>
                       <DeleteIcon className='hover:text-[#ff4d05] cursor-pointer'/>
                     </div>
               </div>

                 <div className='flex justify-between hover:bg-[#242323] text-white p-5'>
                     <p> Commitment to best practices in the industry</p> 
                     <div className='space-x-4'>
                         <EditIcon className='hover:text-[#ff4d05] cursor-pointer'/>
                         <DeleteIcon className='hover:text-[#ff4d05] cursor-pointer'/>
                     </div>
                 </div>

                 <div className='flex justify-between hover:bg-[#242323] text-white p-5'>
                     <p> Commitment to best practices in the industry</p> 
                     <div className='space-x-4'>
                         <EditIcon className='hover:text-[#ff4d05] cursor-pointer'/>
                         <DeleteIcon className='hover:text-[#ff4d05] cursor-pointer'/>
                     </div>
                 </div>
      
              </div>
          </div>   */}
            

         {/* language pro */}

             {/* <div className='flex flex-col h-full rounded-lg mx-10 bg-[#202020] max-h-[78%]'>

              <div className='flex p-4 justify-between items-center rounded-t-md bg-[#1a1919]'>
                <h2 className='text-white text-lg'>languages</h2>
                  <div>
                    <AddIcon className='text-white hover:text-[#ff4d05] cursor-pointer'/>
                  </div>
              </div>

              <div className='overflow-y-scroll'>
               
               <div className='flex justify-between hover:bg-[#242323] text-white p-5'>
                    <div className='flex space-x-2'>
                        <p>English</p>
                        <p>80%</p> 
                    </div>
                    <div className='space-x-4'>
                      <EditIcon className='hover:text-[#ff4d05] cursor-pointer'/>
                      <DeleteIcon className='hover:text-[#ff4d05] cursor-pointer'/>
                    </div>
               </div>
                
               <div className='flex justify-between hover:bg-[#242323] text-white p-5'>
                    <div className='flex space-x-2'>
                        <p>Hindi</p>
                        <p>85%</p> 
                    </div>
                    <div className='space-x-4'>
                      <EditIcon className='hover:text-[#ff4d05] cursor-pointer'/>
                      <DeleteIcon className='hover:text-[#ff4d05] cursor-pointer'/>
                    </div>
               </div>
                
               <div className='flex justify-between hover:bg-[#242323] text-white p-5'>
                    <div className='flex space-x-2'>
                        <p>Urdu</p>
                        <p>75%</p> 
                    </div>
                    <div className='space-x-4'>
                      <EditIcon className='hover:text-[#ff4d05] cursor-pointer'/>
                      <DeleteIcon className='hover:text-[#ff4d05] cursor-pointer'/>
                    </div>
               </div>

              </div>
          </div>   */}
          
         {/* extra skills */}

         <div className='flex flex-col  rounded-md mx-10 bg-[#202020] mb-10 col-span-2'>

              <div className='flex p-4 justify-between items-center rounded-t-md bg-[#1a1919]'>
                <h2 className='text-white text-lg'>Pesonal Details</h2>
              </div>
              <div className='grid grid-cols-2 m-10'>

                <div className='flex flex-col w-2/3 my-3 space-y-1'>
                  <label className='text-white' htmlFor="name">name : </label>
                  <input onChange={(e)=>{setName(e.target.value)}} value={name} className='outline-[#ff4d05] px-2 py-1 bg-[#252424] text-white border border-[#ff4d05] rounded-md w-full' id='name' type="text" />
                </div>
                <div className='flex flex-col w-2/3 my-3 space-y-1'>
                  <label className='text-white' htmlFor="age">age : </label>
                  <input  onChange={(e)=>{setAge(e.target.value)}} value={age} className='outline-[#ff4d05] px-2 py-1 bg-[#252424] text-white border border-[#ff4d05] rounded-md w-full' id='age' type="text" />
                </div>
                <div className='flex flex-col w-2/3 my-3 space-y-1'>
                  <label className='text-white' htmlFor="Nationality">Nationality : </label>
                  <input  onChange={(e)=>{setNationality(e.target.value)}} value={nationality} className='outline-[#ff4d05] px-2 py-1 bg-[#252424] text-white border border-[#ff4d05] rounded-md w-full' id='Nationality' type="text" />
                </div>
                <div className='flex flex-col w-2/3 my-3 space-y-1'>
                  <label className='text-white' htmlFor="lives">lives in : </label>
                  <input  onChange={(e)=>{setLivesIn(e.target.value)}} value={livesIn} className='outline-[#ff4d05] px-2 py-1 bg-[#252424] text-white border border-[#ff4d05] rounded-md w-full' id='lives' type="text" />
                </div>
                <div className='flex flex-col w-2/3 my-3 space-y-1'>
                  <label className='text-white' htmlFor="Email">Email : </label>
                  <input  onChange={(e)=>{setEmail(e.target.value)}} value={email} className='outline-[#ff4d05] px-2 py-1 bg-[#252424] text-white border border-[#ff4d05] rounded-md w-full' id='Email' type="email" />
                </div>
                <div className='flex flex-col w-2/3 my-3 space-y-1'>
                  <label className='text-white' htmlFor="WhatsApp">WhatsApp : </label>
                  <input  onChange={(e)=>{setWhatsApp(e.target.value)}} value={whatsApp} className='outline-[#ff4d05] px-2 py-1 bg-[#252424] text-white border border-[#ff4d05] rounded-md w-full' id='WhatsApp' type="text" />
                </div>
                <div className='flex flex-col w-2/3 my-3 space-y-1'>
                  <label  className='text-white' htmlFor="skills">Additonal skills : </label>
                  <input  onChange={(e)=>{setaddSkills(e.target.value)}} value={addSkills} className='outline-[#ff4d05] px-2 py-1 bg-[#252424] text-white border border-[#ff4d05] rounded-md w-full' id='skills' type="text" />
                </div>
                <div className='flex flex-col w-2/3 my-3 space-y-1'>
                  <label  className='text-white' htmlFor="bulletptn">Bulletptn : </label>
                  <input  onChange={(e)=>{setbulletptn(e.target.value)}} value={bulletptn} className='outline-[#ff4d05] px-2 py-1 bg-[#252424] text-white border border-[#ff4d05] rounded-md w-full' id='bulletptn' type="text" />
                </div>
               

              </div>

          </div>
              <button onClick={()=>{handleUpdate(about._id)}} className='col-span-2 mx-auto primarybtn '>submit</button>
        </section>
        
    </div>
  )
}

export default AboutDashboard