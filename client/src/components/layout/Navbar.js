import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <Link to="/">Construction Supply Cost Optimizer</Link>
      </h1>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/materials">Materials</Link>
        </li>
        <li>
          <Link to="/distributors">Distributors</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;