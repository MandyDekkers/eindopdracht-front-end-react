import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";

function UpdateLesson ({ getAllLessons, lesson, setUpdate}) {

    const { handleSubmit, register, errors } = useForm();


    async function updateLesson(data) {
        try {
            const response = await axios.post(`http://localhost:8080/appuser/${data.id}`, data);
            console.log('axios result: ', response);
            setUpdate(null);
            getAllLessons();
        } catch (error) {
            console.error(error);
        }
    }

    function onFormSubmit(data) {
        updateLesson(data);
        console.log(data);
    }

    return (
        <>
            <button onClick={() => setUpdate(0)} type="button" className="close">X</button>

            <div className="lesson-box">
                <form className="lesson-form" onSubmit={handleSubmit(onFormSubmit)}>

                    <label htmlFor="member-id"> Id:</label>
                    <input type="text" readOnly defaultValue={lesson.id}/>

                    <label htmlFor="kindOfLesson-field">Soort les*:</label>
                    <input
                        defaultValue={lesson.kindOfLesson}
                        name="kindOfLesson"
                        id="kindOfLesson-field"
                        type="text"
                        ref={register({required: true})}
                    />
                    {errors.kindOfLesson && <p>Invoer soort les is verplicht</p>}

                    <label htmlFor="location-field">Locatie*:</label>
                    <input
                        defaultValue={lesson.location}
                        type="text"
                        name="location"
                        id="location-field"
                        ref={register({ required: true })}
                    />
                    {errors.location && <p>Locatie les is verplicht</p>}

                    <label htmlFor="date-field">Datum*:</label>
                    <input
                        defaultValue={lesson.date}
                        name="email"
                        id="date-field"
                        type="date"
                        ref={register({required: true })}
                    />
                    {errors.date && <p>Invoer datum les is verplicht</p>}

                    <label htmlFor="maxMembers-field">Max. aantal deelnemers*:</label>
                    <input
                        defaultValue={lesson.maxAmountOfMembers}
                        type="tel"
                        id="maxMembers-field"
                        name="maxAmountOfMembers"
                        ref={register({required: true })}
                    />
                    {errors.maxAmountOfMembers && <p>Invoer maximaal aantal deelnemers is verplicht</p>}

                    <button type="submit">
                        Opslaan
                    </button>

                    <button type="submit">
                        Opslaan
                    </button>

                </form>

            </div>
        </>
    );
}

export default UpdateLesson;