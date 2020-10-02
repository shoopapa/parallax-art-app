import {db} from '../../Firebase/firebase'
 
const getLayers = async (path) => {
 const layersCollection = db.collection(path);
 const ret = {}
 try {
   const layers = await layersCollection.get()
   const layersRet = []
   layers.forEach(l=>{
     if (l.id === "options"){
       ret.options = l.data()
     } else {
       layersRet.push(l.data())
     }
   })
   // ret.layers = layersRet
   ret.layers = layersRet.sort((a,b) => a.layerOrder < b.layerOrder)
   return ret
 } catch (e) {
   console.log(e)
 }
 
}

export default getLayers
