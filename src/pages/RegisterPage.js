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
    // }

    return (
        <>
            <div className="form-container">
                <h2>Jouw registratie:</h2>
                <div className="form">
                <form onSubmit={handleSubmit(onFormSubmit)}>

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
                            ref={register}
                        />
                        <br/>
                        <small>(06-12345678)</small>

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
                        <br/>
                        <textarea
                            name="text"
                            id="text-field"
                            rows="4" cols="40"
                            placeholder="aanvullende info/blessures"
                            ref={register}
                        />
                        {/*{errors.emailAddress && <p>Invoer e-mailadres is verplicht</p>}*/}



                    <label htmlFor="terms-and-conditions-field">
                        <input
                            type="checkbox"
                            name="terms-and-conditions"
                            id="terms-and-conditions-field"
                           // ref={register({ required: true })}
                        />
                        Ik ga akkoord met de algemene voorwaarden.
                    </label>


                    <button className="register-button"
                        type="submit"
                        // disabled={!checkedTerms}
                        // onClick={() => setSubmitted(true)}
                    >
                        Verstuur
                    </button>
                </form>
                </div>
            </div>
        </>
    );
}

export default RegisterPage;