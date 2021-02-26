import React, {useState} from 'react'
import {useForm} from "react-hook-form";
import axios from "axios";
import './NewLesson.css';

function NewLesson( {getAllLessons} ) {

    const { handleSubmit, register, errors } = useForm();
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState(false);

    async function onFormSubmit(data) {
        toggleLoading(true);
        setError('');
        const token = localStorage.getItem('token');
        try {
            await axios.post(`http://localhost:8080/lesson`, data, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            getAllLessons();
        } catch (e) {
            console.error(e);
            setError('Er is iets misgegaan bij het toevoegen van de les')
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
                 {errors.name && <p className="new-les-error">Invoer soort les is verplicht</p>}
                 <label htmlFor="date-field">Datum*:</label>
                 <input
                     name="date"
                     id="date-field"
                     type="text"
                     placeholder="Maandag 1 januari 2021, 20:00 uur"
                     ref={register({required: true})}
                 />
                 {errors.date && <p className="new-les-error">Invoer soort les is verplicht</p>}
                 <label htmlFor="maxMembers-field">Max. aantal deelnemers*:</label>
                 <input
                     type="tel"
                     id="maxMembers-field"
                     name="maxAmountMembers"
                     placeholder="max. 5 deelnemers"
                     ref={register({required: true })}
                  />
                  {errors.maxAmountMembers && <p className="new-les-error">Invoer maximaal aantal deelnemers is verplicht</p>}
                 <label htmlFor="location-field">Niveau*:</label>
                 <input
                     type="text"
                     name="niveau"
                     id="location-field"
                     placeholder="beginner/gemiddeld/gevorderd"
                     ref={register({ required: true })}
                 />
                 {errors.niveau && <p className="new-les-error">Locatie les is verplicht</p>}
                 <div className="save-button-new-lesson">
                    <button
                        className="savenewlesson"
                        type="submit"
                        disabled={loading}
                    >
                    {loading ? 'Laden...' : 'Opslaan'}
                    </button>
                 </div>
                 {error && <p className="new-les-error">{error}</p>}
            </form>
        </>

    )
}

export default NewLesson;
