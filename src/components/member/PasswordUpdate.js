import React, {useState} from 'react';
import './PasswordUpdate.css';
import axios from "axios";
import { useForm } from 'react-hook-form';

function PasswordUpdate() {
    const { handleSubmit, register, errors } = useForm();
    const [sendSucces, setSendSucces] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');

    async function onFormSubmit(data) {
        toggleLoading(true);
        setError(false);
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post('http://localhost:8080/api/auth/update', data, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            if (response.status === 200) {
                setSendSucces(true);
            }
        } catch (e) {
            console.error(e);
            if (e.message.includes('400')) {
                setError('Controleer je gegevens op volledigheid');
            } else {
                setError('Er is iets misgegaan bij het verzenden. Probeer het opnieuw')
            }
        }
        toggleLoading(false);
    }

    return (
            <div className="updatecontainer">
                <form className="password-form" onSubmit={handleSubmit(onFormSubmit)}>
                    <label htmlFor="password">Nieuw wachtwoord*:</label>
                    <input
                        type="password"
                        placeholder="min. 8 karakters"
                        name="password"
                        id="password-field"
                        ref={register(
                            {required: {
                                    value: true
                                },
                                minLength: {
                                    value: 8,
                                    message: 'Min. 8 karakters',
                                },
                            }
                        )}
                    />
                    {errors.password && <p className="error-register">Voer je nieuw wachtwoord goed in</p>}
                    <label htmlFor="repeatedPassword">Herhaal wachtwoord*:</label>
                    <input
                        type="password"
                        placeholder="herhaal je wachtwoord"
                        name="repeatedPassword"
                        id="password-repeat-field"
                        ref={register(
                            {required: {
                                    value: true
                                },
                                minLength: {
                                    value: 8,
                                    message: 'Min. 8 karakters',
                                },
                            }
                        )}
                    />
                    {errors.password && <p className="error-register">Herhaal je nieuwe wachtwoord</p>}
                    <div className="button-container">
                        <button
                            className="button-update-password"
                            type="submit"
                            disabled={loading}

                        >
                            {loading ? 'Loading...' : 'Opslaan'}
                        </button>
                    </div>
                    {error && <p className="error-register-from">{error}</p>}
                    {sendSucces && <p className="succesmessage">Wijziging is succesvol!</p>}
                </form>
            </div>
    );
}

export default PasswordUpdate;
