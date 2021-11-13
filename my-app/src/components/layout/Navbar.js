import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            
            {/* Links */}
            <Link className="navbar-brand text-white text-lg brand-text " to="/">
              Find Me Entertainment
            </Link>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
              <i className="fas fa-film fa-5x" id="fontawesome-film" />
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
