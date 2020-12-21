import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logout  } from '../../assets/logout.svg';
import './Header.css';

function Header(){

return (
    <>
        <nav>
            <div className="nav-container">
                <h4>Be fit!</h4>
                <ul>
                    <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    <NavLink to="/profile" activeClassName="active-link">Profiel</NavLink>
                    <NavLink to="/reservation" activeClassName="active-link">Reserveren</NavLink>
                    <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
                    <Logout className="log-out-icon" />
                </ul>
            </div>
        </nav>
    </>
);

}

export default Header;
