import React from 'react'
import { Parallax } from 'react-scroll-parallax';

const Layer = ({x, y, top, left, scale, src, onload, children}) => {

  return (
    <Parallax   
      y={y} 
      x={x} 
      styleOuter={{position:'absolute', display:"flex", width:`${100*scale}vh`, height:`${100*scale}vh`, top:`${top - (50*scale)}vh`,overflow:'hidden'}}
      styleInner={{display:'flex', justifyContent:"center", width:"100%", height:'100%',overflow:'hidden'}}
    >
        {src? <img src={src} style={{height:'100%'}} alt='window' onLoad={onload}/> : children}
    </Parallax>
  )
}

export default Layer