import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { projectFirestore } from '../../firebase/config';
import TextField from '@material-ui/core/TextField';
import '../styles/Contact.css'

import Button from '@material-ui/core/Button';


const ContactForm = () => {
    
const [contactData, setContactData] = useState({
        email: "",
        fullName: "",
        message: "",
        subject: ""
    })

//Submit contact information to Firestore API
    const submitToFirestore = () => {
        // Add a new document in collection "cities"
        projectFirestore.collection("contactPageData").add({
            contactData
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }
 
    const handleSubmit = () => {
        console.log(contactData);
        submitToFirestore();
        setContactData({
            email: "",
            fullName: "",
            message: "",
            subject: ""
        });
    }


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
        <div className="contacts-Container">
                <div className="textFields">
                    <form noValidate autoComplete="off" className={classes.textFieldRoot} >
                            <TextField type="text" id="standard-basic" label="Full-Name" value={contactData.fullName} onChange={e => {
                                const val = e.target.value;
                                setContactData(prevState => {
                                    return {...prevState, fullName: val}
                                });
                            }}/>
                        <div>
                            <TextField type="text" id="standard-basic" label="Email" value={contactData.email} onChange={e => {
                                const val = e.target.value;
                                setContactData(prevState => {
                                    return {...prevState, email: val}
                                 }); 
                                }}/>
                        </div>
                        <div>
                            <TextField type="text" id="standard-basic" label="Subject" value={contactData.subject} onChange={e => {
                                const val = e.target.value;
                                setContactData(prevState => {
                                    return {...prevState, subject: val} 
                                });
                             }}/>
                        </div>
                            <TextField
                            type="text"
                            value={contactData.message}
                            onChange={e => {
                                const val = e.target.value;
                                setContactData(prevState => {
                                    return {...prevState, message: val} 
                                }); 
                            }}

                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            rows={10}
                            variant="outlined"
                            />

                            <Button variant="contained" color="primary" onClick={handleSubmit}> Submit </Button>

                    </form>
                </div>
            </div>

    )
}

export default ContactForm
