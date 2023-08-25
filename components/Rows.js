import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Rows = ({skill,handleEdit,handleDelete}) => {
  return (
    <div>
        <div className='grid grid-cols-5  justify-between hover:bg-[#242323] text-white p-4'>
                <p className=''>{skill.skills}</p> 
                <p className='col-span-2'>{skill.percentage}%</p>
                <p>{skill.type}</p>
                   <div className='space-x-4 text-end'>
                       <EditIcon onClick={()=>{handleEdit(skill)}} className='hover:text-[#ff4d05] cursor-pointer'/>
                       <DeleteIcon onClick={()=>{handleDelete(skill._id)}}  className='hover:text-[#ff4d05] cursor-pointer'/>
                </div>
         </div>
    </div>
  )
}

export default Rows