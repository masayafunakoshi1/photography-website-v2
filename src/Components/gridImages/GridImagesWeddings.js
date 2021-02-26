import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useFirestore from '../../hooks/useFirestore'
import FadeInSections from '../FadeInSections'
import Modal from '@material-ui/core/Modal';
import Modals from './Modals'

const GridImagesWeddings = () => {
    const { docs } = useFirestore('gridImagesWeddings')
    const [openImage, setOpenImage] = useState(0);

    const handleOpen = (x) => {
        setOpenImage(x);
    };

    const handleClose = () => {
        setOpenImage(0);
    };

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
        height: 400,
            [theme.breakpoints.down('lg')]: {
            width: 390,
            height: 'auto',
            },
            [theme.breakpoints.down('md')]: {
                width: 550,
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
    }
));

    const classes = useStyles();

    return (
        <div className="firstSegment">
                <h1 className="sectionTitles">Weddings</h1>

                <div className={classes.root}>
                <FadeInSections>
                    <Grid container justify="center" spacing={2}>
                        <Grid item sm={12} md={6} lg={4} xl={4} className="gridImage">
                            <img src={showImage(0)} className={classes.img} onClick={() =>{handleOpen(1)}} />
                            {/* Modals added to each image */}
                             <Modals
                                whichImgtoOpen={openImage}
                                handleClose={handleClose}
                             >
                                <img src={showImage(0)} className={classes.paper} />
                            </Modals>
                        </Grid>
                        <Grid item sm={12} md={6} lg={4} xl={4} className="gridImage">
                            <img src={showImage(1)} className={classes.img} onClick={() =>{handleOpen(2)}}></img>
                            <Modal
                            open={openImage === 2}
                            onClose={handleClose}
                            >
                            <img src={showImage(1)} className={classes.paper}></img>
                            </Modal>
                        </Grid>
                        <Grid item sm={12} md={6} lg={4} xl={4} className="gridImage">
                            <img src={showImage(2)} className={classes.img} onClick={() =>{handleOpen(3)}}></img>
                            <Modal
                                open={openImage === 3}
                                onClose={handleClose}
                                >
                                <img src={showImage(2)} className={classes.paper}></img>
                            </Modal>
                        </Grid>
                    </Grid>
                </FadeInSections>

                <FadeInSections>
                    <Grid container justify="center" spacing={2}>
                        <Grid item sm={12} md={6} lg={4} xl={4} className="gridImage">
                            <img src={showImage(3)} className={classes.img} onClick={() =>{handleOpen(4)}}></img>
                             <Modal
                                open={openImage === 4}
                                onClose={handleClose}
                                >
                                <img src={showImage(3)} className={classes.paper}></img>
                            </Modal>
                        </Grid>
                        <Grid item sm={12} md={6} lg={4} xl={4} className="gridImage">
                            <img src={showImage(4)} className={classes.img} onClick={() =>{handleOpen(5)}}></img>
                             <Modal
                                open={openImage === 5}
                                onClose={handleClose}
                                >
                                <img src={showImage(4)} className={classes.paper}></img>
                            </Modal>
                        </Grid>
                        <Grid item sm={12} md={6} lg={4} xl={4} className="gridImage">
                            <img src={showImage(5)} className={classes.img} onClick={() =>{handleOpen(6)}}></img>
                            <Modal
                                open={openImage === 6}
                                onClose={handleClose}
                                >
                                <img src={showImage(5)} className={classes.paper}></img>
                            </Modal>
                        </Grid>
                    </Grid>
                </FadeInSections>
                </div>
            
        </div>
    )
}

export default GridImagesWeddings
