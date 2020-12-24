import React, {useRef, useState} from 'react'
import '../App.css'
import { useParams } from "react-router-dom";
import {useController, ParallaxProvider } from 'react-scroll-parallax';

import LayerEditorStack from '../Components/LayerEditorStack'
import ParallaxArt from '../Components/ParallaxArt'


const PageStyles = {
  height:'93vh',
  width:'100vw',
  marginTop:'7vh',
  display:'flex',
  flexDirection:'row',
  overflow:'none',


}

const EditorPage = () => {
  
  const {user, artwork} = useParams()
  const [update, setupdate] = useState(false)
  const scrollContainer = useRef(null)

  return (
    <div style={PageStyles}>
      <div style={{overflow:'hidden', height:'100%', width:'100%'}}>
        <button onClick={setupdate(true)}>hi</button>
        <LayerEditorStack 
          style= {{width:'50%'}}
          user={user}
          artwork={artwork}
        />
      </div>
      <div ref={scrollContainer} style={{overflow:'scroll', height:'100vh', width:'100%'}}>
        <ParallaxProvider
          scrollContainer={scrollContainer}
        >
          <ParallaxArt
            user={user}
            artwork={artwork}
          /> 
        </ParallaxProvider>
      </div>
    </div>
  )
}

export default EditorPage