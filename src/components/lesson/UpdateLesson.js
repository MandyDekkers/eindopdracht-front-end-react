import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import './UpdateLesson.css'

function UpdateLesson ({ lesson, setUpdateLesson, getAllLessons}) {

    const { handleSubmit, register, errors } = useForm();

    async function onFormSubmit(data) {
        try {
            const result = await axios.put(`http://localhost:8080/lesson/${lesson.id}`, data);
            console.log(result);
            setUpdateLesson(null);
            getAllLessons();
        } catch (error) {
            console.error(error);
        }
        console.log(data);
    }

    return (
        <>
            <div className="lesson-box">
                <form className="lesson-form" onSubmit={handleSubmit(onFormSubmit)}>
                    <button onClick={() => setUpdateLesson(0)} type="button" className="closelesson">X</button>

                    <label htmlFor="lesson-id"> Id:</label>
                    <input type="text" readOnly defaultValue={lesson.id}
                           name="id"
                           />

                    <label htmlFor="kindOfLesson-field">Soort les*:</label>
                    <input
                        defaultValue={lesson.name}
                        name="name"
                        id="kindOfLesson-field"
                        type="text"
                        ref={register({required: true})}
                    />
                    {errors.name && <p className="error">Invoer soort les is verplicht</p>}

                    <label htmlFor="date-field">Datum:*:</label>
                    <input
                        defaultValue={lesson.date}
                        type="text"
                        name="date"
                        id="date-field"
                        ref={register({ required: true })}
                    />
                    {errors.date && <p className="error">Locatie les is verplicht</p>}

                    <label htmlFor="members-field">Max. aantal deelnemers*:</label>
                    <input
                        defaultValue={lesson.maxAmountMembers}
                        name="maxAmountMembers"
                        id="members-field"
                        type="text"
                        ref={register({required: true })}
                    />
                    {errors.maxAmountMembers && <p className="error">Invoer datum les is verplicht</p>}

                    <label htmlFor="maxMembers-field">Niveau*:</label>
                    <input
                        defaultValue={lesson.niveau}
                        type="text"
                        id="niveau-field"
                        name="niveau"
                        ref={register({required: true })}
                    />
                    {errors.niveau && <p className="error">Invoer maximaal aantal deelnemers is verplicht</p>}

                    <button className="saveupdatedlesson" type="submit">
                        Opslaan
                    </button>
                </form>
            </div>
        </>
    );
}

export default UpdateLesson;
