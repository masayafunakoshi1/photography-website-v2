import React from "react"
import './App.css';
import MenuBar from "./Components/MenuBar"
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
// import { LastLocationProvider } from 'react-router-last-location';
// import FadeOutMenu from './Components/FadeOutMenu'

import Error from './Components/Error'
import Home from './Components/Home'
import Contact from './Components/Contact'
import FreqAskQuestions from "./Components/FreqAskQuestions";
import About from './Components/About'

import Weddings from './Components/galleries/Weddings'
import Events from './Components/galleries/Events'
import Nature from './Components/galleries/Nature'
import ScrollToTop from './Components/ScrollToTop'



const App = () => {

  //JSX
  return (
    <Router>
        <div className="App">
        
            {/* <FadeOutMenu> */}
              <MenuBar />
            {/* </FadeOutMenu> */}
              <Switch>
                <Route exact path="/" component = {Home} />

                <Route path="/Weddings" component = {Weddings}></Route>
                <Route path="/Events" component = {Events}></Route>
                <Route path="/Nature" component = {Nature}></Route>


                <Route path="/Contact" component = {Contact}></Route>
                <Route path="/FreqAskQuestions" component = {FreqAskQuestions}></Route>
                <Route path="/About" component = {About}></Route>
  
                <Route component = {Error} />
              </Switch>
          </div>
    </Router>
        
  );

}

export default App;

