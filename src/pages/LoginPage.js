import axios from "axios";
import { useForm } from 'react-hook-form';
import React from 'react';
import './LoginPage.css';

function LoginPage() {

    const { handleSubmit, register, errors, watch } = useForm();

    return (
    <>
        <div>
        <h1>LoginPage</h1>
        </div>

        <form className="loginbox">
            <div>
                <label htmlFor="username-field">Gebruikersnaam:</label>
                <input
                    name="username"
                    id="username-field"
                    type="text"
                    ref={register({required: true})}
                />
                {errors.username && <p>Gebruikersnaam is verplicht</p>}
            </div>
            <div>
                <label htmlFor="password-field">
                    Wachtwoord:
                    <input
                        type="password"
                        name="password"
                        id="password-field"
                        ref={register({ required: true })}
                    />
                    {errors.password && <p>Wachtwoord is verplicht</p>}
                </label>
            </div>

            <button className="login-button"
                type="submit"
                // disabled={!checkedTerms}
                // onClick={() => setSubmitted(true)}
            >
                Inloggen
            </button>
        </form>
        </>
    );
}

export default LoginPage;
