import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'

export const getProjects = createAsyncThunk('getProject',async(search=null)=>{
    
    const response = await fetch(`http://localhost:3000/api/getProjects`,{
      method:'GET',
    })
    const data = await response.json()
    // console.log('xx',data,search);
    return data
})

export const updateProject = createAsyncThunk('updateProject',async({id,Projectname,gitHubLink,description,Colaborator,images},{rejectWithValue})=>{
    console.log('thunk',id);
    const response = await fetch(`http://localhost:3000/api/updateProject`,{
      method:'PUT',
      headers:{
        "Content-Type": "application/json",      
      },
      body:JSON.stringify({Projectname,gitHubLink,description,Colaborator,images,id})
       // body data type must match "Content-Type" header
    })
    const data = await response.json()
    // console.log('xx',data,search);
    if(!data.isSuccess){
      return rejectWithValue(data.msg);
    }
    return data

})

export const deleteProject = createAsyncThunk('deleteProject',async(id)=>{
    console.log(id);
    const response = await fetch(`http://localhost:3000/api/deleteProject?id=${id}`,{
      method:'DELETE',
      headers:{
        "Content-Type": "application/json",      
      },
       // body data type must match "Content-Type" header
    })
    const data = await response.json()
    // console.log('xx',data,search);
    return data
})

// console.log('get',getSkills());

export const getProjectSlice =  createSlice({
  name: 'ProjectAPi',
  initialState: {
    value: [],
    status:'',
    isUpdateReq: false,
    error:null
  },
//   reducers: {
  
//     getskill:  (state,action) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       console.log('ax',action.payload);
//       state.value = action.payload
//       state.status = "success"
//     },
  
    
//   },
  extraReducers(builder) {
    builder.addCase(getProjects.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = "success";

      // return action.payload;
    });
    builder.addCase(getProjects.pending, (state, action) => {
      state.status = "pendiing";
      // return action.payload;
    });
    builder.addCase(getProjects.rejected, (state, action) => {
      state.status = "fail";
      state.error=action.error.message
      // return action.payload;
    });
    builder.addCase(deleteProject.fulfilled, (state, action) => {
      state.isUpdateReq = false;
      state.status = "success";

      // return action.payload;
    });
    builder.addCase(deleteProject.pending, (state, action) => {
      state.isUpdateReq = true;

      state.status = "pendiing";
      // return action.payload;
    });
    builder.addCase(deleteProject.rejected, (state, action) => {
      state.isUpdateReq = false;
      state.status = "fail";
      state.error=action.error.message
      // return action.payload;
    });
    builder.addCase(updateProject.fulfilled, (state, action) => {
      state.isUpdateReq = false;
      state.status = "success";
      state.error=null


      // return action.payload;
    });
    builder.addCase(updateProject.pending, (state, action) => {
      state.isUpdateReq = true;
      state.status = "pendiing";
    });
    builder.addCase(updateProject.rejected, (state, action) => {
      state.isUpdateReq = true;
      state.status = "fail";
      state.error=action.error.message

      // return action.payload;
    });
  }
})

// console.log(getApislice);
// Action creators are generated for each case reducer function


export default getProjectSlice.reducer