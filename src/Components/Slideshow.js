import React, { useEffect } from 'react'
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import { projectFirestore } from '../firebase/config'
import useFirestore from '../hooks/useFirestore'


const Slideshow = () => {

    //Using firebase API storage, calling a google cloud URL and turning it into a regular URL and download it into the src of <img id="myimg">

    const { docs } = useFirestore('slideshowImages')

    const firebaseImages = (url) => {
        let img = document.getElementById("myimg");
        img.src = url;
    };

    let i = 0;

    if (docs.length === 8) {
        firebaseImages(docs[i].url);
    } else { console.log("Slideshow Function Error...") };

    const slideshowImageChanger = (n) => {
        i += n;
        if (i > 7) {
            i = 0
        } else if (i < 0) {
            i = 7
        };
    }

    /////////////Automatic Slideshow/////////////////////
    // const slideshowImageChanger = () => {
    //     for (let i = 0; i <= docs.length; i++) {
    //         firebaseImages(docs[i].url);

    //         if (i === 8) {
    //             i = 0;
    //         } else (console.log("Slideshow Reset Error..."))
    //     }
    // }

    // setTimeout(() => {
    //     if (docs.length === 8) {
    //         slideshowImageChanger();
    //     } else { console.log("Slideshow Function Error...") };
    // }, 4000)


    // setTimeout(
    //     () => {

    // , 4000);

    // if (docs.length === 8) {
    //     for (let i = 0; i < docs.length; i++) {
    //         setTimeout(() => {
    //             firebaseImages(docs[i].url);
    //         }, 4000);

    //         if (i === 7) {
    //             i = 0;
    //         } else (console.log("Slideshow function messed up..."));
    //     }
    // } else (console.log("Slideshow Function Error..."));


    return (
        <div>
            <Container maxWidth="sm" className="slideshow">
                <Fab onClick={() => { slideshowImageChanger(1) }} className="rightArrow"><span>&#10095;</span></Fab>
                <img id="myimg" />
                <Fab onClick={() => { slideshowImageChanger(-1) }} className="leftArrow"><span>&#10094;</span></Fab>
            </Container>

            <Container className="quote">
                <span>Photography</span> is a medium <br /> which allows you to experience life <br /> from another's perspective...
            </Container>

        </div>
    )
}

export default Slideshow
