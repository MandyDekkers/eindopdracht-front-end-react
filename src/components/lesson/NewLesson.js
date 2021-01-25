import React, {useState} from 'react'
import {useForm} from "react-hook-form";
import axios from "axios";

function NewLesson() {

    const { handleSubmit, register, errors, watch } = useForm();
    const [sendSucces, setSendSucces] = useState(false);
    const [error, setError] = useState(false);

    async function onFormSubmit(data) {
        setError(false);
        try {
            const response = await axios.post(`http://localhost:8080/lesson`, data);
            console.log(data);
            setSendSucces(true);
        } catch (e) {
            console.error(e);
            setError(true);
        }
    }

    return (
        <>
            <div className="lesson-container">
                <form className="lesson-from" onSubmit={handleSubmit(onFormSubmit)}>
                    <label htmlFor="kindOfLesson-field">Soort les*:</label>
                    <input
                        name="lessonName"
                        id="kindOfLesson-field"
                        type="text"
                        ref={register({required: true})}
                    />
                    {errors.lessonName && <p>Invoer soort les is verplicht</p>}

                    <label htmlFor="location-field">Locatie*:</label>
                    <input
                        type="text"
                        name="location"
                        id="location-field"
                        ref={register({ required: true })}
                    />
                    {errors.location && <p>Locatie les is verplicht</p>}

                    <label htmlFor="date-field">Datum*:</label>
                    <input
                        name="date"
                        id="date-field"
                        type="date"
                        ref={register({required: true })}
                    />
                    {errors.date && <p>Invoer datum les is verplicht</p>}

                    <label htmlFor="maxMembers-field">Max. aantal deelnemers*:</label>
                    <input
                        type="tel"
                        id="maxMembers-field"
                        name="amountMembers"
                        ref={register({required: true })}
                    />
                    {errors.maxAmountOfMembers && <p>Invoer maximaal aantal deelnemers is verplicht</p>}

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