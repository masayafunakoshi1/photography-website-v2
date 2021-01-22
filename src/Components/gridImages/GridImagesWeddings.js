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
        },
    }));

    const classes = useStyles();


    return (
        <div className="firstSegment">
                <h1 className="sectionTitles">Weddings</h1>

                <div className={classes.root}>
                    <FadeInSections>
                        <Grid container justify="center" spacing={3}>
                            <Grid item xs={12} sm={6} md={4}>
                                <img src={showImage(0)} className="gridImage" className={classes.img}></img>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <img src={showImage(1)} className="gridImage" className={classes.img}></img>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <img src={showImage(2)} className="gridImage" className={classes.img}></img>
                            </Grid>
                        </Grid>
                    </FadeInSections>

                    <FadeInSections>
                        <Grid container justify="center" spacing={3}>
                            <Grid item xs={12} sm={6} md={4}>
                                <img src={showImage(3)} className="gridImage" className={classes.img}></img>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <img src={showImage(4)} className="gridImage" className={classes.img}></img>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <img src={showImage(5)} className="gridImage" className={classes.img}></img>
                            </Grid>
                        </Grid>
                    </FadeInSections>
                </div>
            
        </div>
    )
}

export default GridImagesWeddings
