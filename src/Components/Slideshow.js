import React, { useEffect } from 'react'
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import { projectFirestore } from '../firebase/config'
import useFirestore from '../hooks/useFirestore'


const Slideshow = () => {

    //Using firebase API storage, calling a google cloud URL and turning it into a regular URL and download it into the src of <img id="myimg">

    const { docs } = useFirestore('slideshowImages')

    let slideIndex = 0;

    const firebaseImages = (url) => {
        let img = document.getElementById("myimg");
        img.src = url;
    };

    const showSlides = () => {
        if (docs.length === 8) {
            firebaseImages(docs[slideIndex].url);
        };
    }
    showSlides();

    const slideshowImageChanger = async (n) => {
        slideIndex += n;
        if (slideIndex > 7) {
            slideIndex = 0
        } else if (slideIndex < 0) {
            slideIndex = 7
        };
        showSlides();
        // await clearInterval();
        // await setInterval(autoSlideshowImageChanger, 5000);
    }

    //Automatic Slideshow (5 second timer, adds 1 to the slideIndex per 5 seconds)
    const autoSlideshowImageChanger = () => {
        slideshowImageChanger(1);
        console.log("image changed")
    };

    let auto = setInterval(autoSlideshowImageChanger, 5000);


    // //Stopping Auto-Slideshow
    // const stopAuto = () => {
    //     clearInterval(auto)
    // };




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
