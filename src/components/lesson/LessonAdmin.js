import React, {useState} from 'react'
import axios from "axios";
import UpdateLesson from "./UpdateLesson";

function LessonAdmin({ lesson, getAllLessons, setUpdateLesson }) {

    async function deleteLesson(id) {
        try {
            const result = await axios.delete(`http://localhost:8080/lesson/${id}`);
            console.log(result);
            getAllLessons();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
        <div key={lesson.id} className="lesson-details">

            <h1>Id: {lesson.id}</h1>
            <h2>Naam: {lesson.name}</h2>
            <h3>Datum: {lesson.date}</h3>
            <h3>Max. aantal deelnemers: {lesson.maxAmountMembers}</h3>
            <h3>Niveau: {lesson.niveau} </h3>

            <button
                className="update-lesson"
                onClick={() => setUpdateLesson(lesson.id)}
                type="submit"
            >
                Update les
              </button>

            <button
                className="delete-lesson"
                onClick={() => deleteLesson(lesson.id)}
                type="submit"
            >
            Verwijder les
            </button>
            </div>
        </>
    )
}

export default LessonAdmin;
