import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import Header from "../components/header/Header";
import {useForm} from "react-hook-form";
// import {AuthContext, useAuthState} from "../context/AuthContext";


function ProfilePage() {

    const [client, setClient] = useState(null);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    // const { user } = useAuthState();


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
            {/*{ user && (*/}
            {/*    <h1>Hallo {user.username}!</h1>*/}
            {/*) }*/}

            {/*{loading && <p>Loading...</p>}*/}
            {/*{error && <p>Er is iets misgegaan bij het ophalen van je persoonlijke gegevens.</p>}*/}

            <form onSubmit={handleSubmit(onSubmit)}>
                <input ref={register} type="file" name="picture"/>
                <button>Verstuur mijn foto</button>
            </form>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet aperiam consequuntur corporis cum cupiditate deleniti ducimus earum eos error esse, fuga fugiat in itaque iusto laudantium maxime minima mollitia necessitatibus neque obcaecati optio placeat recusandae rerum saepe sed similique soluta, tenetur veniam voluptas, voluptate voluptatibus voluptatum? Alias assumenda blanditiis dolor fugiat, itaque iure maxime modi molestias mollitia qui, rem sint sit ut. Alias commodi mollitia officia optio quasi! Asperiores aspernatur culpa dolore error, est excepturi minima modi nam placeat quo, sed sit ut? Accusantium asperiores assumenda consequuntur, deserunt dignissimos distinctio est eveniet excepturi expedita facere harum hic iusto laboriosam maxime necessitatibus quas quibusdam quisquam similique soluta unde? Amet consectetur culpa, cumque delectus est excepturi hic illum laudantium natus nihil nostrum perspiciatis quaerat qui quia ratione sequi sint velit. Adipisci amet commodi corporis cumque debitis delectus, eveniet ipsam iure omnis quasi similique tenetur velit voluptates! A accusamus accusantium adipisci aliquam delectus deserunt eaque error expedita explicabo fuga fugiat ipsa, ipsam nisi, nobis omnis quam quibusdam quo ratione repudiandae sapiente sequi vel velit vero! Atque autem impedit incidunt labore minus molestias mollitia nam, obcaecati quidem temporibus. Assumenda atque, aut beatae illum magni nemo provident quo rerum similique suscipit tenetur velit.</p>

        </div>
    );
}

export default ProfilePage;
