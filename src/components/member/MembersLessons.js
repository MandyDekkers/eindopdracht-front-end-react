import React, {useState} from 'react'
import axios from "axios";
import LessonAdmin from "../lesson/LessonAdmin";

function MembersLesson( {setUpdateMembers, lesson}) {

    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState(false);
    const [lessonmembers, setLessonmembers] = useState(null);

    async function getMembersPerLesson() {
        toggleLoading(true);
        setError('');
        const token = localStorage.getItem('token');
        try {
            const result = await axios.get(`http://localhost:8080/lesson/1/appusers`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            setLessonmembers(result.data);
            console.log(result.data);
        } catch (error) {
            setError('Er is iets misgegaan bij het ophalen van de data')
        }
        toggleLoading(false);
    }

    return (
        <>
            <div className="membersperlesson">
                {lessonmembers && lessonmembers.map((lessonmember) => (
                        <h3>{lessonmember.firstName} {lessonmember.lastName}</h3>
                    ))}
                {error && <p className="message-error">{error}</p>}

            </div>
        </>
    )
}

export default MembersLesson;

