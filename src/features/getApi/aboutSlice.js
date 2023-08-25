import { createSlice , createAsyncThunk,isRejectedWithValue } from '@reduxjs/toolkit'

export const getAbout = createAsyncThunk('getAbout',async()=>{
    
    const response = await fetch(`http://localhost:3000/api/getAbout`,{
      method:'GET',
    })
    const data = await response.json()
    // console.log('xx',data);
    return data
})

export const updateAbout = createAsyncThunk('updateAbout',async({name,age,nationality,livesIn,email,whatsApp,addSkills,description,bulletptn,languages,socialMedia,id})=>{
    // console.log('thunk',name,age,nationality,livesIn,email,whatsApp,addSkills,description,bulletptn,languages,socialMedia,id);
try{   
    const response = await fetch(`http://localhost:3000/api/updateAbout`,{
      method:'PUT',
      headers:{
        "Content-Type": "application/json",      
      },
      body:JSON.stringify({name,age,nationality,livesIn,email,whatsApp,addSkills,
                           description,bulletptn,languages,socialMedia,id})
       // body data type must match "Content-Type" header
    })
    const data = await response.json()
    console.log('xx',data);

    return data}
    catch(e){
      console.log(e.message);
    }
})

export const getAboutSlice =  createSlice({
  name: 'aboutApi',
  initialState: {
    value: {},
    status:'s',
    isUpdateReq: false,
    isSuccess:false
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
    builder.addCase(getAbout.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = "success";

      // return action.payload;
    });
    builder.addCase(getAbout.pending, (state, action) => {
      state.status = "pendiing";
      // return action.payload;
    });
    builder.addCase(getAbout.rejected, (state, action) => {
      state.status = "fail";

      // return action.payload;
    });
    builder.addCase(updateAbout.fulfilled, (state, action) => {
      state.isUpdateReq = false;
      state.status = "success";
      state.isSuccess=true;

      // return action.payload;
    });
    builder.addCase(updateAbout.pending, (state, action) => {
      state.isUpdateReq = true;
      state.isSuccess=false;
      state.status = "pendiing";
      // return action.payload;
    });
    builder.addCase(updateAbout.rejected, (state, action) => {
      state.isUpdateReq = false;
      state.status = "fail";
      state.isSuccess=false;

      // return action.payload;
    });
  }
})

// console.log(getApislice);
// Action creators are generated for each case reducer function


export default getAboutSlice.reducer