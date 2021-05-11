import React, {useState, useEffect, useRef} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

const ScrollToTop = (props) => {
    const [ showScroll, setShowScroll ] = useState(false);
    

    const checkScroll = () => {
        if(!showScroll && document.body.scrollTop > 500){
            setShowScroll(true)
        } else if (document.body.scrollTop <= 500){
            setShowScroll(false)
        } 
    }

    const onClickHandler = () => {
        document.body.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        document.body.addEventListener('scroll', checkScroll)

        return() => document.body.removeEventListener('scroll', checkScroll)
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
                onClick={onClickHandler} 
                >
                    <NavigationIcon className={classes.extendedIcon}/>
                    Back To Top
                </Fab> : ''}
        </div>
    )
}

export default ScrollToTop 