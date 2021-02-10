import React, {useState} from 'react'
import {useLocation} from 'react-router-dom'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import useFirestore from '../hooks/useFirestore'


const Slideshow = () => {
    //Using firebase API storage, calling a google cloud URL and turning it into a regular URL and download it into the src of <img id="myimg">
    // const [slideIndex, setSlideIndex] = useState(0)

    const { docs } = useFirestore('slideshowImages')
    let slideIndex = 0

    const location = useLocation();
    console.log(location)

    //Adds mutable level to the firestore urls
    const arrOfDocs = [...docs]
    console.log(arrOfDocs)
    
    
    //Show image from Firestore API after if() is fulfilled
    const showSlides = () => {
    if(arrOfDocs.length === 8){
        firebaseImages(arrOfDocs[slideIndex].url);
        }
    }

    //Allows user to manually change the slideshow with arrows, also lets slideshow to change automatically with settimeout function call
    const slideshowImageChanger = async (n) => {
        slideIndex += n;
        console.log(location.pathname);
    if (slideIndex > 7) {
        slideIndex = 0
    } else if (slideIndex < 0) {
        slideIndex = 7
    };
    await showSlides();
    }


    const firebaseImages = (url) => {
        let img = document.getElementById("myimg");
        console.log("image changed2");
        if(location.pathname === "/"){
            img.src = url;
        } else if (location.pathname !== "/"){
            img.src = "https://firebasestorage.googleapis.com/v0/b/photography-website-v2.appspot.com/o/slideshow-images%2FKevin%26Patricia2.jpg?alt=media&token=f46a6ba2-4452-4ef0-a5fe-1f18a0ff5c55"
        }
        
    };


    // Automatic Slideshow (5 second timer, adds 1 to the slideIndex per 5 seconds)
    let timer;
    const setTimer = () => {
        timer = setTimeout(autoSlideshowImageChanger, 5000)
        console.log("Set Timer")
    }

    const stopTimer = () => {
    clearTimeout(timer)
    console.log("Stopped timer")
    }

    const autoSlideshowImageChanger = () => {
        slideshowImageChanger(1);
        setTimer();
    };
        setTimeout(autoSlideshowImageChanger, 100);


    //Styles Material UI Slideshow
    const useStyles = makeStyles((theme) => ({
        container: {
        width: 1000,
        alignItems: "center",
        justifyContent: "center",
        },
    }
));

    const classes = useStyles();

    return (
        <div className="slideshowSegment">
            <Container className="slideshow" className={classes.container}>
                <Fab onClick={() => { slideshowImageChanger(1) }} className="rightArrow"><span>&#10095;</span></Fab>
                    <img id="myimg"/>
                <Fab onClick={() => { slideshowImageChanger(-1) }} className="leftArrow"><span>&#10094;</span></Fab>
            </Container>

            <Container className="quote">
                <span>Photography</span> is a medium <br /> which allows you to experience life <br /> from another's perspective...
            </Container>
        </div>
    )
}

export default Slideshow
