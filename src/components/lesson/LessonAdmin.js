import React, {useState} from 'react'
import axios from "axios";

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

            <h4>Lesnummer: {lesson.id}</h4>
            <h3>{lesson.name}</h3>
            <h4>{lesson.date}</h4>
            <h4>Max. aantal deelnemers: {lesson.maxAmountMembers}</h4>
            <h4>Niveau: {lesson.niveau} </h4>

            <div className="buttons">
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
            </div>
        </>
    )
}

export default LessonAdmin;
