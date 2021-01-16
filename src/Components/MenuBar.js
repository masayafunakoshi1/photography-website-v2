import React, { useState } from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
} from "react-router-dom";
import Contact from './Contact'
import App from '../App'

const MenuBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleHover = (e) => {
        setAnchorEl(e.currentTarget)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="App">
            <Router>
                <header className="menu">
                    <h1 className="headings"><Link to="/App">MasaFuna <br />Photos</Link></h1>

                    <ul className="menu-items">
                        <li>
                            <a
                                aria-controls="simple-menu"
                                aria-haspopup="true"
                                onClick={handleHover}
                            >
                                Portolio&nbsp;&#8595;
                            </a>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                            >

                                <MenuItem onClick={handleClose}>Weddings</MenuItem>
                                <MenuItem onClick={handleClose}>Events</MenuItem>
                                <MenuItem onClick={handleClose}>Nature</MenuItem>
                            </Menu>
                        </li>
                        <li><a >About</a></li>
                        <li><a >FAQ</a></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                </header>

                <Switch>
                    <Route path="/Contact">
                        <Contact />
                    </Route>
                    <Route path="/App">
                        <App />
                    </Route>
                </Switch>
            </Router>
        </div >
    )
}

export default MenuBar
