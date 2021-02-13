import React, {useState, useEffect} from "react"
import './App.css';
import MenuBar from "./Components/MenuBar"
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import { LastLocationProvider } from 'react-router-last-location';
import Error from './Components/Error'
import Contact from './Components/Contact'
import Home from './Components/Home'
import FadeOutMenu from './Components/FadeOutMenu'



const App = () => {
  // const [refresh, setRefresh] = useState(false);
  // const location = useLocation()

  //functions

  //Attempting to make page refresh when refresh state is "true"

  // const handleRefresh = () => {
  //       window.location.reload();
  // }

  // const refreshCheck = () => {
  //   if(refresh){
  //     handleRefresh();
  //     setRefresh(false);
  //   } else {
  //     console.log("No Refresh")
  //   }
  // }


  //JSX
  return (
    <Router>
      <LastLocationProvider>
        <div className="App">
            <FadeOutMenu>
              <MenuBar />
            </FadeOutMenu>

              <Switch>
                <Route exact path="/" component = {Home} />
                
                <Route path="/Contact" component = {Contact}></Route>
  
                <Route component = {Error} />
              </Switch>
          </div>
        </LastLocationProvider>
    </Router>
        
  );

}

export default App;

