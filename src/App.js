import React from "react"
import './App.css';
import MenuBar from "./Components/MenuBar"
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import Error from './Components/Error'
import Contact from './Components/Contact'
import Home from './Components/Home'
import FadeOutMenu from './Components/FadeOutMenu'



const App = () => {
  // const location = useLocation()

  //functions
  
  // ////Checking for route path change//////
  //   React.useEffect(() => {
  //       console.log(location);
  //   }, []);


  //JSX
  return (
    <BrowserRouter>
      <div className="App">
          <FadeOutMenu>
            <MenuBar />
          </FadeOutMenu>

            <Switch>
              <Route path="/" component = {Home} exact />
              <Route path="/Contact" component={Contact}></Route>
              <Route component = {Error} />
            </Switch>
        </div>
    </BrowserRouter>
        
  );

}

export default App;

