import { GridList, GridListTile, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import FadeInSections from "../FadeInSections";
import "../styles/GalleryStyles.css";

const useStyles = makeStyles((theme) => ({
  gridList: {
    width: "100%",
    height: "100%",
  },
  imgs: {
    width: "100%",
    height: "100%",
  },
  modalStyle: {
    position: "absolute",
    maxWidth: "1300px",
    transition: ".5s",
    boxShadow: theme.shadows[7],
    left: "15%",
    top: "5%",
    [theme.breakpoints.down("lg")]: {
      width: 1000,
      height: "auto",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: 800,
      height: "auto",
      left: "10%",
      top: "5%",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 600,
      height: "auto",
      left: "12%",
      top: "5%",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 360,
      height: "auto",
      left: "7%",
      top: "30%",
    },
  },
  modalStylePortrait: {
    position: "absolute",
    maxHeight: 850,
    width: "auto",
    transition: ".5s",
    boxShadow: theme.shadows[7],
    left: "35%",
    top: "4%",
    [theme.breakpoints.down("lg")]: {
      width: "auto",
      height: 850,
    },
    [theme.breakpoints.down("md")]: {
      width: "auto",
      maxHeight: 750,
      left: "30%",
      top: "5%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      maxHeight: 550,
      left: "25%",
      top: "5%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      maxHeight: 480,
      left: "13%",
      top: "10%",
    },
  },
}));

const GridListComp = ({ imgData }) => {
  const [openImgGall, setOpenImgGall] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [portrait, setPortrait] = useState(false);
  const [imgVisible, setImgVisible] = useState(false);
  const classes = useStyles();

  const nocontext = (e) => {
    let clickedTag = e === null ? e.srcElement.tagName : e.target.tagName;
    if (clickedTag === "IMG") return false;
  };
  document.oncontextmenu = nocontext;

  const handleOpen = (src) => {
    if (src.featured) {
      setPortrait(true);
    }
    setOpenImgGall(src.imageUrl);
    setIsOpen(true);
  };

  const handleClose = () => {
    setOpenImgGall("");
    setPortrait(false);
    setIsOpen(false);
  };

  return (
    <div>
      <GridList cols={3}>
        {imgData.map((item) => (
          <GridListTile
            rows={item.featured ? 4.5 : 2.5}
            key={item.title}
            className="galleryImg"
          >
            <FadeInSections>
              <img
                className={`${classes.imgs} smooth-image image-${
                  imgVisible ? "visible" : "hidden"
                }`}
                onLoad={() => setImgVisible(true)}
                srcSet={item.imageUrl}
                alt={<h3>item.description</h3>}
                onClick={() => handleOpen(item)}
              />
            </FadeInSections>
          </GridListTile>
        ))}
      </GridList>

      <Modal open={isOpen} onClose={handleClose}>
        <img
          className={
            !portrait ? classes.modalStyle : classes.modalStylePortrait
          }
          src={openImgGall}
        />
      </Modal>
    </div>
  );
};

export default GridListComp;