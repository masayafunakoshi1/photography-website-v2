import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => {

//Figure out how to change the size of circle

const useStyles = makeStyles(() => ({
    root: {
        size: 80,
        },
    }
    ))

    const classes = useStyles();

    return (
        <div className={classes.root} className="loader">
            <CircularProgress />
            
        </div>
    )
}

export default Loading
