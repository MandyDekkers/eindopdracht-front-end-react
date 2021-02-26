import React, {useContext, useEffect} from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { ReactComponent as Logout  } from '../../assets/logout.svg';
import {AuthContext, useAuthState} from "../../context/AuthContext";
import './Header.css';

function HeaderAdmin(){
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
                <div className="logo-button"><Link to="/admin">BEDRIJFSLOGO</Link></div>
                    <ul>
                        <NavLink exact to="/admin" activeClassName="active-link">Home</NavLink>
                        <NavLink to="/members" activeClassName="active-link">Leden</NavLink>
                        <NavLink to="/lessons" activeClassName="active-link">Lessen</NavLink>
                        <div onClick={() => logout()}
                        >
                            <Logout className="log-out-icon" />
                        </div>
                    </ul>
            </div>
        </nav>
    );
}

export default HeaderAdmin;
