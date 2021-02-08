import React, {useState} from "react"
import './App.css';
import MenuBar from "./Components/MenuBar"
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import { LastLocationProvider } from 'react-router-last-location';
import Error from './Components/Error'
import Contact from './Components/Contact'
import Home from './Components/Home'
import FadeOutMenu from './Components/FadeOutMenu'



const App = () => {
  const [refresh, setRefresh] = useState(false);
  // const location = useLocation()

  //functions
  
  // ////Checking for route path change//////
  //   React.useEffect(() => {
  //       console.log(location);
  //   }, []);


  //JSX
  return (
    <Router>
      <LastLocationProvider>
        <div className="App">
            <FadeOutMenu>
              <MenuBar />
            </FadeOutMenu>

              <Switch>
                <Route path="/" component = {Home} exact />
                
                <Route path="/Contact" component={Contact} refresh = {refresh} setRefresh = {setRefresh}></Route>
  
                <Route component = {Error} />
              </Switch>
          </div>
        </LastLocationProvider>
    </Router>
        
  );

}

export default App;

