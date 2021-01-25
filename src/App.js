import React, { useState } from "react"
import './App.css';
import Slideshow from './Components/Slideshow';
import { } from './firebase/config'
import MenuBar from "./Components/MenuBar"
import GridImagesWeddings from "./Components/gridImages/GridImagesWeddings"
import GridImagesEvents from "./Components/gridImages/GridImagesEvents"
import GridImagesPersonal from "./Components/gridImages/GridImagesPersonal"
import FadeOutMenu from './Components/FadeOutMenu'


function App() {

  //functions
 

  //JSX
  return (
      <div className="App">
        <FadeOutMenu>
          <MenuBar />
        </FadeOutMenu>
        <div>
          <Slideshow />
          <GridImagesWeddings />
          <GridImagesEvents />
          <GridImagesPersonal />
        </div>
      </div>
  );

}

export default App;

