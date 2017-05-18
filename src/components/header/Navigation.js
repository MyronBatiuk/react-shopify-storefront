import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => (
  <ul>
    <li>
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/about">
        About
      </NavLink>
    </li>
  </ul>
)


export default Navigation;