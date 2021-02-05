import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';

const Contact = () => {
    const location = useLocation();
    const pathName = location.pathname
    
    useEffect(() => {
        console.log(pathName)
        //refresh page on load (still attempting to find a better solution with react router)
        // window.location.reload()
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
