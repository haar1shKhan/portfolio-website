import Navbar from '@/components/Navbar'
import { useRouter } from "next/router";
import '@/styles/globals.css'
import '@/styles/project.css'

import { wrapper } from '../src/app/store';
import { Provider } from "react-redux";

 function App({ Component, ...rest }) {
  
  const router = useRouter()
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  const isDashboard =  router.pathname==='/dashboard'?true:false

  return <div className={`mx-auto max-w-screen-2xl`}>
            <Provider store={store}>
                  {!isDashboard&&<Navbar/>}
                        <Component {...pageProps} />
            </Provider>
         </div>
      
}

export default App
