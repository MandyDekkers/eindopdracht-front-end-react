import axios from "axios";
import { useForm } from 'react-hook-form';
import {AuthContext, useAuthState} from "../context/AuthContext";
import './LoginPage.css';
import './RegisterPage';
import {useState, useContext, useEffect} from "react";
import { Link, useHistory } from 'react-router-dom';

function LoginPage() {
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');
    const {handleSubmit, register, errors} = useForm();
    const history = useHistory();
    const { login } = useContext(AuthContext);
    const { isAuthenticated } = useAuthState();
    const { isAdmin } = useAuthState();

    useEffect( () => {
        if (isAuthenticated === true) {
                if(isAdmin) {
                    history.push("/admin")
                } else {
                    history.push('/profile');
                }
        }
        console.log(isAuthenticated);
    }, [isAuthenticated]);

    async function formSubmit(data) {
        toggleLoading(true);
        setError('');
        try {
            const response = await axios.post('http://localhost:8080/api/auth/signin', {
                username: data.username,
                password: data.password
            });
            login(response.data);

        } catch (e) {
            console.error(e);
            if (e.message.includes('400')) {
                setError('Inloggevens zijn onjuist');
            } else {
                setError('Er is iets misgegaan bij het inloggen. Probeer het opnieuw')
            }
        }
        toggleLoading(false);
    }

    return (
        <>
            {error && <p className="error">{error}</p>}
            <div className="login-container">

                <form className="login-form" onSubmit={handleSubmit(formSubmit)}>
                    <h3>Login</h3>
                    <label htmlFor="username-field">Gebruikersnaam*:</label>
                    <input
                        name="username"
                        id="username-field"
                        type="text"
                        placeholder="gebruikersnaam"
                        ref={register({required: true})}
                    />
                    {errors.username && <p className="error">Gebruikersnaam is verplicht</p>}

                    <label htmlFor="password-field">Wachtwoord*:</label>
                    <input
                        type="password"
                        placeholder="min. 8 karakters"
                        name="password"
                        id="password-field"
                        ref={register(
                            {
                                required: {
                                    value: true,
                                    message: 'Dit veld mag niet leeg zijn',
                                },
                                minLength: {
                                    value: 8,
                                    message: 'Min. 8 karakters',
                                },
                            }
                        )}
                    />
                    {errors.password && errors.password.message}

                    <button className="login-button"
                            type="submit"
                            disabled={loading}
                    >
                        {loading ? 'Laden...' : 'Inloggen'}
                    </button>
                    <p className="create-account" ><Link to="/register"> Nieuw? Registreer je hier!</Link></p>
                </form>
            </div>
        </>
    );
}

export default LoginPage;
