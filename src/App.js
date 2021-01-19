import React, { useState } from "react"
import './App.css';
import Slideshow from './Components/Slideshow';
import { } from './firebase/config'
import MenuBar from "./Components/MenuBar"
import GridImages from "./Components/GridImages"



function App() {

  //functions

  //JSX
  return (
    <div>
      <MenuBar />
      <div>
        <Slideshow />
        <GridImages />
      </div>
    </div>
  );

}

export default App;

