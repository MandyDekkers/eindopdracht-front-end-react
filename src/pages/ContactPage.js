import React from 'react';
import './ContactPage.css';
import Header from "../components/header/Header";
import {useForm} from "react-hook-form";
import question from "../assets/question.png";
import PageHeader from "../components/header/PageHeader";


function ContactPage() {
    const { handleSubmit, register, errors, watch } = useForm();

    return (

        <div className="contact-container" >
            <Header />
            <PageHeader icon={question} title="Neem contact met ons op" />
        <div className="contactbox">
            <form className="contactform">
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

                <button className="send"
                    type="submit"

                >
                    Verstuur
                </button>
            </form>
        </div>
        </div>
    );
}

export default ContactPage;
