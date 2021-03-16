import React, {useState, useEffect} from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Loading from './Loading';


const Slideshow = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const docs = urlData.map(currentImg => {
        return currentImg.imageUrl;
        // return process.env.PUBLIC_URL + currentImg.imageUrl
    })

     const showSlides = () => {
        document.getElementById('myimg').src = docs[slideIndex] ;
        imageFadeIn();
        setIsLoading(false);
     }
    
     //Allows user to manually change the slideshow with arrows, also lets slideshow to change automatically with settimeout function call
    const slideshowImageChanger = (n) => {
        setSlideIndex(slideIndex + n)
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
    //Run it once on pageload to stop delay
    useEffect(() => {
        slideshowImageChanger(1);
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("useEffect ran")
            slideshowImageChanger(1);
        }, 6000);
        return() => clearTimeout(timer)
    }, [showSlides])

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


 //Slideshow Images from Public Folder
const urlData = [
    {
        title: 'Shiba-Dog',
        description: 'Close up picture of a Shiba Inu (Shiba Dog) in Japan.',
        imageUrl: 'images/slideshowImgs/IMG_0600.jpg',
    },
    {
        title: 'Tree-of-Blessing',
        description: 'Picture of a Japanese Maple tree during a foggy morning sunrise.',
        imageUrl: 'images/slideshowImgs/IMG_1430-2.jpg',
    },
    {
        title: 'Chipmunk',
        description: 'Photo of a wild chipmunk, cheeks stuffed with birdfeed.',
        imageUrl: 'images/slideshowImgs/IMG_3836.jpg',
    },
    {
        title: 'Joanna-Kushal-Engagement-Music',
        description: 'A beautiful musical performance for an even more beautiful engagement ceremony.',
        imageUrl: 'images/slideshowImgs/IMG_6669.jpg',
    },
    {
        title: 'Peace-Road-Prayer',
        description: 'During an event called Peace Road, a group of both young and old, promoting peace across the country.',
        imageUrl: 'images/slideshowImgs/IMG_6726.jpg',
    },
    {
        title: 'Paki-Wedding-Photo',
        description: 'A newly-wed couple taking wedding photos on the beautiful Belvedere property.',
        imageUrl: 'images/slideshowImgs/IMG_7114.jpg',
    },
    {
        title: 'Kevin-Patricia-AisleWalk',
        description: 'The bride and her father walk down the aisle on her special day.',
        imageUrl: 'images/slideshowImgs/IMG_7544.jpg',
    },
     {
        title: 'Misty-Mountain-Heron',
        description: 'On a misty morning at a temple in Miyajima, Japan.',
        imageUrl: 'images/slideshowImgs/IMG_9375.jpg',
    }
]