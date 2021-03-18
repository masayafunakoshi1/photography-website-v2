import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { projectFirestore } from '../../firebase/config';
import TextField from '@material-ui/core/TextField';
import '../styles/Contact.css'

import Button from '@material-ui/core/Button';


const ContactForm = (props) => {
    
    const [contactData, setContactData] = useState({
        email: "",
        fullName: "",
        message: "",
        subject: ""
    })
    const [validation, setValidation] = useState(true)

//Submit contact information to Firestore API
    const submitToFirestore = () => {
        // Add a new document in collection "contactPageData"
        projectFirestore.collection("contactPageData").add({
            contactData
        })
        .then(() => {
            console.log("Document successfully written!");
            props.successAlertHandler();
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
            props.errorAlertHandler()
        });
    }

    const validationChecker = () => {
        if(contactData.email !== "" && contactData.fullName !== "" && contactData.message !== "" && contactData.subject !== ""){
            setValidation(false)
        } else {
            setValidation(true)
        }
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
        setValidation(true)
    }

    //Styles
    const useStyles = makeStyles((theme) => ({
        textFieldRoot: {
            '& .MuiTextField-root': {
            margin: theme.spacing(1),
            top: '120px',
            width: '500px',
            left: '300px',
            [theme.breakpoints.down('lg')]: {
                top: '120px',
                left: '200px',
            },
            [theme.breakpoints.down('sm')]: {
                top: '0px',
                left: '0px',
                width: '350px'
            },
            },
            '& > *': {
            left: '206px',
            top: '360px',
             [theme.breakpoints.down('lg')]: {
                left: '105px',
                },
            [theme.breakpoints.down('sm')]: {
                left: '280px',
                top: '0px',
                },
            },
        },
        typography: {
            padding: theme.spacing(2),
        },
        }));

     const classes = useStyles();

    return (
        <div >
                <div className="textFields" onChange={validationChecker}>
                    <form noValidate autoComplete="off" className={classes.textFieldRoot} >
                            <TextField 
                            type="text" 
                            id="standard-basic" 
                            label="Full-Name" 
                            value={contactData.fullName} 
                            onChange={e => {
                                const val = e.target.value;
                                setContactData(prevState => {
                                    return {...prevState, fullName: val}
                                });
                            }}
                            />
                        <div>
                            <TextField 
                            type="text" 
                            id="standard-basic" 
                            label="Email" 
                            value={contactData.email} 
                            onChange={e => {
                                const val = e.target.value;
                                setContactData(prevState => {
                                    return {...prevState, email: val}
                                 }); 
                                }}
                                />
                        </div>
                        <div>
                            <TextField 
                            type="text" 
                            id="standard-basic" 
                            label="Subject" 
                            value={contactData.subject} 
                            onChange={e => {
                                const val = e.target.value;
                                setContactData(prevState => {
                                    return {...prevState, subject: val} 
                                });
                             }}                            
                            />
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

                            <Button 
                            disabled = {validation}
                            variant="contained" 
                            color="primary" 
                            onClick={handleSubmit}
                            > Submit </Button>

                    </form>
                </div>
            </div>

    )
}

export default ContactForm
