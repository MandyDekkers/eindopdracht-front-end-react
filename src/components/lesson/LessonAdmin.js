import React, {useState} from 'react'
import axios from "axios";

function LessonAdmin({ lesson, getAllLessons, setUpdateLesson }) {

    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState(false);

    async function deleteLesson() {
        toggleLoading(true);
        setError('');
        const token = localStorage.getItem('token');
        try {
            const result = await axios.delete(`http://localhost:8080/lesson/${lesson.id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            getAllLessons();
        } catch (error) {
            setError('Er is iets misgegaan bij het verwijderen van de data')
        }
        toggleLoading(false);
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
                disabled={loading}
                type="submit"
            >
                {loading ? 'Laden...' : 'Update'}
              </button>

            <button
                className="delete-lesson"
                onClick={() => deleteLesson(lesson.id)}
                type="submit"
                disabled={loading}
            >
                {loading ? 'Laden...' : 'Verwijder'}
            </button>
                {error && <p className="message-error">{error}</p>}
            </div>
        </div>
        </>
    )
}

export default LessonAdmin;
