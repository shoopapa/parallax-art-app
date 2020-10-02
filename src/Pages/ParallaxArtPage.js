import React from 'react'
import '../App.css'
import { useParams } from "react-router-dom";

import ParallaxArt from '../Components/ParallaxArt'

const ParallaxArtPage = () => {
  
  const {user, artwork} = useParams()

  return (
    <ParallaxArt
      user={user}
      artwork={artwork}
    />
  )
}

export default ParallaxArtPage