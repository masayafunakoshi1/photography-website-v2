import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
const Modals = () => {

    const useStyles = makeStyles((theme) => ({
     paper: {
            position: 'absolute',
            maxWidth: '1300px',
            boxShadow: theme.shadows[7],
            left: '15%',
            top: "5%",
                [theme.breakpoints.down('lg')]: {
                width: 1000,
                height: 'auto',
                },
                [theme.breakpoints.down('md')]: {
                    maxWidth: 1000,
                    height: 'auto',
                    left: '10%',
                    top: "5%",
                },
        },
        }));

    const classes = useStyles();

    return (
        <div>
            
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {body}
        </Modal>
        </div>
    );
}

export default Modals
