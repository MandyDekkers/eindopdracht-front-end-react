import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './RegisterPage.css';
import axios from "axios";
import './LoginPage';
import { Link } from 'react-router-dom';

function RegisterPage() {
    const { handleSubmit, register, errors } = useForm();
    const [sendSucces, setSendSucces] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');

    async function onFormSubmit(data) {
        toggleLoading(true);
        setError(false);
        try {
            const response = await axios.post('http://localhost:8080/api/auth/signup', {
                firstName: data.firstName,
                lastName: data.lastName,
                username: data.username,
                email: data.email,
                password: data.password,
                streetName: data.streetName,
                houseNumber: data.houseNumber,
                postalCode: data.postalCode,
                city: data.city,
            });
            if (response.status === 200) {
                setSendSucces(true);
            }
        } catch (e) {
            console.error(e);
            if (e.message.includes('400')) {
                setError('Er bestaal al een acount met deze gebruikersnaam en /of emailadres');
            } else {
                setError('Er is iets misgegaan bij het verzenden. Probeer het opnieuw')
            }
        }
        toggleLoading(false);
    }

    return (
        <>


            <div className="register-container">
                <form className="register-form" onSubmit={handleSubmit(onFormSubmit)}>
                    <label htmlFor="firstname-field">Voornaam*:</label>
                        <input
                        name="firstName"
                        id="firstname-field"
                        type="text"
                        ref={register({required: true})}
                        />
                        {errors.firstName && <p className="error-register">Invoer voornaam is verplicht</p>}

                    <label htmlFor="lastname-field">Achternaam*:</label>
                        <input
                        type="text"
                        name="lastName"
                        id="lastname-field"
                        ref={register({ required: true })}
                        />
                        {errors.lastName && <p className="error-register">Invoer achternaam is verplicht</p>}

                    <label htmlFor="lastname-field">Gebruikersnaam*:</label>
                    <input
                        type="text"
                        name="username"
                        id="username-field"
                        placeholder="min. 8 karakters"
                        ref={register({ required: true })}
                    />
                    {errors.lastName && <p className="error-register">Invoer gebruikersnaam is verplicht</p>}

                    <label htmlFor="emailaddress-field">E-mailadres*:</label>
                        <input
                        name="email"
                        id="emailaddres-field"
                        type="text"
                        ref={register({required: true, validate: (value) => value.includes('@'),})}
                        />
                        {errors.email && <p className="error-register">Invoer e-mailadres is verplicht</p>}

                    <label htmlFor="password">Wachtwoord*:</label>
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
                    {errors.password && <p className="error-register">Invoer wachtwoord is verplicht</p>}

                    <label htmlFor="streetname-field">Straatnaam*:</label>
                    <input
                        name="streetName"
                        id="streetname-field"
                        type="text"
                        ref={register({ required: true })}
                    />
                    {errors.streetName && <p className="error-register">Invoer straatnaam is verplicht</p>}

                    <label htmlFor="housenumber-field">Huisnummer + toevoeging*:</label>
                    <input
                        name="houseNumber"
                        id="housenumber-field"
                        type="tel"
                        ref={register({ required: true })}
                    />
                    {errors.houseNumber && <p className="error-register">Invoer huisnummer is verplicht</p>}

                    <label htmlFor="postalCode-field">Postcode*:</label>
                    <input
                        name="postalCode"
                        id="zipcode-field"
                        type="text"
                        placeholder="1234AB"
                        ref={register({required: true, pattern: /^[0-9]{4}[a-zA-Z]{2}$/})}
                    />
                    {errors.postalCode && <p className="error-register">Postcode is niet juist</p>}

                    <label htmlFor="city-field">Woonplaats*:</label>
                    <input
                        name="city"
                        id="city-field"
                        type="text"
                        ref={register({ required: true })}
                    />
                    {errors.city && <p className="error-register">Invoer woonplaats is verplicht</p>}

                    <div className="login-button-container">
                    <button
                        className="register-button"
                        type="submit"
                        disabled={loading}

                    >
                        {loading ? 'Loading...' : 'Maak account aan'}
                    </button>
                    </div>
                    {error && <p className="error-register-from">{error}</p>}
                    {sendSucces && <p className="succesmessage">Je bent succesvol geregistreerd, klik  <Link to="/login">hier</Link>  om in te loggen.</p>}
                </form>
            </div>
        </>
    );
}

export default RegisterPage;
