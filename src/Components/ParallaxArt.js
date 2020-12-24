import React, {useLayoutEffect} from 'react'
import '../App.css'
import {useController, ParallaxProvider } from 'react-scroll-parallax';
import parse from 'html-react-parser';

import Layer from './Layer'
import {db} from '../Firebase/firebase'
import { useCollection } from 'react-firebase-hooks/firestore';

//possible create more user friendly conrtoll, not a fan of x=[133,32] but for now leaving as to get Min prod
const artStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  position: 'relative',
  overflowY: 'scroll',
}

const Artdefualts = {
  backgroundColor:'#000a13',
  width:'100%',
  height: '270vh'
}

const ParallaxArt = ({styles, user, artwork }) => {

  const [snapshot, loading, error] = useCollection(db.collection(`/users/${user}/${artwork}`));

  return (
    //...snapshot.options
    <div style={{...artStyles, ...Artdefualts, ...styles}}>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {snapshot && (
        snapshot.docs.map(l=>{
          l=l.data()
          return (
          <Layer key={l.imageUrl} x={l.x} y={l.y} top={l.top} scale={l.scale|| 1} src={l.imageUrl}>
            {l.html && parse(l.html)}
          </Layer>
          )
        })
      )}
    </div>
 
  )
}

const ProvidedArt = (props) => {
  const { parallaxController } = useController();
  window.onresize = () => {
    parallaxController.update()
  } 
  useLayoutEffect(() => {
      window.addEventListener('load', () => parallaxController.update());
      return () => window.removeEventListener('load', () => parallaxController.update());
  }, [parallaxController]);
  
  return (
    <ParallaxArt {...props} />
  )
}
//shits not working when wraping it in a div. fix it so that the div in parllax art is the scorll parent not the body tag.
// const Art = (props) => {
//   console.log(props)
//   return (
//   <ParallaxProvider
//     scrollContainer={props.scrollContainer}
//   >
//     <ProvidedArt {...props} />
//   </ParallaxProvider>
//   )
// }

export default ProvidedArt