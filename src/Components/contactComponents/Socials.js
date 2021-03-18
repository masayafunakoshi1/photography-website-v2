import React, {useState} from 'react'
import '../styles/Contact.css'
import { makeStyles } from '@material-ui/core/styles';

import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedIn  from '@material-ui/icons/LinkedIn';

const Socials = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [popOverText, setPopOverText] = useState("")

    //Handle when clicking on Icons
    const handleIconClick = (e) => {
        e.preventDefault();
        console.log(e.target.innerText)
        setPopOverText(e.target.innerText);
        setAnchorEl(e.target);
    }

    const handleClose = () => {
       setTimeout(() => {
        setAnchorEl(null);
       }, 900) 
    }

    const open = Boolean(anchorEl);

        //Styles
    const useStyles = makeStyles((theme) => ({
        textFieldRoot: {
            '& .MuiTextField-root': {
            margin: theme.spacing(1),
            top: '120px',
            width: '500px',
            left: '300px',
            },
            '& > *': {
            left: '206px',
            top: '360px',
            },
        },
        typography: {
            padding: theme.spacing(2),
        },
        }));

     const classes = useStyles();

    return (
         <div className="contactsAndSocials">
                    <div className="contacts">
                            <div className="contactIcons">
                                <LocationOnIcon style={{fontSize: 50}}/>
                                <a 
                                className="contactsText" 
                                href="https://www.google.com/maps/place/Westchester+County,+NY/@41.1187086,-74.0131808,10z/data=!3m1!4b1!4m5!3m4!1s0x89c2c96a9d6b59af:0x370ed86222bddb89!8m2!3d41.1220194!4d-73.7948516" 
                                target="_blank">

                                Westchester, New York
                                </a>
                            </div>

                            <div className="contactIcons">
                                <PhoneIcon style={{fontSize: 50}}/>
                                <a onClick={(e) => handleIconClick(e)} className="contactsText">845-490-7124</a>
                            </div>

                            <div className="contactIcons">
                                <EmailIcon style={{fontSize: 50}}/>
                                <a 
                                href="mailto:masayafunakoshi1@gmail.com?subject=Subject&body=message%20goes%20here" className="contactsText">
                                masayafunakoshi1@gmail.com
                                </a>
                            </div>
                            
                            <Popover
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose()}
                                anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                                }}
                            >
                                <Typography className={classes.typography}>{popOverText} Copied to Clipboard!</Typography>
                            </Popover>

                    </div>

                    <div className="socials">
                        <a href="https://www.instagram.com/masayafunakoshi1/"  target="_blank">
                            <InstagramIcon style={{ fontSize: 40, color: '#833AB4'}} className="socialIcons" /> 
                        </a>
                        <a href="https://www.youtube.com/channel/UCRpd_34DrsYww62MJ34y-3Q"  target="_blank">
                            <YouTubeIcon style={{ fontSize: 40 }} color="secondary" className="socialIcons" /> 
                        </a>
                        <a href="https://www.linkedin.com/in/masayafunakoshi/"  target="_blank">
                            <LinkedIn style={{ fontSize: 40, color: '#0e76a8' }} className="socialIcons" />
                        </a>
                    </div>
                </div>
    )
}

export default Socials
