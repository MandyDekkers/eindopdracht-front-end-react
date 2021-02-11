import React, {useState} from 'react'
import {useForm} from "react-hook-form";
import axios from "axios";
import './NewLesson.css';

function NewLesson( {getAllLessons}) {

    const { handleSubmit, register, errors, watch } = useForm();
    const [sendSucces, setSendSucces] = useState(false);
    const [error, setError] = useState(false);

    async function onFormSubmit(data) {
        setError(false);
        try {
            const response = await axios.post(`http://localhost:8080/lesson`, data);
            console.log(data);
            setSendSucces(true);
            getAllLessons();
        } catch (e) {
            console.error(e);
            setError(true);
        }
    }

    return (
        <>
            <div className="lesson-container">
                <form className="lesson-form" onSubmit={handleSubmit(onFormSubmit)}>
                    <label htmlFor="kindOfLesson-field">Soort les*:</label>
                    <input
                        name="name"
                        id="kindOfLesson-field"
                        type="text"
                        placeholder="Fitcamp/Corecamp/Bootcamp"
                        ref={register({required: true})}
                    />
                    {errors.name && <p>Invoer soort les is verplicht</p>}

                    <label htmlFor="date-field">Datum*:</label>
                    <input
                        name="date"
                        id="date-field"
                        type="text"
                        placeholder="Maandag 1 januari 2021, 20:00 uur"
                        ref={register({required: true})}
                    />
                    {errors.date && <p>Invoer soort les is verplicht</p>}

                    <label htmlFor="maxMembers-field">Max. aantal deelnemers*:</label>
                    <input
                        type="tel"
                        id="maxMembers-field"
                        name="maxAmountMembers"
                        placeholder="max. 30 deelnemers"
                        ref={register({required: true })}
                    />
                    {errors.maxAmountMembers && <p>Invoer maximaal aantal deelnemers is verplicht</p>}

                    <label htmlFor="location-field">Niveau*:</label>
                    <input
                        type="text"
                        name="niveau"
                        id="location-field"
                        placeholder="beginner/gemiddeld/gevorderd"
                        ref={register({ required: true })}
                    />
                    {errors.niveau && <p>Locatie les is verplicht</p>}

                    <button type="submit">
                        Opslaan
                    </button>
                </form>
                {error && <p>Er is iets misgegaan bij het opslaan van deze les.</p>}
            </div>
        </>

    )
}

export default NewLesson;
