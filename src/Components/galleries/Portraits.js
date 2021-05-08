import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import ScrollToTop from '../ScrollToTop'
import imgData from './images/PortraitImgs'
import '../styles/GalleryStyles.css'

import GridListComp from './GridListComp'


 const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: theme.palette.background.paper,
        maxWidth: '100vw',
    },
    
  }));


const Portraits = () => {
  const classes = useStyles();

    return (
      <div className={classes.root}>

        <ScrollToTop />

        <GridListComp imgData={imgData}/>
        
    </div>
    )
}

export default Portraits
