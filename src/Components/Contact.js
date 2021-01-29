import React, {useEffect} from 'react'
import TextField from '@material-ui/core/TextField';

const Contact = () => {
    
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
