import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { NavLink } from "react-router-dom";
import useFirestore from "../../hooks/useFirestore";
import FadeInSections from "../FadeInSections";

const GridImagesWeddings = ({ openImage, handleOpen, handleClose }) => {
  const { docs } = useFirestore("gridImagesWeddings");

  //Gets image URL from firebase, called in img src
  const showImage = (imageIndex) => {
    if (docs.length === 6) {
      return docs[imageIndex].url;
    }
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: 40,
      flexGrow: 1,
    },
    img: {
      display: "flex",
      width: 600,
      height: 400,
      [theme.breakpoints.down("lg")]: {
        width: 390,
        height: "auto",
      },
      [theme.breakpoints.down("md")]: {
        width: 550,
        height: "auto",
      },
      [theme.breakpoints.down("sm")]: {
        width: 360,
        height: "auto",
      },
      [theme.breakpoints.down("xs")]: {
        width: 270,
        height: "auto",
      },
    },
    //Modal Styles
    paper: {
      position: "absolute",
      maxWidth: "1300px",
      transition: ".5s",
      boxShadow: theme.shadows[7],
      left: "17%",
      top: "10%",
      [theme.breakpoints.down("lg")]: {
        width: 1000,
        height: "auto",
      },
      [theme.breakpoints.down("md")]: {
        maxWidth: 1000,
        height: "auto",
        left: "10%",
        top: "5%",
      },
      [theme.breakpoints.down("sm")]: {
        maxWidth: 600,
        height: "auto",
        left: "20%",
        top: "10%",
      },
      [theme.breakpoints.down("xs")]: {
        maxWidth: 360,
        height: "auto",
        left: "5%",
        top: "30%",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className="firstSegment">
      <h1 className="sectionTitles">
        <NavLink to="/Weddings"> Weddings </NavLink>
      </h1>

      <div className={classes.root}>
        <FadeInSections>
          {/* Trying to figure out how to make Modal component reusable. (DRY) */}

          {/* <Grid container justify="center" spacing={2}>
                    <Grid item sm={12} md={6} lg={4} xl={4} className="gridImage">
                        <img src={showImage(galleryImgNum)} className={classes.img} onClick={() =>{handleOpen(0)}} />
                        <Modals galleryImgNum={galleryImgNum} setGalleryImgNum={0} openImage={openImage} setOpenImage={setOpenImage}>
                            <img src={showImage(openImage)} className={classes.paper} />
                        </Modals>
                    </Grid> */}

          <Grid container justify="center" spacing={2}>
            <Grid item sm={12} md={6} lg={4} xl={4} className="gridImage">
              {/* Grid img shown with "classes" style. handle open making openImage = 1 */}
              <img
                src={showImage(0)}
                className={classes.img}
                onClick={() => {
                  handleOpen(1);
                }}
                alt="filler"
              />
              {/* Modal design, opens (if openImage === 1) then closes by (setOpenImage = 0)*/}
              <Modal open={openImage === 1} onClose={handleClose}>
                {/* Modal img shown, first firebase img (docs[0])*/}
                <img
                  src={showImage(0)}
                  className={classes.paper}
                  alt="filler"
                />
              </Modal>
            </Grid>

            <Grid item sm={12} md={6} lg={4} xl={4} className="gridImage">
              <img
                src={showImage(1)}
                className={classes.img}
                onClick={() => {
                  handleOpen(2);
                }}
                alt="filler"
              />
              <Modal open={openImage === 2} onClose={handleClose}>
                <img
                  src={showImage(1)}
                  className={classes.paper}
                  alt="filler"
                />
              </Modal>
            </Grid>

            <Grid item sm={12} md={6} lg={4} xl={4} className="gridImage">
              <img
                src={showImage(2)}
                className={classes.img}
                onClick={() => {
                  handleOpen(3);
                }}
                alt="filler"
              />
              <Modal open={openImage === 3} onClose={handleClose}>
                <img
                  src={showImage(2)}
                  className={classes.paper}
                  alt="filler"
                />
              </Modal>
            </Grid>
          </Grid>
        </FadeInSections>

        <FadeInSections>
          <Grid container justify="center" spacing={2}>
            <Grid item sm={12} md={6} lg={4} xl={4} className="gridImage">
              <img
                src={showImage(3)}
                className={classes.img}
                onClick={() => {
                  handleOpen(4);
                }}
                alt="filler"
              />
              <Modal open={openImage === 4} onClose={handleClose}>
                <img
                  src={showImage(3)}
                  className={classes.paper}
                  alt="filler"
                />
              </Modal>
            </Grid>
            <Grid item sm={12} md={6} lg={4} xl={4} className="gridImage">
              <img
                src={showImage(4)}
                className={classes.img}
                onClick={() => {
                  handleOpen(5);
                }}
                alt="filler"
              />
              <Modal open={openImage === 5} onClose={handleClose}>
                <img
                  src={showImage(4)}
                  className={classes.paper}
                  alt="filler"
                />
              </Modal>
            </Grid>
            <Grid item sm={12} md={6} lg={4} xl={4} className="gridImage">
              <img
                src={showImage(5)}
                className={classes.img}
                onClick={() => {
                  handleOpen(6);
                }}
                alt="filler"
              />
              <Modal open={openImage === 6} onClose={handleClose}>
                <img
                  src={showImage(5)}
                  className={classes.paper}
                  alt="filler"
                />
              </Modal>
            </Grid>
          </Grid>
        </FadeInSections>
      </div>
    </div>
  );
};

export default GridImagesWeddings;
