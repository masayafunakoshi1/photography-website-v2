import React, {useState} from "react"
import Slideshow from './Slideshow';
import GridImagesWeddings from "./gridImages/GridImagesWeddings"
import GridImagesEvents from "./gridImages/GridImagesEvents"
import GridImagesPersonal from "./gridImages/GridImagesPersonal"




const Home = () => {
  const [openImage, setOpenImage] = useState(0);

  //functions
 
  const handleOpen = (x) => {
      setOpenImage(x);
  };

  const handleClose = () => {
      setOpenImage(0);
  };


  //JSX
  return (
      <div className="App">
        <div>
            <Slideshow />
            <GridImagesWeddings 
              openImage={openImage} 
              handleOpen={handleOpen} 
              handleClose={handleClose}
              />
            <GridImagesEvents 
              openImage={openImage} 
              handleOpen={handleOpen} 
              handleClose={handleClose}
              />
            <GridImagesPersonal 
              openImage={openImage} 
              handleOpen={handleOpen} 
              handleClose={handleClose}
              />
        </div>
      </div>    
  );

}

export default Home;
