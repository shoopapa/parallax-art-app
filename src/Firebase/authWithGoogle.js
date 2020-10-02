import {firebase,provider} from './firebase'

const authWithGoogle = () => {
  firebase.auth().signInWithPopup(provider).then(function(result) {
  }).catch((error) => {
    const {errorCode, errorMessage, email,credential} = error
    console.log(errorCode, errorMessage, email, credential)
  });
}

export default authWithGoogle