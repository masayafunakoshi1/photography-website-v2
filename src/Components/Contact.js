import React from 'react'
import TextField from '@material-ui/core/TextField';
import MenuBar from './MenuBar'

const Contact = () => {
    return (
        <div>
            <MenuBar />
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
