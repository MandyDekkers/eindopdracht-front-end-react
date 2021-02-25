import React, {useContext, useEffect} from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { ReactComponent as Logout  } from '../../assets/logout.svg';
import {AuthContext, useAuthState} from "../../context/AuthContext";
import './Header.css';


function Header(){
    const history = useHistory();

    const { isAuthenticated } = useAuthState();
    const { logout } = useContext(AuthContext);

    useEffect(() => {
        if (isAuthenticated === false) {
            history.push('/login');
        }
    }, [isAuthenticated]);

return (
        <nav>
            <div className="nav-container">
                <div className="logo-button"><Link to="/profile">BEDRIJFSLOGO</Link></div>
                <ul>
                    <NavLink exact to="/profile" activeClassName="active-link">Home</NavLink>
                    <NavLink to="/personalinfo" activeClassName="active-link">Mijn gegevens</NavLink>
                    <NavLink to="/reservation" activeClassName="active-link">Reserveren</NavLink>
                    <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
                    <div onClick={() => logout()}
                    >
                        <Logout className="log-out-icon" />
                    </div>
                </ul>
            </div>
        </nav>
);
}

export default Header;
