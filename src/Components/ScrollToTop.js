import React, {useState, useEffect, useRef} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

const ScrollToTop = (props) => {
    const [ showScroll, setShowScroll ] = useState(false);

    const checkScroll = () => {
        console.log(window.pageYOffset)
        if(!showScroll && window.pageYOffset > 50){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 50){
            setShowScroll(false)
        } 
    }

    const onClickHandler = () => {
        console.log("button clicked")
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        console.log("useEffect added")
        window.addEventListener('scroll', checkScroll, true)
        return(window.removeEventListener('scroll', checkScroll))
    }, [])


    //Styles
    const useStyles = makeStyles((theme) => ({
        extendedIcon: {
            marginRight: theme.spacing(1),
        },
    }));

    const classes = useStyles();
    return (
        <div className="arrowHolderDiv" >
            {showScroll ? <Fab 
            className='scrollToTopArrowVisible' 
            variant="extended" 
            onClick={() => onClickHandler()} 
            >
                <NavigationIcon className={classes.extendedIcon}/>
                Back To Top
            </Fab> : <h1>Scroll</h1>}
        </div>
    )
}

export default ScrollToTop 