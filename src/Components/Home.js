import React, { useState } from "react";
import GridImagesEvents from "./gridImages/GridImagesEvents";
import GridImagesPersonal from "./gridImages/GridImagesPersonal";
import GridImagesWeddings from "./gridImages/GridImagesWeddings";
import Slideshow from "./Slideshow";

const Home = () => {
  const [openImage, setOpenImage] = useState(0);

  //functions

  const handleOpen = (x) => {
    setOpenImage(x);
  };

  const handleClose = () => {
    setOpenImage(0);
  };

  //Disables right click on imgs
  const nocontext = (e) => {
    let clickedTag = e === null ? e.srcElement.tagName : e.target.tagName;
    if (clickedTag === "IMG") return false;
  };
  document.oncontextmenu = nocontext;

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
};

export default Home;
