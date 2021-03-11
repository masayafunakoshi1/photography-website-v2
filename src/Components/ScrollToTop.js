import React, {useState, useEffect, useRef} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

const ScrollToTop = (props) => {

    const [ scrollArrow, setScrollArrow] = useState(false)
    const scrollingWrapperContainer = useRef(null)

    //Checks if component has been scrolled more than 100px's, then setsState to True
    const checkScrollTop = () => {
        if(!scrollArrow && scrollingWrapperContainer.current.scrollTop > 50){
            setScrollArrow(true)
        } else if(scrollArrow && scrollingWrapperContainer.current.scrollTop <= 50){
            setScrollArrow(false)
        }
    }
  
    //Makes page go to top
    const onClickHandler = () => {
        console.log('button clicked')
        scrollingWrapperContainer.scrollTo(0,0);
    }

    //Listening for the scroll event with the scroll "checker"
    useEffect(() => {
        if(scrollingWrapperContainer !== null && scrollingWrapperContainer.current !== null){
        scrollingWrapperContainer.current.addEventListener('scroll', checkScrollTop());
        console.log(scrollingWrapperContainer.current.scrollTop)
        } else{console.log('error')}
        // return () => {
        //     scrollingWrapperContainer.current.removeEventListener('scroll', checkScrollTop)
        // }
    }, [])

 


    //Styles
    const useStyles = makeStyles((theme) => ({
        extendedIcon: {
            marginRight: theme.spacing(1),
        },
    }));

    const classes = useStyles();
    return (
        <div ref={scrollingWrapperContainer}>
            {scrollArrow && (<Fab 
            className='scrollToTopArrowVisible' 
            variant="extended" 
            onClick={() => onClickHandler()} 
            >
                <NavigationIcon className={classes.extendedIcon}/>
                Back To Top
            </Fab>)}

        </div>
    )
}

export default ScrollToTop
