import React from 'react';
import { useForm } from 'react-hook-form';
import './RegisterPage.css';

function RegisterPage() {

    const { handleSubmit, register, errors, watch } = useForm();

    function onFormSubmit(data) {
        console.log(data);
    }
    //
    // const onError = (errorList) => {
    //     console.log(errorList)
    //

    return (
        <>
            <div className="register-box">
                    <form className="form" onSubmit={handleSubmit(onFormSubmit)}>
                        <h2>Register here</h2>
                        <label htmlFor="firstname-field">Voornaam:</label>
                        <input
                            name="firstname"
                            id="firstname-field"
                            type="text"
                            ref={register({required: true})}
                        />
                        {errors.firstname && <p>Invoer voornaam is verplicht</p>}

                        <label htmlFor="lastname-field">
                        Achternaam:</label>
                        <input
                            type="text"
                            name="lastname"
                            id="lastname-field"
                            ref={register({ required: true })}
                        />
                        {errors.lastname && <p>Invoer achternaam is verplicht</p>}


                        <label htmlFor="streetname-field">
                            Straatnaam:</label>
                            <input
                                type="text"
                                name="streetname"
                                id="streetname-field"
                                ref={register({ required: true })}
                            />
                            {errors.streetname && <p>Invoer straatnaam is verplicht</p>}


                        <label htmlFor="zipcode-field">Postcode</label>
                        <input
                            name="zipcode"
                            id="zipcode-field"
                            type="text"
                            ref={register({required: true, pattern: /^[0-9]{4}[a-zA-Z]{2}$/})}
                        />
                        {errors.zipcode && <p>Postcode is niet juist</p>}

                        <label htmlFor="telephonenumber-field">Telefoonnummer:</label>
                        <input
                            type="tel"
                            id="telephonenumber-field"
                            name="telephonenumber"
                            pattern="[0-9]{2}-[0-9]{8}"
                            placeholder="06-12345678"
                            ref={register}
                        />

                        <label htmlFor="emailaddress-field">E-mailadres:</label>
                        <input
                            name="emailaddress"
                            id="emailaddres-field"
                            type="text"
                            ref={register({required: true, validate: (value) => value.includes('@'),})}
                        />
                        {errors.emailaddress && <p>Invoer e-mailadres is verplicht</p>}


                    <label htmlFor="dateofbirth-field">Geboortedatum:</label>
                    <input
                        name="dateofbirth"
                        id="dateofbirth-field"
                        type="date"
                        ref={register({ required: true })}
                    />
                    {errors.dateofbirth && <p>Invoer geboortedatum is verplicht</p>}

                        <label htmlFor="profilephote-field">Uploaden profielfoto:</label>
                        <input
                            name="profilephote"
                            id="profilephote-field"
                            type="file"
                            ref={register}
                        />
                        {/*{errors.emailAddress && <p>Invoer e-mailadres is verplicht</p>}*/}

                        <label htmlFor="text-field">Opmerkingen:</label>
                        <textarea
                            name="text"
                            id="text-field"
                            rows="4" cols="40"
                            placeholder="aanvullende info/blessures"
                            ref={register}
                        />
                        {/*{errors.emailAddress && <p>Invoer e-mailadres is verplicht</p>}*/}

                    <label htmlFor="terms-and-conditions-field">
                        Ik ga akkoord met de algemene voorwaarden.</label>
                        <input
                            type="checkbox"
                            name="terms-and-conditions"
                            id="terms-and-conditions-field"
                           // ref={register({ required: true })}
                        />

                    <button className="register-button"
                        type="submit"
                        // disabled={!checkedTerms}
                        // onClick={() => setSubmitted(true)}
                    >
                        Verstuur
                    </button>
                </form>
            </div>
        </>
    );
}

export default RegisterPage;