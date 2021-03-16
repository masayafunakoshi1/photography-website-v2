import React, {useState} from 'react'
import ContactForm from './contactComponents/ContactForm'
import Socials from './contactComponents/Socials'
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import './styles/Contact.css'
import '../App.css'
import ScrollToTop from './ScrollToTop'

const Contact = () => {
    const[successAlert, setSuccessAlert] = useState(false)
    const[errorAlert, setErrorAlert] = useState(false)

    //Alert function (alert if form was submitted successfully)
    const successAlertHandler = () => {
        setSuccessAlert(true);
        setTimeout(() => {
            setSuccessAlert(false)
        }, 2000)
    }

    const errorAlertHandler = () => {
        setErrorAlert(true);
        setTimeout(() => {
            setErrorAlert(false);
        }, 2000)
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            maxHeight: '40px', 
            '& > * + *': {
            },
        },
        }));

        const classes = useStyles();
    

    return (
        <div className="contactPage">
            <ScrollToTop />
            <div>
                <div className={classes.root}>
                    <Alert className={`successAlert ${successAlert ? '' : 'hide'}`} severity="success">Message Sent!</Alert>
                    <Alert className={`errorAlert ${errorAlert ? '' : 'hide'}`} severity = "error">Message was unable to send :(</Alert>
                </div>
                <h1 className="contact-Title">Contact Us</h1>
                <h3 className="contact-Subtext">  
                    For Bookings, Inquiries, Questions or Comments, please fill out the form below. 
                    <br/>Will get back to you as soon as we can!
                </h3>
            </div>
                      
            <ContactForm 
            successAlertHandler={successAlertHandler}
            errorAlertHandler={errorAlertHandler}
            />
           <Socials />
           
        </div>
    )
}

export default Contact
