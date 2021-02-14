import React, {useState} from 'react'
import axios from "axios";
import { useForm } from 'react-hook-form';
import LessonMade from "./LessonMade";

function LessonToReserve( { lesson, getReservedLessons }) {

    const { handleSubmit, register, errors } = useForm();

    async function onFormSubmit(data) {

        try {
            const response = await axios.post(`http://localhost:8080/appuser/2/lesson/5`, {
                comment: data.comment
            });
            getReservedLessons();
            console.log(response.data);

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
           <form className="register-form" onSubmit={handleSubmit(onFormSubmit)}>

                <h2>Naam: {lesson.name}</h2>
                <h3>Datum: {lesson.date}</h3>
                <h3>Max. aantal deelnemers: {lesson.maxAmountMembers}</h3>
                <h3>Niveau: {lesson.niveau} </h3>

                <label htmlFor="comment-field">Opmerking:</label>
                <input
                   name="comment"
                   id="comment-field"
                   type="text"
                   ref={register}
                />

                <button
                    className="reserve-lesson"
                    type="submit"
                >
                    Reserveer!
                </button>

           </form>
        </>
    )
}

export default LessonToReserve;
