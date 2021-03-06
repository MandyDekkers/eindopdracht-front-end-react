import React, {useEffect, useState} from 'react'
import axios from "axios";
import './LessonAdmin.css'

function LessonAdmin({ lesson, getAllLessons, setUpdateLesson }) {

    const [error, setError] = useState('');
    const [error1, setError1] = useState('');
    const [loading, toggleLoading] = useState(false);
    const [lessonmembers, setLessonmembers] = useState(null);

    async function deleteLesson() {
        toggleLoading(true);
        setError('');
        const token = localStorage.getItem('token');
        try {
            await axios.delete(`http://localhost:8080/lesson/${lesson.id}`, {
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

    useEffect(() => {
    async function getMembersPerLesson() {
        toggleLoading(true);
        setError1('');
        const token = localStorage.getItem('token');
        try {
            const result = await axios.get(`http://localhost:8080/appuser/${lesson.id}/appusers`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            setLessonmembers(result.data);
        } catch (error) {
            setError1('Er is iets misgegaan bij het ophalen van de data')
        }
        toggleLoading(false);
    }
        getMembersPerLesson();
}, []);

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
                    className="button-update-delete-member"
                    onClick={() => setUpdateLesson(lesson.id)}
                    disabled={loading}
                    type="submit"
                    >
                {loading ? 'Laden...' : 'Update'}
                </button>
                <button
                    className="button-update-delete-member"
                    onClick={() => deleteLesson(lesson.id)}
                    type="submit"
                    disabled={loading}
                    >
                {loading ? 'Laden...' : 'Verwijder'}
                </button>
            </div>
            {error && <p className="err-delete-user">{error}</p>}
            <h4>Reeds ingeschreven:</h4>
            <div className="membersperlesson">
                {lessonmembers && lessonmembers.map((lessonmember) => (
                    <h5>{lessonmember.firstName} {lessonmember.lastName}</h5>
                ))}
                {error1 && <p className="err-delete-user">{error1}</p>}
            </div>
        </div>
    </>
    )
}

export default LessonAdmin;
