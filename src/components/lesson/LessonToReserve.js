import React, {useState} from 'react'
import axios from "axios";
import { useForm } from 'react-hook-form';
import LessonMade from "./LessonMade";
import './LessonToReserve.css'

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
           <form className="toreserve" onSubmit={handleSubmit(onFormSubmit)}>
                <h4>{lesson.name}</h4>
                <h4>{lesson.date}</h4>
                <h4>Max. aantal deelnemers: {lesson.maxAmountMembers}</h4>
                <h4>Niveau: {lesson.niveau} </h4>

                <label htmlFor="comment-field">Opmerking:</label>
                <input
                   name="comment"
                   id="comment-field"
                   type="text"
                   ref={register}
                />

                <button
                    className="reservebutton"
                    type="submit"
                >
                    Reserveer!
                </button>

           </form>
        </>
    )
}

export default LessonToReserve;
