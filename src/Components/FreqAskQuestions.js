import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import "./styles/FreqAskQuestions.css";

const FreqAskQuestions = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "50%",

      [theme.breakpoints.down("sm")]: {
        maxWidth: "85%",
      },
    },
    heading: {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: theme.typography.fontWeightMedium,

      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.pxToRem(18),
        fontWeight: theme.typography.fontWeightLight,
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className="faqPage">
      <h1 className="faq-Title">Frequently Asked Questions</h1>
      <Container className={classes.root}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              Where are you located?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Currently located in the New York Metropolitan area. Willing to
              shoot anywhere, but will discuss travel details with the client.
            </Typography>
            <img></img>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              What are your rates?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Rates are entirely dependent on the shoot. Please go to the
              Contact page and send me a message, we can then discuss rates and
              find what works for both of us.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              How do I book a shoot?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <br />
              &emsp;&emsp;&emsp;Go to the Contact page and feel free to send me
              a message!
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              What kind of gear do you use?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              I normally shoot with a Canon 760D, mainly using an 85mm Prime and
              24mm Prime lens.
              <br />
              &emsp;&emsp;&emsp;I am looking to upgrade my gear soon to
              something more powerful, but this gets the job done!
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              How long does it take to get our photos?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              It all depends on the type of shoot, how long it was, how many
              photos were taken, any editing requests, etc...
              <br />
              &emsp;&emsp;&emsp;For example, on a 2-hour shoot, 50-70 photos
              taken, you will receive your photos within 1-2 days.
              <br />
              &emsp;&emsp;&emsp;A clear estimate will be made right after the
              shoot.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
};

export default FreqAskQuestions;