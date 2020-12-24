import React from 'react';
import './App.css';
import authWithGoogle from './Firebase/authWithGoogle.js'
import ParallaxAppBar from './Components/ParallaxAppBar.js'

//pages
import Home from './Pages/Home.js'
import ParallaxArtPage from './Pages/ParallaxArtPage'
import EditorPage from './Pages/EditorPage'


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  return (
    <div className="App">
      {/* <ParallaxAppBar 
        login={()=>authWithGoogle()}
      /> */}
      <Router>
        <Switch>
          <Route path="/art/:user/:artwork">
           <ParallaxArtPage />
          </Route>
          <Route path="/edit/:user/:artwork">
           <EditorPage />
          </Route>
          <Route path="/">
           <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
