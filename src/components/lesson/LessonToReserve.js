import React, {useState} from 'react'
import axios from "axios";
import { useForm } from 'react-hook-form';
import './LessonToReserve.css'
import {useAuthState} from "../../context/AuthContext";

function LessonToReserve( { lesson, getReservedLessons }) {
    const { handleSubmit, register } = useForm();
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState(false);
    const { user } = useAuthState();

    async function onFormSubmit(data) {
        toggleLoading(true);
        setError('');
        const token = localStorage.getItem('token');
        try {
            await axios.post(`http://localhost:8080/appuser/${user.id}/lesson/${lesson.id}`, {
                comment: data.comment
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            getReservedLessons();
        } catch (error) {
            setError('Er is iets misgegaan bij het reserveren van de les')
        }
        toggleLoading(false);
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
                <div className="reservedbuttoncontainer">
                    <button
                        className="reservebutton"
                        type="submit"
                        disabled={loading}
                    >
                    {loading ? 'Laden...' : 'Reserveer'}
                    </button>
                </div>
                {error && <p className="message-error">{error}</p>}
            </form>
        </>
    )
}

export default LessonToReserve;
