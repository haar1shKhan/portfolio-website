import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'

export const getSkills = createAsyncThunk('getSkills',async()=>{
    
    // const response = await fetch(`http://localhost:3000/api/getSkills?type=${search}`,{
    const response = await fetch(`http://localhost:3000/api/getSkills`,{
      method:'GET',
    })
    const data = await response.json()
    // console.log('xx',data,search);
    return data
})

export const updateSkills = createAsyncThunk('updateSkils',async({skills,percentage,type,id})=>{
  console.log('thunk',id);
  const response = await fetch(`http://localhost:3000/api/updateSkills`,{
    method:'PUT',
    headers:{
      "Content-Type": "application/json",      
    },
    body:JSON.stringify({skills,percentage,type,id})
     // body data type must match "Content-Type" header
  })
  const data = await response.json()
  console.log('xx',data);
  if(!data.isSuccess){
    return rejectWithValue(data.msg);
  }
  return data
})

export const deleteSkills = createAsyncThunk('deleteSkills',async(id)=>{
  console.log(id);
  const response = await fetch(`http://localhost:3000/api/deleteSkills?id=${id}`,{
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

export const getApislice =  createSlice({
  name: 'getAPI',
  initialState: {
    value: [],
    status:'',
    isUpdateReq: false,
    isSuccess:false
  },
  // reducers: {
  
  //   getskill:  (state,action) => {
  //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
  //     // doesn't actually mutate the state because it uses the Immer library,
  //     // which detects changes to a "draft state" and produces a brand new
  //     // immutable state based off those changes
  //     console.log('ax',action.payload);
  //     state.value = action.payload
  //     state.status = "success"
  //   },
  
    
  // },
  extraReducers(builder) {
    builder.addCase(getSkills.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = "success";
    });
    builder.addCase(getSkills.pending, (state, action) => {
      state.status = "pendiing";
      // return action.payload;
    });
    builder.addCase(getSkills.rejected, (state, action) => {
      state.status = "fail";

      // return action.payload;
    });


    builder.addCase(updateSkills.fulfilled, (state, action) => {
      state.isUpdateReq = false;
      state.status = "success";
      // return action.payload;
    });
    builder.addCase(updateSkills.pending, (state, action) => {
      state.isUpdateReq = true;

      state.status = "pendiing";
      // return action.payload;
    });
    builder.addCase(updateSkills.rejected, (state, action) => {
      state.isUpdateReq = true;
      state.status = "fail";
      state.isSuccess = false;


      // return action.payload;
    });

    builder.addCase(deleteSkills.fulfilled, (state, action) => {
      state.isUpdateReq = false;
      state.status = "success";

      // return action.payload;
    });
    builder.addCase(deleteSkills.pending, (state, action) => {
      state.isUpdateReq = true;

      state.status = "pendiing";
      // return action.payload;
    });
    builder.addCase(deleteSkills.rejected, (state, action) => {
      state.isUpdateReq = false;
      state.status = "fail";

      // return action.payload;
    });
  }
})

// console.log(getApislice);
// Action creators are generated for each case reducer function

export default getApislice.reducer