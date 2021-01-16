import React, { useState } from "react"
import './App.css';
import Slideshow from './Components/Slideshow';
import { } from './firebase/config'
import MenuBar from "./Components/MenuBar"
import GridImages from "./Components/GridImages"



function App() {
  //hooks
  const [slideImage, setSlideImage] = useState([])

  //functions

  //JSX
  return (
    <div>
      <MenuBar />
      <div>
        <Slideshow slideImage={slideImage} setSlideImage={setSlideImage} />
        <GridImages />
      </div>
    </div>
  );

}

export default App;

