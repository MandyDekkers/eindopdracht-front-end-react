import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import Header from "../components/header/Header";
import {useForm} from "react-hook-form";
import { UserContext } from "../context/UserContext";


function ProfilePage() {

    const [client, setClient] = useState(null);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);
    const { register, handleSubmit, errors } = useForm();

    const { currentUser } = useContext(UserContext);


    useEffect(() => {
        const token = axios.CancelToken.source();

        async function getData(){
            toggleLoading(true);
            setError(false);

            try{
                const result = await axios.get();
                setClient(result.data);
                toggleLoading(true);
            } catch (e) {
                console.error(e);
                toggleLoading(false);
                setError(true);
            }
        }

        getData();

        return () => {
            token.cancel('Operation canceled by user.');
        }

    }, []);

    const onSubmit = (data) => {
        console.log(data)
    }

    return (

        <div >
            <Header />

            <h1>Hello {currentUser.firstName}</h1>

            {loading && <p>Loading...</p>}
            {error && <p>Er is iets misgegaan bij het ophalen van je persoonlijke gegevens.</p>}
            <h1>ProfilePage</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input ref={register} type="file" name="picture"/>
                <button>Verstuur mijn foto</button>
            </form>

        </div>
    );
}

export default ProfilePage;