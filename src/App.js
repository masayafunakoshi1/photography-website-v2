import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
// import { LastLocationProvider } from 'react-router-last-location';
// import FadeOutMenu from './Components/FadeOutMenu'
import Error from "./Components/Error";
import FreqAskQuestions from "./Components/FreqAskQuestions";
import Events from "./Components/galleries/Events";
import Nature from "./Components/galleries/Nature";
import Portraits from "./Components/galleries/Portraits";
import Weddings from "./Components/galleries/Weddings";
import Home from "./Components/Home";
import MenuBar from "./Components/MenuBar";

const App = () => {
  useEffect(() => {
    document.title = "Funakoshi Photography";
  }, []);

  //JSX
  return (
    <Router>
      <div className="App">
        {/* <FadeOutMenu> */}
        <MenuBar />
        {/* </FadeOutMenu> */}
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/Weddings" component={Weddings}></Route>
          <Route path="/Events" component={Events}></Route>
          <Route path="/Nature" component={Nature}></Route>
          <Route path="/Portraits" component={Portraits}></Route>

          <Route path="/Contact" component={Contact}></Route>
          <Route path="/FreqAskQuestions" component={FreqAskQuestions}></Route>
          <Route path="/About" component={About}></Route>

          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
