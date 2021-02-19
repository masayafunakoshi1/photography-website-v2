import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './styles/Contact.css'

import Button from '@material-ui/core/Button';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedIn  from '@material-ui/icons/LinkedIn';


const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    //Styles
    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '500px',
            top: '120px',
            left: '300px',
            
            },
            '& > *': {
            left: '206px',
            top: '360px',

            },
        },
        }));

     const classes = useStyles();

    return (

        <div className="contactPage">
            <div>
                <h1 className="contact-Title">Contact</h1>
                <h3 className="contact-Subtext">
                    For Bookings, Inquiries, Questions or Comments, please fill out the form below. 
                    <br/>Will get back to you as soon as we can!
                </h3>
            </div>

            <div className="contacts-Container">
                <div className="textFields">
                    <form noValidate autoComplete="off" className={classes.root}>
                            <TextField id="standard-basic" label="Full-Name" />
                        <div>
                            <TextField id="standard-basic" label="Email" />
                        </div>
                        <div>
                            <TextField id="standard-basic" label="Subject" />
                        </div>
                            <TextField
                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            rows={10}
                            variant="outlined"
                            />
                            <Button variant="contained" color="primary" onClick={(e) => {handleSubmit(e)}}> Submit </Button>

                    </form>
                </div>

                <div className="contactsAndSocials">
                    <div className="contacts">
                            <div className="contactIcons">
                                <LocationOnIcon fontSize="large"/>
                                <p>Westchester, New York</p>
                            </div>
                            <div className="contactIcons">
                                <PhoneIcon fontSize="large"/>
                                <p>845-490-7124</p>
                            </div>
                            <div className="contactIcons">
                                <EmailIcon fontSize="large"/>
                                <p>masayafunakoshi1@gmail.com</p>
                            </div>
                    </div>

                    <div className="socials">
                        <FacebookIcon className="socialIcons"/>
                        <InstagramIcon className="socialIcons"/>
                        <YouTubeIcon className="socialIcons"/>
                        <LinkedIn className="socialIcons"/>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Contact
