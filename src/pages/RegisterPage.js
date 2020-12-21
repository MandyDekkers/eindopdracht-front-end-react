import React from 'react';
import { useForm } from 'react-hook-form';

function RegisterPage() {

    const { handleSubmit, register, errors, watch } = useForm();

    function onFormSubmit(data) {
        console.log(data);
    }
    //
    // const onError = (errorList) => {
    //     console.log(errorList)
    // }

    return (
        <>
            <div className="form-container">
                <h2>Jouw registratie:</h2>
                <br/>

                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div>
                        <label htmlFor="firstName">Voornaam</label>
                        <input
                            name="firstName"
                            id="firstName"
                            type="text"
                            ref={register({required: true})}
                        />
                        {errors.firstName && <p>Invoer voornaam is verplicht</p>}
                    </div>
                    <div>
                    <label htmlFor="details-name">
                        Achternaam:
                        <input
                            type="text"
                            name="lastname"
                            id="last-name"
                            ref={register({ required: true })}
                        />
                        {errors.lastname && <p>Invoer achternaam is verplicht</p>}
                    </label>
                    </div>
                    <div>
                        <label htmlFor="zipCode">Postcode</label>
                        <input
                            name="zipCode"
                            id="zipCode"
                            type="text"
                            ref={register({required: true, pattern: /^[0-9]{4}[a-zA-Z]{2}$/})}
                        />
                        {errors.zipCode && <p>Postcode is niet juist</p>}
                    </div>
                    <div>
                        <label htmlFor="emailaddress">E-mailadres:</label>
                        <input
                            name="emailaddress"
                            id="emailaddres"
                            type="text"
                            ref={register({required: true, validate: (value) => value.includes('@'),})}
                        />
                        {errors.emailaddress && <p>Invoer e-mailadres is verplicht</p>}
                    </div>
                    <div>
                    <label htmlFor="terms-and-conditions">
                        <input
                            type="checkbox"
                            name="terms-and-conditions"
                            id="terms-and-conditions"
                           // ref={register({ required: true })}
                        />
                        Ik ga akkoord met de algemene voorwaarden.
                    </label>
                    </div>

                    <button
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