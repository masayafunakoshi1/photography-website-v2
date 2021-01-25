import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useFirestore from '../../hooks/useFirestore'
import FadeInSections from '../FadeInSections'

const GridImagesWeddings = () => {
    const { docs } = useFirestore('gridImagesWeddings')

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
            width: 480,
            height: 280,
            },
            [theme.breakpoints.down('md')]: {
            width: 980,
            height: 780,
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
                        <Grid item md={12} lg={6} xl={4} className="gridImage">
                            <img src={showImage(0)} className={classes.img}></img>
                        </Grid>
                        <Grid item md={12} lg={6} xl={4} className="gridImage">
                            <img src={showImage(1)} className={classes.img}></img>
                        </Grid>
                        <Grid item md={12} lg={6} xl={4} className="gridImage">
                            <img src={showImage(2)} className={classes.img}></img>
                        </Grid>
                    </Grid>
                </FadeInSections>

                <FadeInSections>
                    <Grid container justify="center" spacing={2}>
                        <Grid item md={12} lg={6} xl={4} className="gridImage">
                            <img src={showImage(3)} className={classes.img}></img>
                        </Grid>
                        <Grid item md={12} lg={6} xl={4} className="gridImage">
                            <img src={showImage(4)} className={classes.img}></img>
                        </Grid>
                        <Grid item md={12} lg={6} xl={4} className="gridImage">
                            <img src={showImage(5)} className={classes.img}></img>
                        </Grid>
                    </Grid>
                </FadeInSections>
                </div>
            
        </div>
    )
}

export default GridImagesWeddings
