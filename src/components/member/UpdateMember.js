import React from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import './UpdateMember.css'

function UpdateMember({ member, setUpdateMember, getAllMembers }) {

    const { handleSubmit, register, errors } = useForm();

    async function onFormSubmit(data) {
        try {
            const result = await axios.put(`http://localhost:8080/appuser/${member.id}`, data);
            console.log(result);
            setUpdateMember(null);
        } catch (error) {
            console.error(error);
        }
        console.log(data);
    }
    return (
        <>
            <div className="update-container">
                <form className="member-form" onSubmit={handleSubmit(onFormSubmit)}>
                    <button onClick={() => setUpdateMember(0)} type="button" className="close">X</button>

                    <label htmlFor="member-id"> Id:</label>
                    <input type="text" readOnly defaultValue={member.id}/>

                    <label htmlFor="firstname-field">Voornaam*:</label>
                    <input
                        defaultValue={member.firstName}
                        name="firstName"
                        id="firstname-field"
                        type="text"
                        ref={register({required: true})}
                    />
                    {errors.firstName && <p>Invoer voornaam is verplicht</p>}

                    <label htmlFor="lastname-field">Achternaam*:</label>
                    <input
                        defaultValue={member.lastName}
                        type="text"
                        name="lastName"
                        id="lastname-field"
                        ref={register({ required: true })}
                    />
                    {errors.lastName && <p>Invoer achternaam is verplicht</p>}

                    <label htmlFor="emailaddress-field">E-mailadres*:</label>
                    <input
                        defaultValue={member.email}
                        name="email"
                        id="emailaddres-field"
                        type="text"
                        ref={register({required: true, validate: (value) => value.includes('@'),})}
                    />
                    {errors.email && <p>Invoer e-mailadres is verplicht</p>}

                    <label htmlFor="streetname-field">Straatnaam*:</label>
                    <input
                        defaultValue={member.streetName}
                        name="streetName"
                        id="streetname-field"
                        type="text"
                        ref={register({ required: true })}
                    />
                    {errors.streetName && <p>Invoer straatnaam is verplicht</p>}

                    <label htmlFor="housenumber-field">Huisnummer + toevoeging*:</label>
                    <input
                        defaultValue={member.houseNumber}
                        name="houseNumber"
                        id="housenumber-field"
                        type="tel"
                        ref={register({ required: true })}
                    />
                    {errors.houseNumber && <p>Invoer huisnummer is verplicht</p>}

                    <label htmlFor="postalCode-field">Postcode*:</label>
                    <input
                        defaultValue={member.postalCode}
                        name="postalCode"
                        id="zipcode-field"
                        type="text"
                        ref={register({required: true, pattern: /^[0-9]{4}[a-zA-Z]{2}$/})}
                    />
                    {errors.postalCode && <p>Postcode is niet juist</p>}

                    <label htmlFor="city-field">Woonplaats*:</label>
                    <input

                        defaultValue={member.city}
                        name="city"
                        id="city-field"
                        type="text"
                        ref={register({ required: true })}
                    />
                    {errors.city && <p>Invoer woonplaats is verplicht</p>}

                    <button className="savebutton" type="submit">
                        Opslaan
                    </button>
                </form>
            </div>
        </>
    );
}

export default UpdateMember;
