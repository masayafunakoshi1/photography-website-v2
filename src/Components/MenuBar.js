import React, { useState } from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {
    NavLink,
} from "react-router-dom";


const MenuBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleHover = (e) => {
        setAnchorEl(e.currentTarget)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="menuApp">
            <header className="menu">
                <h1 className="title"><NavLink to="/">MasaFuna <br />Photos </NavLink></h1>

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
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
            </header>
        </div >
    )
}

export default MenuBar
