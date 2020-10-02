import React, {useRef} from 'react'
import '../App.css'
import { useParams } from "react-router-dom";

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
  const ScrollParent = useRef(null)

  return (
    <div style={PageStyles}>
      <div style={{overflow:'hidden', height:'100%', width:'100%'}}>
        <LayerEditorStack 
          style= {{width:'50%'}}
          user={user}
          artwork={artwork}
        />
      </div>
      <div ref={ScrollParent} id="ween" style={{overflow:'scroll', height:'100%', width:'100%'}}>
        <ParallaxArt
          user={user}
          artwork={artwork}
          scrollContainer={document.getElementById('ween')}
        />
      </div>
    </div>
  )
}

export default EditorPage