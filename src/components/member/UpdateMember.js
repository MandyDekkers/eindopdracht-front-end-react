import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import './UpdateMember.css'

function UpdateMember({ member, setUpdateMember, getAllMembers }) {
    const { handleSubmit, register, errors } = useForm();
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState(false);

    async function onFormSubmit(data) {
        toggleLoading(true);
        setError('');
        const token = localStorage.getItem('token');
        try {
            await axios.put(`http://localhost:8080/appuser/${member.id}`, data , {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            setUpdateMember(null);
            getAllMembers();
        } catch (error) {
            setError('Probeer het opnieuw')
        }
        toggleLoading(false);
    }
    return (
        <>
            <div className="update-container">
                <form className="update-member-form" onSubmit={handleSubmit(onFormSubmit)}>
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
                    {errors.firstName && <p className="error-update">Invoer voornaam is verplicht</p>}
                    <label htmlFor="lastname-field">Achternaam*:</label>
                    <input
                        defaultValue={member.lastName}
                        type="text"
                        name="lastName"
                        id="lastname-field"
                        ref={register({ required: true })}
                    />
                    {errors.lastName && <p className="error-update">Invoer achternaam is verplicht</p>}
                    <label htmlFor="emailaddress-field">E-mailadres*:</label>
                    <input
                        defaultValue={member.email}
                        name="email"
                        id="emailaddres-field"
                        type="text"
                        ref={register({required: true, validate: (value) => value.includes('@'),})}
                    />
                    {errors.email && <p className="error-update">Voer een juist e-mailadres in</p>}
                    <label htmlFor="streetname-field">Straatnaam*:</label>
                    <input
                        defaultValue={member.streetName}
                        name="streetName"
                        id="streetname-field"
                        type="text"
                        ref={register({ required: true })}
                    />
                    {errors.streetName && <p className="error-update">Invoer straatnaam is verplicht</p>}
                    <label htmlFor="housenumber-field">Huisnummer + toevoeging*:</label>
                    <input
                        defaultValue={member.houseNumber}
                        name="houseNumber"
                        id="housenumber-field"
                        type="tel"
                        ref={register({ required: true })}
                    />
                    {errors.houseNumber && <p className="error-update">Invoer huisnummer is verplicht</p>}
                    <label htmlFor="postalCode-field">Postcode*:</label>
                    <input
                        defaultValue={member.postalCode}
                        name="postalCode"
                        id="zipcode-field"
                        type="text"
                        ref={register({required: true, pattern: /^[0-9]{4}[a-zA-Z]{2}$/})}
                    />
                    {errors.postalCode && <p className="error-update">Postcode is niet juist</p>}
                    <label htmlFor="city-field">Woonplaats*:</label>
                    <input

                        defaultValue={member.city}
                        name="city"
                        id="city-field"
                        type="text"
                        ref={register({ required: true })}
                    />
                    {errors.city && <p className="error-update">Invoer woonplaats is verplicht</p>}
                    <div className="update-member-button">
                        <button
                            className="savebutton"
                            type="submit"
                            disabled={loading}
                        >
                        {loading ? 'Laden...' : 'Opslaan'}
                        </button>
                    </div>
                    {error && <p className="update-message-error">{error}</p>}
                </form>
            </div>
        </>
    );
}

export default UpdateMember;
