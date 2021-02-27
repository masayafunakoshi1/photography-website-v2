import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
// import useFirestore from '../../hooks/useFirestore'
import Modal from '@material-ui/core/Modal';

const Modals = (props, galleryImgNum, openImage, setOpenImage) => {
    // const { docs } = useFirestore('gridImagesWeddings')

    const handleClose = () => {
    setOpenImage(10);
    };

    const handleGalleryImg = () => {
    }

    // //Gets image URL from firebase, called in img src
    // const showImage = (imageIndex) => {
    // if (docs.length === 6) {
    //     return docs[imageIndex].url;
    //     };
    // }

    const useStyles = makeStyles((theme) => ({
        // root: {
        // marginTop: 40,
        // flexGrow: 1,
        // },
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
    <div>
        {/* Modals added to each image */}

        <Modal
            open={openImage === galleryImgNum}
            onClose={handleClose}
        >
            {props.children}
        </Modal>

        
        {/* <img src={showImage(0)} className={classes.paper} /> */}
    </div>
    );
}

export default Modals
