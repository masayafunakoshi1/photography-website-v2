import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => {

const useStyles = makeStyles(() => ({
    root: {
        position: "relative", 
        display: "inline-flex",
        '& > * + *': {
            marginTop: '400px'
        },
    },
    }));

    const classes = useStyles();

    return (
        <div className={classes.root} className="loader">
            <CircularProgress />
            
        </div>
    )
}

export default Loading
