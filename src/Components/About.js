import React from 'react'
import './styles/About.css'
import Container from '@material-ui/core/Container';
import ScrollToTop from '../Components/ScrollToTop'

const About = () => {
    const docs = urlData.map(currentImg => {
        return currentImg.imageUrl;
    })

    return (
        <Container maxWidth="md" className="aboutPage">
            <ScrollToTop />
            <h1 className="about-Title">About Me</h1>
            
                {/* Picture of ME */}
                <div className="pictureHolder">
                    <img className="pictureOfMe1" src={docs[0]}></img>
                </div>
                <p className="text1 text">
                    Hey there! My name's Masaya Funakoshi, 22-years-old, and I recently graduated from SUNY Purchase College with a BA in Arts Management. Currently I'm studying to become a Front-End Web Developer, while doing freelance photography on the side. Over the past 5 years, I've had the opportuniy to develop my photography skills working alongside professionals, peers, and clients to create products which everyone is satisfied with. 
                    I like to keep my sessions as relaxed and fluid as we can make it! If you have any suggestions or preferences for your photos, locations, and/or anything else, I'm more than happy to make it happen. Otherwise I'll always have plenty of ideas and funky poses that I promise you're going to look amazing!
                </p>
                <div className="pictureHolder">
                    <img className="pictureOfMe2" src={docs[1]}></img>
                </div>

                <p className="text2 text">
                    I think what drew me towards photography began from going on a family trip to Japan. I was around 10-years-old at the time, and My dad gave me an old, clunky brick of a video camera to play around with. Holding my own camera and capturing the places, sights, and sounds that I wanted to was an entirely new, liberating experience. Most of the footage ended up being out-of-focus, shaky, and basically unwatchable, but that was the beginning of my passion. I then got my first DSLR (Rebel T3) in highschool for a photography class. It was probably the most expensive thing I've gotten as a gift up to that point, and definitely the most expensive thing I owned. I loved it. I Went out everyday to take photos. Around my house, the neighborhood, on trips, birthdays, graduations, etc...
                    <br/>
                    Long story short, I continued with it into college, saving up for new gear, taking gigs here and there, and snapping all kinds of new and exciting photographs. And finally, the journey continues from here! 
                </p>
                <p className="text3 text">
                    Photographs are little windows into a person's life. You can see what it's like to be them, how certain moments made them feel. That is the essence of my photography, I want to capture moments in time, memories from different perspectives. By catching a moment within a photograph, it exists forever. When memories fade, time passes, and people change, a photograph stays. 
                </p>
        </Container>
    )
}

export default About

//Image data
const urlData = [
    {
        title: 'DemiGod-Photographer',
        description: 'Photographer for a winter workshop named "DemiGod"',
        imageUrl: 'images/photosOfMe/DemiGod-Photo.jpg',
    },
    {
        title: 'Me in Philly',
        description: 'Photograph of myself in Philadelphia, Pennsylvania',
        imageUrl: 'images/photosOfMe/Masaya-Funakoshi-ArtsManagement.jpg',
    },
]