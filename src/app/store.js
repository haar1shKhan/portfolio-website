// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'
// import getApiReducer from '../features/getApi/getApiSlice'

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//     getApi:getApiReducer
//   }
// })

import { configureStore,combineReducers } from '@reduxjs/toolkit'
import getApiReducer from '../features/getApi/skillsSlice'
import getProjectReducer from '../features/getApi/projectSlice'
import getAboutReducer from '../features/getApi/aboutSlice'
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

const combinedReducer = combineReducers({
  skillsAPI:getApiReducer,
  projectAPI:getProjectReducer,
  aboutAPI:getAboutReducer
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer,
  });


  export const wrapper = createWrapper(makeStore);