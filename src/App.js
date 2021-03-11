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

