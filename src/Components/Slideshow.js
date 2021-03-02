import React, {useState, useEffect} from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import useFirestore from '../hooks/useFirestore'
import Loading from './Loading';


const Slideshow = () => {
    //Using firebase API storage, calling a google cloud URL and turning it into a regular URL and download it into the src of <img id="myimg">
    const { docs } = useFirestore('slideshowImages');
    const [slideIndex, setSlideIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    

    //Show image from Firestore API after if() is fulfilled
    const showSlides = () => {
        if(docs.length === 8){
            firebaseImages(docs[slideIndex].url);
            console.log("Loaded length 8");
            } else {
                console.log('error')
            }
        imageFadeIn();
    }

    const firebaseImages = (url) => {
        document.getElementById("myimg").src = url;
        console.log("image changed showed")
        setIsLoading(false)
    };

    
     //Allows user to manually change the slideshow with arrows, also lets slideshow to change automatically with settimeout function call
    const slideshowImageChanger = (n) => {
        setSlideIndex(slideIndex + n)
        console.log(slideIndex)
        showSlides(); 
    }

    if (slideIndex > 7) {
        setSlideIndex(slideIndex - 8)
    } else if (slideIndex < 0) {
        setSlideIndex(slideIndex + 7)
    };


    //Adds "Visible" class to image to make it fade-in, then removes class to fade-out
    const imageFadeIn = () => {
        let img = document.getElementById("myimg");
        img.classList.add('Visible')
        console.log("class added")
        setTimeout(() => {
                img.classList.remove("Visible")
                console.log("class removed")
            }, 4500); //Removes visibility every 4.5 seconds taking the remaining 1.5 seconds to transition (img to white, white to next img)
    }

    ///Hides arrows until image is loaded

    const rightArrowFadeIn = () => {
        let rightArrow = document.getElementById("rightArrow");
        if(isLoading){
            rightArrow.classList.add('invisible')
        }  else {
            rightArrow.classList.remove('invisible')
        }
    }

    const leftArrowFadeIn = () => {
        let leftArrow = document.getElementById("leftArrow");
        if(isLoading){
            leftArrow.classList.add('invisible')
        } else {
            leftArrow.classList.remove('invisible')
        }
    }

        useEffect(() => {
        rightArrowFadeIn();
        leftArrowFadeIn();
    }, [isLoading])


    // Automatic Slideshow (6 second timer, adds 1 to the slideIndex per 6 seconds)

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("useEffect ran")
            slideshowImageChanger(1);
        }, 6000);
        return() => clearTimeout(timer)
    }, [showSlides])

       //Styles Material UI Slideshow
    const useStyles = makeStyles(() => ({
        container: {
        maxWidth: 1300,
        alignItems: "right",
        justifyContent: "right",
            },
        }
    ));

    const classes = useStyles();

    return (
        <div className="slideshowSegment">
            <Container className="slideshow" >
                <Fab id="rightArrow" onClick={() => { slideshowImageChanger(1) }} className="rightArrow"><span>&#10095;</span></Fab>
                    <img id="myimg" className="slideshowImg" />
                    {isLoading && <Loading />}
                <Fab id="leftArrow" onClick={() => { slideshowImageChanger(-1) }} className="leftArrow"><span>&#10094;</span></Fab>
            </Container>

            <Container className="quote">
                <span>Photography</span> is a medium <br /> which allows you to experience life <br /> from another's perspective...
            </Container>
        </div>
    )
}

export default Slideshow
