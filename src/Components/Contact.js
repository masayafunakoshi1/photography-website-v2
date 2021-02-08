import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import { useLastLocation } from 'react-router-last-location';
import TextField from '@material-ui/core/TextField';

const Contact = (refresh, setRefresh) => {
    // const location = useLocation();
    // const pathName = location.pathname
    const lastLocation = useLastLocation();

    const handleRefresh = () => {
         window.location.reload();
    }

    console.log(lastLocation.pathname)
    
    useEffect(() => {
    // if(lastLocation.pathname === "/"){
    //         handleRefresh();
    // } else {
    //     console.log("No Refresh")
    // }
        
        //refresh page on load (still attempting to find a better solution with react router)

    }, [])

  

    return (
        <div>
            <div>
                <form noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Full-Name" />
                    <TextField id="standard-basic" label="Email" />
                </form>
            </div>
        </div>
    )
}

export default Contact
