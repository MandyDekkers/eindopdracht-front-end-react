import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import './UpdateLesson.css'

function UpdateLesson ({ lesson, setUpdateLesson, getAllLessons}) {
    const { handleSubmit, register, errors } = useForm();
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState(false);

    async function onFormSubmit(data) {
        toggleLoading(true);
        setError('');
        const token = localStorage.getItem('token');
        try {
            await axios.put(`http://localhost:8080/lesson/${lesson.id}`, data, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            setUpdateLesson(null);
            getAllLessons();
        } catch (error) {
            setError('Er is iets misgegaan bij het wijzigen van de les')
        }
        toggleLoading(false);
    }

    return (
        <>
            <div className="lesson-box">
                <form className="lesson-form" onSubmit={handleSubmit(onFormSubmit)}>
                    <button onClick={() => setUpdateLesson(0)} type="button" className="closelesson">X</button>
                    <label htmlFor="lesson-id"> Lesnummer:</label>
                    <input
                        type="text" readOnly defaultValue={lesson.id}
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
                    {errors.name && <p className="update-error-les">Invoer soort les is verplicht</p>}
                    <label htmlFor="date-field">Datum*:</label>
                    <input
                        defaultValue={lesson.date}
                        name="date"
                        id="date-field"
                        type="text"
                        ref={register({required: true})}
                    />
                    {errors.name && <p className="update-error-les">Invoer datum is verplicht</p>}
                    <label htmlFor="members-field">Max. aantal deelnemers*:</label>
                    <input
                        defaultValue={lesson.maxAmountMembers}
                        name="maxAmountMembers"
                        id="members-field"
                        type="text"
                        ref={register({required: true })}
                    />
                    {errors.maxAmountMembers && <p className="update-error-les">Invoer aantal deelnemers les is verplicht</p>}
                    <label htmlFor="maxMembers-field">Niveau*:</label>
                    <input
                        defaultValue={lesson.niveau}
                        type="text"
                        id="niveau-field"
                        name="niveau"
                        ref={register({required: true })}
                    />
                    {errors.niveau && <p className="update-error-les">Invoer niveau is verplicht</p>}
                    <div className="buttonsave">
                        <button
                            className="saveupdatedlesson"
                            type="submit"
                            disabled={loading}
                            >
                            {loading ? 'Laden...' : 'Opslaan'}
                    </button>
                    </div>
                    {error && <p className="adding-les">Er is iets misgegaan bij het wijzigen van deze les</p>}
                </form>

            </div>
        </>
    );
}

export default UpdateLesson;
