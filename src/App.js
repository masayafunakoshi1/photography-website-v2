import React, { useState } from "react"
import './App.css';
import Slideshow from './Components/Slideshow';
import { } from './firebase/config'
import MenuBar from "./Components/MenuBar"
import GridImagesWeddings from "./Components/gridImages/GridImagesWeddings"
import GridImagesEvents from "./Components/gridImages/GridImagesEvents"
import GridImagesPersonal from "./Components/gridImages/GridImagesPersonal"


function App() {

  //functions

  //JSX
  return (
      <div>
        <MenuBar />
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

