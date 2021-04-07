import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Modal} from '@material-ui/core';
import useFirestore from '../../hooks/useFirestore'
import FadeInSections from '../FadeInSections';

const GridImagesEvents = ({openImage, handleOpen, handleClose}) => {

    const { docs } = useFirestore('gridImagesEvents')

    //Gets image URL from firebase, called in img src
    const showImage = (imageIndex) => {
    if (docs.length === 6) {
        return docs[imageIndex].url;
        };
    }

    const useStyles = makeStyles((theme) => ({
      root: {
        marginTop: 40,
        flexGrow: 1,
        },
        img: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        width: 600,
        height: 'auto',
            [theme.breakpoints.down('lg')]: {
            width: 390,
            height: 'auto',
            },
            [theme.breakpoints.down('md')]: {
            width: 550,
            height: 'auto',
            },
            [theme.breakpoints.down('sm')]: {
            width: 900,
            height: 'auto',
            },
        },

        //Modal Styles
        paper: {
            position: 'absolute',
            maxWidth: '1300px',
            transition: ".5s",
            boxShadow: theme.shadows[7],
            left: '15%',
            top: "5%",
                [theme.breakpoints.down('lg')]: {
                width: 1000,
                height: 'auto',
                },
                [theme.breakpoints.down('md')]: {
                    maxWidth: 1000,
                    height: 'auto',
                    left: '10%',
                    top: "5%",
                },
        },  
    })
);

    const classes = useStyles();


    return (
        <div className="secondSegment">

            <h1 className="sectionTitles">Events</h1>

            <div className={classes.root}>
                <FadeInSections>
                    <Grid container justify="center" spacing={2}>
                        <Grid item sm={12} md={6} lg={4} xl={4} className="gridImage">
                            <img src={showImage(0)} className={classes.img} onClick={() =>{handleOpen(7)}} alt="filler" />
                            <Modal
                            open={openImage === 7}
                            onClose={handleClose}
                            >
                                <img src={showImage(0)} className={classes.paper} alt="filler" />
                            </Modal>
                        </Grid>
                        <Grid item sm={12} md={6} lg={4} xl={4} className="gridImage">
                            <img src={showImage(1)} className={classes.img} onClick={() =>{handleOpen(8)}} alt="filler" />
                            <Modal
                            open={openImage === 8}
                            onClose={handleClose}
                            >
                                <img src={showImage(1)} className={classes.paper} alt="filler" />
                            </Modal>
                        </Grid>
                        <Grid item sm={12} md={6} lg={4} xl={4} className="gridImage">
                            <img src={showImage(2)} className={classes.img} onClick={() =>{handleOpen(9)}} alt="filler" />
                            <Modal
                            open={openImage === 9}
                            onClose={handleClose}
                            >
                                <img src={showImage(2)} className={classes.paper} alt="filler" />
                            </Modal>
                        </Grid>
                    </Grid>
                </FadeInSections>

                <FadeInSections>
                    <Grid container justify="center" spacing={2}>
                        <Grid item sm={12} md={6} lg={4} xl={4} className="gridImage">
                            <img src={showImage(3)}className={classes.img} onClick={() =>{handleOpen(10)}} alt="filler" />
                            <Modal
                            open={openImage === 10}
                            onClose={handleClose}
                            >
                                <img src={showImage(3)} className={classes.paper} alt="filler" />
                            </Modal>
                        </Grid>
                        <Grid item sm={12} md={6} lg={4} xl={4} className="gridImage">
                            <img src={showImage(4)} className={classes.img} onClick={() =>{handleOpen(11)}} alt="filler" />
                            <Modal
                            open={openImage === 11}
                            onClose={handleClose}
                            >
                                <img src={showImage(4)} className={classes.paper} alt="filler" />
                            </Modal>
                        </Grid>
                        <Grid item sm={12} md={6} lg={4} xl={4} className="gridImage">
                            <img src={showImage(5)} className={classes.img} onClick={() =>{handleOpen(12)}} alt="filler" />
                            <Modal
                            open={openImage === 12}
                            onClose={handleClose}
                            >
                                <img src={showImage(5)} className={classes.paper} alt="filler" />
                            </Modal>
                        </Grid>
                    </Grid>
                </FadeInSections>
            </div>
        </div>
    )
}


export default GridImagesEvents
