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

                    <label htmlFor="lastname-field">Achternaam:</label>
                        <input
                        type="text"
                        name="lastName"
                        id="lastname-field"
                        ref={register({ required: true })}
                        />
                        {errors.lastName && <p>Invoer achternaam is verplicht</p>}

                    <label htmlFor="emailaddress-field">E-mailadres:</label>
                        <input
                        name="email"
                        id="emailaddres-field"
                        type="text"
                        ref={register({required: true, validate: (value) => value.includes('@'),})}
                        />
                        {errors.email && <p>Invoer e-mailadres is verplicht</p>}

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

                    <label htmlFor="housenumber-field">Huisnummer:</label>
                    <input
                        name="houseNumber"
                        id="housenumber-field"
                        type="tel"
                        ref={register({ required: true })}
                    />
                    {errors.houseNumber && <p>Invoer huisnummer is verplicht</p>}

                    <label htmlFor="housenumberadd-field">Huisnummertoevoeging:</label>
                    <input
                        name="houseNumberAdd"
                        id="housenumberadd-field"
                        type="text"
                        ref={register({ required: true })}
                    />

                    <label htmlFor="text-field">Opmerkingen:</label>
                    <textarea
                        name="text"
                        id="text-field"
                        rows="4" cols="40"
                        placeholder="aanvullende info/blessures"
                        ref={register}
                    />

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


                {/*<form onSubmit={handleSubmit(onFormSubmit)}>*/}

                {/*    <label htmlFor="firstname-field">Voornaam:</label>*/}
                {/*    <input*/}
                {/*        name="firstname"*/}
                {/*        id="firstname-field"*/}
                {/*        type="text"*/}
                {/*        ref={register({required: true})}*/}
                {/*    />*/}
                {/*    {errors.firstname && <p>Invoer voornaam is verplicht</p>}*/}

                {/*    <label htmlFor="lastname-field">Achternaam:</label>*/}
                {/*    <input*/}
                {/*        type="text"*/}
                {/*        name="lastname"*/}
                {/*        id="lastname-field"*/}
                {/*        ref={register({ required: true })}*/}
                {/*    />*/}
                {/*    {errors.lastname && <p>Invoer achternaam is verplicht</p>}*/}

                {/*    <label htmlFor="emailaddress-field">E-mailadres:</label>*/}
                {/*    <input*/}
                {/*        name="emailaddress"*/}
                {/*        id="emailaddres-field"*/}
                {/*        type="text"*/}
                {/*        ref={register({required: true, validate: (value) => value.includes('@'),})}*/}
                {/*    />*/}
                {/*    {errors.emailaddress && <p>Invoer e-mailadres is verplicht</p>}*/}

                {/*    <label htmlFor="telephonenumber-field">Telefoonnummer:</label>*/}
                {/*    <input*/}
                {/*        type="tel"*/}
                {/*        id="telephonenumber-field"*/}
                {/*        name="telephonenumber"*/}
                {/*        pattern="[0-9]{2}-[0-9]{8}"*/}
                {/*        placeholder="06-12345678"*/}
                {/*        ref={register}*/}
                {/*    />*/}

                {/*    <label htmlFor="dateofbirth-field">Geboortedatum:</label>*/}
                {/*    <input*/}
                {/*        name="dateofbirth"*/}
                {/*        id="dateofbirth-field"*/}
                {/*        type="date"*/}
                {/*        ref={register({ required: true })}*/}
                {/*    />*/}
                {/*    {errors.dateofbirth && <p>Invoer geboortedatum is verplicht</p>}*/}

                {/*    <button type="submit">*/}
                {/*        Versturen*/}
                {/*    </button>*/}

                {/*</form>*/}


                {/*    <form className="form" onSubmit={handleSubmit(onFormSubmit)}>*/}
                {/*        <h2>Register here</h2>*/}
                {/*        <label htmlFor="firstname-field">Voornaam:</label>*/}
                {/*        <input*/}
                {/*            name="firstname"*/}
                {/*            id="firstname-field"*/}
                {/*            type="text"*/}
                {/*            ref={register({required: true})}*/}
                {/*        />*/}
                {/*        {errors.firstname && <p>Invoer voornaam is verplicht</p>}*/}

                {/*        <label htmlFor="lastname-field">*/}
                {/*        Achternaam:</label>*/}
                {/*        <input*/}
                {/*            type="text"*/}
                {/*            name="lastname"*/}
                {/*            id="lastname-field"*/}
                {/*            ref={register({ required: true })}*/}
                {/*        />*/}
                {/*        {errors.lastname && <p>Invoer achternaam is verplicht</p>}*/}


                {/*        <label htmlFor="streetname-field">*/}
                {/*            Straatnaam:</label>*/}
                {/*            <input*/}
                {/*                type="text"*/}
                {/*                name="streetname"*/}
                {/*                id="streetname-field"*/}
                {/*                ref={register({ required: true })}*/}
                {/*            />*/}
                {/*            {errors.streetname && <p>Invoer straatnaam is verplicht</p>}*/}


                {/*        <label htmlFor="zipcode-field">Postcode</label>*/}
                {/*        <input*/}
                {/*            name="zipcode"*/}
                {/*            id="zipcode-field"*/}
                {/*            type="text"*/}
                {/*            ref={register({required: true, pattern: /^[0-9]{4}[a-zA-Z]{2}$/})}*/}
                {/*        />*/}
                {/*        {errors.zipcode && <p>Postcode is niet juist</p>}*/}

                {/*        <label htmlFor="telephonenumber-field">Telefoonnummer:</label>*/}
                {/*        <input*/}
                {/*            type="tel"*/}
                {/*            id="telephonenumber-field"*/}
                {/*            name="telephonenumber"*/}
                {/*            pattern="[0-9]{2}-[0-9]{8}"*/}
                {/*            placeholder="06-12345678"*/}
                {/*            ref={register}*/}
                {/*        />*/}

                {/*        <label htmlFor="emailaddress-field">E-mailadres:</label>*/}
                {/*        <input*/}
                {/*            name="emailaddress"*/}
                {/*            id="emailaddres-field"*/}
                {/*            type="text"*/}
                {/*            ref={register({required: true, validate: (value) => value.includes('@'),})}*/}
                {/*        />*/}
                {/*        {errors.emailaddress && <p>Invoer e-mailadres is verplicht</p>}*/}


                {/*    <label htmlFor="dateofbirth-field">Geboortedatum:</label>*/}
                {/*    <input*/}
                {/*        name="dateofbirth"*/}
                {/*        id="dateofbirth-field"*/}
                {/*        type="date"*/}
                {/*        ref={register({ required: true })}*/}
                {/*    />*/}
                {/*    {errors.dateofbirth && <p>Invoer geboortedatum is verplicht</p>}*/}

                {/*        <label htmlFor="profilephote-field">Uploaden profielfoto:</label>*/}
                {/*        <input*/}
                {/*            name="profilephote"*/}
                {/*            id="profilephote-field"*/}
                {/*            type="file"*/}
                {/*            ref={register}*/}
                {/*        />*/}
                {/*        /!*{errors.emailAddress && <p>Invoer e-mailadres is verplicht</p>}*!/*/}

                {/*        <label htmlFor="text-field">Opmerkingen:</label>*/}
                {/*        <textarea*/}
                {/*            name="text"*/}
                {/*            id="text-field"*/}
                {/*            rows="4" cols="40"*/}
                {/*            placeholder="aanvullende info/blessures"*/}
                {/*            ref={register}*/}
                {/*        />*/}
                {/*        /!*{errors.emailAddress && <p>Invoer e-mailadres is verplicht</p>}*!/*/}

                {/*    <label htmlFor="terms-and-conditions-field">*/}
                {/*        Ik ga akkoord met de algemene voorwaarden.</label>*/}
                {/*        <input*/}
                {/*            type="checkbox"*/}
                {/*            name="terms-and-conditions"*/}
                {/*            id="terms-and-conditions-field"*/}
                {/*           // ref={register({ required: true })}*/}
                {/*        />*/}

                {/*    <button className="register-button"*/}
                {/*        type="submit"*/}
                {/*        // disabled={!checkedTerms}*/}
                {/*        // onClick={() => setSubmitted(true)}*/}
                {/*    >*/}
                {/*        Verstuur*/}
                {/*    </button>*/}
                {/*</form>*/}
            </div>
        </>
    );
}

export default RegisterPage;