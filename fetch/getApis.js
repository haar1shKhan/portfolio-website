export const getAboutApi = async ()=>{

    const getAbout = await fetch(`http://localhost:3000/api/getAbout`,{
      method:'GET',
    })
     const data = await getAbout.json()
     
     return data
}
export const getProjectApi = async ()=>{

    const getAbout = await fetch(`http://localhost:3000/api/getProjects`,{
      method:'GET',
    })
     const data = await getAbout.json()
     
     return data
}
export const getSkillsApi = async ()=>{

    const getAbout = await fetch(`http://localhost:3000/api/getSkills`,{
      method:'GET',
    })
     const data = await getAbout.json()
     
     return data
}
export const getUserAPi = async ()=>{

  console.log('get')

    const getAbout = await fetch(`http://localhost:3000/api/getUser`,{
      method:'GET',
    })
     const data = await getAbout.json()
     
     return data
}

export const addUserApi = async (name,email,password)=>{

    const respone = await fetch(`http://localhost:3000/api/addUser`,{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({name,email,password})
    })
     const data = await respone.json()
     await getUserAPi()
     return data
}



export const LoginApi = async (email,password)=>{

  const respone = await fetch(`http://localhost:3000/api/login`,{
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({email,password})
  })
   const data = await respone.json()
   return data
}



