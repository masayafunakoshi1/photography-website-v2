import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {GridList, GridListTile, Modal} from '@material-ui/core'

import ScrollToTop from '../ScrollToTop'
import imgData from './images/NatureImgs'
import FadeInSections from '../FadeInSections'
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


const Nature = () => {
    const classes = useStyles();

    return (
      <div className={classes.root}>

        <ScrollToTop />

        <GridListComp imgData={imgData} />
        
    </div>
    )
}

export default Nature


