import React from 'react';
import './ContactPage.css';
import Header from "../components/header/Header";
import {useForm} from "react-hook-form";


function ContactPage() {
    const { handleSubmit, register, errors, watch } = useForm();

    return (

        <div className="contact-container" >
            <Header />
            <h3>Indien je vragen/opmerkingen of andere zaken wil mededelen, vul onderstaand formulier in!</h3>
            <form>
                <label htmlFor="firstName-field">Voornaam*:</label>
                <input
                    // defaultValue={} voornaam automatisch invullen
                    type="text"
                    name="firstName"
                    id="firstName-field"
                    ref={register({ required: true })}
                />
                {errors.firstName && <p>Invoer voornaam is verplicht</p>}

                <label htmlFor="lastName-field">Achternaam*:</label>
                <input
                    // defaultValue={} achternaam automatisch invullen
                    type="text"
                    name="lastName"
                    id="lastName-field"
                    ref={register({ required: true })}
                />
                {errors.lastName && <p>Invoer achternaam is verplicht</p>}

                <label htmlFor="emailaddress-field">E-mailadres*:</label>
                <input
                    // defaultValue={} email automatisch invullen
                    name="email"
                    id="emailaddres-field"
                    type="text"
                    ref={register({required: true, validate: (value) => value.includes('@'),})}
                />
                {errors.email && <p>Invoer e-mailadres is verplicht</p>}

                <label htmlFor="comment-field">Vraag/opmerking*:</label>
                <textarea
                    placeholder="vul hier je vraag of opmering in"
                    name="text"
                    id="comment-field"
                    rows="4" cols="50"
                    ref={register({required: true})}
                />
                {errors.text && <p>Invoer is verplicht</p>}




                <button
                    type="submit"

                >
                    Verstuur
                </button>
            </form>
        </div>
    );
}

export default ContactPage;
