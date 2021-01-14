import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { ReactComponent as Logout  } from '../../assets/logout.svg';
import './Header.css';

function Header(){
    const history = useHistory();

    function handleClick() {
        history.push("/login");
    }

    function logo() {
        history.push("/");
    }

return (
        <nav>
            <div className="nav-container">
                <div onClick={logo} className="logo-button">
                    BEDRIJFSLOGO
                </div>
                <ul>
                    <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
                    <NavLink to="/profile" activeClassName="active-link">Profiel</NavLink>
                    <NavLink to="/reservation" activeClassName="active-link">Reserveren</NavLink>
                    <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
                    <div onClick={handleClick}>
                        <Logout className="log-out-icon" />
                    </div>
                </ul>
            </div>
        </nav>
);
}

export default Header;
