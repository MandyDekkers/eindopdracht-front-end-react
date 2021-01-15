import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './RegisterPage.css';
import axios from "axios";
import './LoginPage';


function RegisterPage() {
    const { handleSubmit, register, errors, watch } = useForm();
    const [sendSucces, setSendSucces] = useState(false);
    const [error, setError] = useState(false);

    async function onFormSubmit(data) {
        setError(false);
        try {
            const response = await axios.post(`http://localhost:8080/appuser`, data);
            console.log(data);
            setSendSucces(true);
        } catch (e) {
            console.error(e);
            setError(true);
        }
    }

    return (
        <>
            <div className="register-box">
                <form className="register-form" onSubmit={handleSubmit(onFormSubmit)}>
                    <label htmlFor="firstname-field">Voornaam*:</label>
                        <input
                        name="firstName"
                        id="firstname-field"
                        type="text"
                        ref={register({required: true})}
                        />
                        {errors.firstName && <p>Invoer voornaam is verplicht</p>}

                    <label htmlFor="lastname-field">Achternaam*:</label>
                        <input
                        type="text"
                        name="lastName"
                        id="lastname-field"
                        ref={register({ required: true })}
                        />
                        {errors.lastName && <p>Invoer achternaam is verplicht</p>}

                    <label htmlFor="emailaddress-field">E-mailadres*:</label>
                        <input
                        name="email"
                        id="emailaddres-field"
                        type="text"
                        ref={register({required: true, validate: (value) => value.includes('@'),})}
                        />
                        {errors.email && <p>Invoer e-mailadres is verplicht</p>}

                    <label htmlFor="password">Wachtwoord*:</label>
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

                    <label htmlFor="telephonenumber-field">Telefoonnummer:</label>
                        <input
                        type="tel"
                        id="telephonenumber-field"
                        name="phoneNumber"
                        pattern="[0-9]{2}-[0-9]{8}"
                        placeholder="06-12345678"
                        ref={register}
                        />
                        {errors.phoneNumber && <p>Invoer telefoonnummer is verplicht</p>}

                    <label htmlFor="dateofbirth-field">Geboortedatum:</label>
                        <input
                        name="dateOfBirth"
                        id="dateofbirth-field"
                        type="date"
                        ref={register({ required: true })}
                        />
                        {errors.dateOfBirth && <p>Invoer geboortedatum is verplicht</p>}

                    <label htmlFor="streetname-field">Straatnaam:</label>
                    <input
                        name="streetName"
                        id="streetname-field"
                        type="text"
                        ref={register({ required: true })}
                    />
                    {errors.streetName && <p>Invoer straatnaam is verplicht</p>}

                    <label htmlFor="housenumber-field">Huisnummer + toevoeging:</label>
                    <input
                        name="houseNumber"
                        id="housenumber-field"
                        type="tel"
                        ref={register({ required: true })}
                    />
                    {errors.houseNumber && <p>Invoer huisnummer is verplicht</p>}

                    <label htmlFor="postalCode-field">Postcode</label>
                    <input
                        name="postalCode"
                        id="zipcode-field"
                        type="text"
                        ref={register({required: true, pattern: /^[0-9]{4}[a-zA-Z]{2}$/})}
                    />
                    {errors.postalCode && <p>Postcode is niet juist</p>}

                    <label htmlFor="city-field">Woonplaats:</label>
                    <input
                        name="city"
                        id="city-field"
                        type="text"
                        ref={register({ required: true })}
                    />
                    {errors.city && <p>Invoer woonplaats is verplicht</p>}

                    <label htmlFor="termsandconditions-field">Ik ga akkoord met de algemene voorwaarden.</label>
                    <input
                        name="termsAndConditions"
                        id="termsandconditions-field"
                        type="checkbox"
                        ref={register({ required: true })}
                    />

                    <button type="submit">
                        Versturen
                    </button>
                </form>
                {error && <p>Er is iets misgegaan bij het versturen van je persoonlijke gegevens.</p>}
            </div>
        </>
    );
}

export default RegisterPage;