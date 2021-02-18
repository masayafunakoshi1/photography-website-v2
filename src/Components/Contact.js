import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './styles/Contact.css'

import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedIn  from '@material-ui/icons/LinkedIn';


const Contact = () => {



    //Styles
    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '500px',
            top: '120px',
            left: '300px',
            
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
                    </form>
                </div>

                <div className="contactsAndSocials">
                    <div className="contacts">
                            <div>
                                <LocationOnIcon fontSize="large"/>
                            </div>
                            <div>
                                <PhoneIcon fontSize="large"/>
                            </div>
                            <div>
                                <EmailIcon fontSize="large"/>
                            </div>
                    </div>

                    <div className="socials">
                        <FacebookIcon />
                        <InstagramIcon />
                        <YouTubeIcon />
                        <LinkedIn />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Contact
