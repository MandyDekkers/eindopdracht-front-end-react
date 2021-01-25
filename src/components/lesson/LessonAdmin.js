import React, {useState} from 'react'
import axios from "axios";
import UpdateLesson from "./UpdateLesson";

function LessonAdmin({ lesson, getAllLessons }) {

    const [update, setUpdate] = useState();

    async function deleteLesson(id) {
        try {
            const result = await axios.delete(`http://localhost:8080/lesson/${id}`);
            console.log('axios result: ', result);
            getAllLessons();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
        {!update ? (

        <div key={lesson.id} className="lesson-details">

            <h1>Id: {lesson.id}</h1>
            <h2>Naam: {lesson.lessonName}</h2>
            <h3>Locatie: {lesson.location}</h3>
            <h3>Datum: {lesson.date}</h3>
            <h3>Max. aantal deelnemers: {lesson.amountMembers}</h3>
            <h3>Aantal inschrijvingen: </h3>

            <button
                className="update-lesson"
                onClick={() => setUpdate(lesson.id)}
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

               ) : (

            <div>
            <UpdateLesson
                getAllLessons={getAllLessons}
                lesson={lesson}
                setUpdate={setUpdate}
            />
            </div>
            )}

        </>
    )
}

export default LessonAdmin;