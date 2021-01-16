import React from 'react'
import Container from '@material-ui/core/Container';
import { projectFirestore } from '../firebase/config'
import useFirestore from '../hooks/useFirestore'

const Slideshow = (slideImage, setSlideImage) => {

    //Using firebase API storage, calling a google cloud URL and turning it into a regular URL and download it into the src of <img id="myimg">

    const { docs } = useFirestore('slideshowImages')

    const firebaseImages = (url) => {
        let img = document.getElementById("myimg");
        img.src = url;
    };

    if (docs.length === 8) {
        firebaseImages(docs[2].url);
    } else { console.log("Slideshow Function Error...") };


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



    //Getting single document from firebase storage
    // const firebaseImages = (gsUrl) => {
    //     gsUrl.getDownloadURL().then(function (url) {
    //         let img = document.getElementById("myimg");
    //         img.src = url;
    //     }).catch(function (err) {
    //         console.log(err)
    //     })
    // };
    // firebaseImages(gsRefSlideshow);


    return (
        <div>
            <Container maxWidth="sm" className="slideshow">
                <img id="myimg" />
            </Container>

            <Container className="quote">
                <span>Photography</span> is a medium <br /> which allows you to experience life <br /> from another's perspective...
            </Container>

        </div>
    )
}

export default Slideshow
