import React, {useState} from 'react'
import {useForm} from "react-hook-form";
import axios from "axios";
import './NewLesson.css';

function NewLesson( {getAllLessons} ) {

    const { handleSubmit, register, errors, watch } = useForm();
    const [sendSucces, setSendSucces] = useState(false);
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState(false);

    async function onFormSubmit(data) {
        toggleLoading(true);
        setError('');
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post(`http://localhost:8080/lesson`, data, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            setSendSucces(true);
            getAllLessons();
        } catch (e) {
            console.error(e);
            setError('Er is iets misgegaan bij het versturen')
        }
        toggleLoading(false);
    }

    return (
        <>
                <form className="lesson-form" onSubmit={handleSubmit(onFormSubmit)}>
                    <label htmlFor="kindOfLesson-field">Soort les*:</label>
                    <input
                        name="name"
                        id="kindOfLesson-field"
                        type="text"
                        placeholder="Fitcamp/Corecamp/Bootcamp"
                        ref={register({required: true})}
                    />
                    {errors.name && <p className="error">Invoer soort les is verplicht</p>}

                    <label htmlFor="date-field">Datum*:</label>
                    <input
                        name="date"
                        id="date-field"
                        type="text"
                        placeholder="Maandag 1 januari 2021, 20:00 uur"
                        ref={register({required: true})}
                    />
                    {errors.date && <p className="error">Invoer soort les is verplicht</p>}

                    <label htmlFor="maxMembers-field">Max. aantal deelnemers*:</label>
                    <input
                        type="tel"
                        id="maxMembers-field"
                        name="maxAmountMembers"
                        placeholder="max. 30 deelnemers"
                        ref={register({required: true })}
                    />
                    {errors.maxAmountMembers && <p className="error">Invoer maximaal aantal deelnemers is verplicht</p>}

                    <label htmlFor="location-field">Niveau*:</label>
                    <input
                        type="text"
                        name="niveau"
                        id="location-field"
                        placeholder="beginner/gemiddeld/gevorderd"
                        ref={register({ required: true })}
                    />
                    {errors.niveau && <p className="error">Locatie les is verplicht</p>}

                    <button
                        className="savenewlesson"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? 'Laden...' : 'Opslaan'}
                    </button>
                    {error && <p className="message-error">{error}</p>}
                </form>
                {error && <p>Er is iets misgegaan bij het opslaan van deze les.</p>}
        </>

    )
}

export default NewLesson;
