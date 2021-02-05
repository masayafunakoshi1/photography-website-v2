import React, {useEffect} from 'react'
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
    
    const location = useLocation()

     ///////Checking for route path change//////////

    // const changeLocation = () => {
    //     if(location.pathname !== "/"){
    //         stopTimer();
    //     }
    // }

    //   useEffect(() => {
    //     console.log('Location changed');
    // }, [changeLocation]);

     
    //Show image from Firestore API after if() is fulfilled.
    const showSlides = () => {
        if (docs.length === 8) {
            firebaseImages(docs[slideIndex].url);
            }
    }

    const firebaseImages = (url) => {
        console.log(location.pathname)
        let img = document.getElementById("myimg");
        img.src = url;
    };

    //Allows user to manually change the slideshow with arrows, also lets slideshow to change automatically with settimeout function call
    const slideshowImageChanger = async (n) => {
            slideIndex += n
        if (slideIndex > 7) {
            slideIndex = 0
        } else if (slideIndex < 0) {
            slideIndex = 7
        };
        await showSlides();
    }
    

    //Automatic Slideshow (5 second timer, adds 1 to the slideIndex per 5 seconds)
    let timer;
    const setTimer = () => {
        timer = setTimeout(autoSlideshowImageChanger, 5000)
    }

    const stopTimer = () => {
       clearTimeout(timer)
    }

    const autoSlideshowImageChanger = () => {
        slideshowImageChanger(1);
        console.log("image changed");
        if(location.pathname === "/"){
            setTimer()
        } else if (location.pathname !== "/") {
            stopTimer()
        }
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
