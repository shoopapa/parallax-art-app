import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import {firebase} from '../Firebase/firebase'


const center ={
  display:'flex',
  alignItems: 'center',
  minHeight:"100%",
  justifyContent: 'center',
}

const Home = () =>{

  const [user] = useAuthState(firebase.auth());

  const message = () => {
    if (user) {
      return `Welcome ${user.displayName}!` 
    } else {
      return "Login pls"
    }
  }

  return (
    <div style={center}> 
      <h1 style={{marginTop:'10vh'}}>{message()}</h1>
    </div>
  )
}

export default Home