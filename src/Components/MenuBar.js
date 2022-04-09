import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MenuBar = () => {
  //Dissappearing menu bar on scroll
  const [anchorEl, setAnchorEl] = useState(null);

  const handleHover = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

 return (
    <header className="menu">
      <h1 className="title">
        <NavLink to="/">
          Funakoshi <br />
          Photography{" "}
        </NavLink>
      </h1>

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
            onClose={handleClose}
          >
            <NavLink to="/Weddings">
              <MenuItem onClick={handleClose}>Weddings</MenuItem>
            </NavLink>
            <NavLink to="/Events">
              <MenuItem onClick={handleClose}>Events</MenuItem>
            </NavLink>
            <NavLink to="/Nature">
              <MenuItem onClick={handleClose}>Nature</MenuItem>
            </NavLink>
            <NavLink to="/Portraits">
              <MenuItem onClick={handleClose}>Portraits</MenuItem>
            </NavLink>
          </Menu>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/FreqAskQuestions">FAQ</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default MenuBar;
