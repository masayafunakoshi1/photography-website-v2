import React from "react"
import Slideshow from './Slideshow';
import GridImagesWeddings from "./gridImages/GridImagesWeddings"
import GridImagesEvents from "./gridImages/GridImagesEvents"
import GridImagesPersonal from "./gridImages/GridImagesPersonal"



const Home = () => {

  //functions
 

  //JSX
  return (
      <div className="App">
        <div>
            <Slideshow />
            <GridImagesWeddings />
            <GridImagesEvents />
            <GridImagesPersonal />
            </div>
        </div>    
  );

}

export default Home;
