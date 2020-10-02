import React, {useState} from 'react'

import {Slider} from '@material-ui/core';


const LayerEditor = ({x,y,top, scale, src}) => {

  const [xSlider, setxSlider] = useState(x)
  const [ySlider, setySlider] = useState(y)


  return (
    <div style={{padding:5}}>

      <Slider
        value={xSlider}
        min={-100}
        max={100}
        onChange={(e,v)=>setxSlider(v)}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={(v) => `${v}`}
      />
      <Slider
        value={ySlider}
        min={-100}
        max={100}
        onChange={(e,v)=>setySlider(v)}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={(v) => `${v}`}
      />
      <p> top {top}, scale {scale}</p>
    </div>
  )
}

export default LayerEditor