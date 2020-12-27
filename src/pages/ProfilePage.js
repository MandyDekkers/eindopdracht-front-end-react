import React, {useEffect, useState} from 'react';
import axios from "axios";


function ProfilePage() {

    const [client, setClient] = useState(null);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);

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

    return (
        <div >
            {loading && <p>Loading...</p>}
            {error && <p>Er is iets misgegaan bij het ophalen van je persoonlijke gegevens.</p>}
            <h1>ProfilePage</h1>

        </div>
    );
}

export default ProfilePage;