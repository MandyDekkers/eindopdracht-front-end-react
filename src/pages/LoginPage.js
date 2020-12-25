import axios from "axios";
import { useForm } from 'react-hook-form';
import React from 'react';
import './LoginPage.css';
import { ReactComponent as Userphoto  } from './gebruiker2.svg';

function LoginPage() {

    const { handleSubmit, register, errors, watch } = useForm();

    return (
    <>
        <div className="login-box">
            <Userphoto className="user"/>
                <h2>Login here</h2>
                    <form>
                        <p>Username</p>
                            <input type="text" name="username" placeholder="enter username"/>
                        <p>Password</p>
                            <input type="password" name="password" placeholder="enter password"/>
                            <input type="submit" name="submit" value="Login"/>
                            <a href="#">Forget password</a>
                    </form>


        {/*<form className="loginbox">*/}
        {/*    <div>*/}
        {/*        <label htmlFor="username-field">Gebruikersnaam:</label>*/}
        {/*        <input*/}
        {/*            name="username"*/}
        {/*            id="username-field"*/}
        {/*            type="text"*/}
        {/*            ref={register({required: true})}*/}
        {/*        />*/}
        {/*        {errors.username && <p>Gebruikersnaam is verplicht</p>}*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*        <label htmlFor="password-field">*/}
        {/*            Wachtwoord:*/}
        {/*            <input*/}
        {/*                type="password"*/}
        {/*                name="password"*/}
        {/*                id="password-field"*/}
        {/*                ref={register({ required: true })}*/}
        {/*            />*/}
        {/*            {errors.password && <p>Wachtwoord is verplicht</p>}*/}
        {/*        </label>*/}
        {/*    </div>*/}

        {/*    <button className="login-button"*/}
        {/*        type="submit"*/}
        {/*        // disabled={!checkedTerms}*/}
        {/*        // onClick={() => setSubmitted(true)}*/}
        {/*    >*/}
        {/*        Inloggen*/}
        {/*    </button>*/}
        {/*</form>*/}
        </div>
        </>
    );
}

export default LoginPage;
