import React, {useEffect} from 'react'
import TextField from '@material-ui/core/TextField';

const Contact = (props) => {

    //Attempt at making page refresh when refresh state is "true"
    // useEffect(() => {
    // console.log(props.refresh)
    // if(location.pathname === "/Contact"){
    //     props.refreshCheck();
    // } else {
    //     console.log("No Refresh")
    // } 
    // }, [])

  

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
