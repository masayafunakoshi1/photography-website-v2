import React from 'react'
import './styles/FreqAskQuestions.css'
import { makeStyles } from '@material-ui/core/styles';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '@material-ui/core/Container';

const FreqAskQuestions = () => {



    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: '50%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(20),
            fontWeight: theme.typography.fontWeightMedium,
        },
    }));

     const classes = useStyles();

    return (
        <div className="faqPage">
            <h1 className="faq-Title">Frequently Asked Questions</h1>
            <Container 
            className={classes.root}>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    >
                    <Typography className={classes.heading}>Where are you located?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                            I am located in the New York Metropolitan area. 
                            <br/>&emsp;&emsp;&emsp;Though more than willing to shoot anywhere, but will have to discuss travel details with the client.
                    </Typography>
                    <img></img>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    >
                    <Typography className={classes.heading}>What are your rates?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                            Depends entirely on the type of shoot. 
                            <br />&emsp;&emsp;&emsp;Please go to the Contact page and send me a message, we can then discuss rates and find what works for both 
                            <br/>&emsp;&emsp;&emsp;of us.
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    >
                    <Typography className={classes.heading}>How do I book a shoot?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    Go to the Contact page and feel free to send me a message!
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                    
                    <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    >
                    <Typography className={classes.heading}>What kind of gear do you use?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        I normally shoot with a Canon 760D, mainly using an 85mm Prime and 24mm Prime lens. 
                        <br/>&emsp;&emsp;&emsp;I am looking to upgrade my gear soon to something more powerful, but this gets the job done!
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                    <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    >
                    <Typography className={classes.heading}>How long does it take to get our photos?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        It all depends on the type of shoot, how long it was, how many photos were taken, any editing requests, etc... 
                        <br/>&emsp;&emsp;&emsp;For example, on a 2-hour shoot, 100-150 photos taken, you will receive your photos within 2-3 days. 
                        <br/>&emsp;&emsp;&emsp;A clear estimate will be made right after the shoot.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </Container>
        </div>
    )
}

export default FreqAskQuestions
