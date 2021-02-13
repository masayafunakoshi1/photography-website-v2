import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import useFirestore from '../hooks/useFirestore'


const Slideshow = () => {
    //Using firebase API storage, calling a google cloud URL and turning it into a regular URL and download it into the src of <img id="myimg">
    const { docs } = useFirestore('slideshowImages')
    const [slideIndex, setSlideIndex] = useState(0)
    

    //Adds mutable level to the firestore urls
    const arrOfDocs = [...docs]


    //Show image from Firestore API after if() is fulfilled
    const showSlides = () => {
    if(arrOfDocs.length === 8){
        firebaseImages(arrOfDocs[slideIndex].url);
        }
    }

    const firebaseImages = (url) => {
        let img = document.getElementById("myimg");
        console.log("image changed2")
            img.src = url; 
    };

    
        //Allows user to manually change the slideshow with arrows, also lets slideshow to change automatically with settimeout function call
    const slideshowImageChanger = async (n) => {
        setSlideIndex(slideIndex + n)

        console.log(slideIndex)
        showSlides();
    }

    if (slideIndex > 7) {
        setSlideIndex(slideIndex - 8)
    } else if (slideIndex < 0) {
        setSlideIndex(slideIndex + 7)
    };


    // Automatic Slideshow (5 second timer, adds 1 to the slideIndex per 5 seconds)

    useEffect(() => {
        slideshowImageChanger(1)
        console.log('useEffect 2 ran')
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("useEffect ran")
            slideshowImageChanger(1);
        }, 4000);
        return() => clearTimeout(timer)
    }, [slideIndex])


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
