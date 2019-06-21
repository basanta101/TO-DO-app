import React from "react";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/dashboard">dashboard</Link>
      <Link to="/logout">Logout</Link> 
    </div>
  );
};

export default Header;
