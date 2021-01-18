import React from 'react';
import { useForm } from 'react-hook-form';

function UpdateMember({member, updateMember, setUpdate}) {

    const { handleSubmit, register, errors, watch } = useForm();

    function onFormSubmit(data) {
        updateMember(data);
        console.log(data);
    }

    return (
        <>
            <button onClick={() => setUpdate(0)} type="button" className="close">X</button>

            <div className="register-box">
                <form className="register-form" onSubmit={handleSubmit(onFormSubmit)}>

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

                    <label htmlFor="telephonenumber-field">Telefoonnummer:</label>
                    <input
                        defaultValue={member.phoneNumber}
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
                        defaultValue={member.dateOfBirth}
                        name="dateOfBirth"
                        id="dateofbirth-field"
                        type="date"
                        ref={register({ required: true })}
                    />
                    {errors.dateOfBirth && <p>Invoer geboortedatum is verplicht</p>}

                    <label htmlFor="streetname-field">Straatnaam:</label>
                    <input
                        defaultValue={member.streetName}
                        name="streetName"
                        id="streetname-field"
                        type="text"
                        ref={register({ required: true })}
                    />
                    {errors.streetName && <p>Invoer straatnaam is verplicht</p>}

                    <label htmlFor="housenumber-field">Huisnummer + toevoeging:</label>
                    <input
                        defaultValue={member.houseNumber}
                        name="houseNumber"
                        id="housenumber-field"
                        type="tel"
                        ref={register({ required: true })}
                    />
                    {errors.houseNumber && <p>Invoer huisnummer is verplicht</p>}

                    <label htmlFor="postalCode-field">Postcode</label>
                    <input
                        defaultValue={member.postalCode}
                        name="postalCode"
                        id="zipcode-field"
                        type="text"
                        ref={register({required: true, pattern: /^[0-9]{4}[a-zA-Z]{2}$/})}
                    />
                    {errors.postalCode && <p>Postcode is niet juist</p>}

                    <label htmlFor="city-field">Woonplaats:</label>
                    <input
                        defaultValue={member.city}
                        name="city"
                        id="city-field"
                        type="text"
                        ref={register({ required: true })}
                    />
                    {errors.city && <p>Invoer woonplaats is verplicht</p>}

                    <button type="submit">
                        Opslaan
                    </button>
                </form>
            </div>
        </>
    );
}

export default UpdateMember;