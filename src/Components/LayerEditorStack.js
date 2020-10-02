import React from 'react'
import LayerEditor from './LayerEditor'
import {db} from '../Firebase/firebase'
import { useCollection } from 'react-firebase-hooks/firestore';


//set up get subscribe feateaure this needs to go ino the art viewer page, the idea is to make this post data when updated and have the \
//viewer just subscribe when in the editor that way the components can be completly seperate while still reading live data.

const LayerEditorStack = ({user,artwork}) => {

  const [snapshot] = useCollection(db.collection(`/users/${user}/${artwork}`));
  
  return (
    <div style={{padding:30,width:'50%'}}>
      {snapshot && snapshot.docs.map(l=>{
        const id=l.id
        l=l.data()
        return <LayerEditor key={id} x={l.x} y={l.y} top={l.top} scale={l.scale|| 1} src={l.imageUrl} />
      })}
    </div>
  )
}

export default LayerEditorStack