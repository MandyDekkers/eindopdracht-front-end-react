import React, {useEffect, useState} from 'react';
import Header from "../components/header/Header";
import axios from "axios";
import LessonToReserve from "../components/lesson/LessonToReserve";
import PageHeader from "../components/header/PageHeader";
import sport from "../assets/sport.png";
import './ReservationPage.css'
import {useAuthState} from "../context/AuthContext";


function ReservationPage() {

    const [lessons, setLessons] = useState();
    const [lessonReserved, setLessonReserved] = useState();
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState(false);
    const { user } = useAuthState();

    useEffect(() => {
        getAllLessons();
    }, []);

    async function getAllLessons() {
        toggleLoading(true);
        setError('');
        const token = localStorage.getItem('token');
        try {
            const result = await axios.get(`http://localhost:8080/lesson`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            setLessons(result.data);
        } catch (error) {
            setError('Er is iets misgegaan bij het ophalen van de data')
        }
        toggleLoading(false);
    }

    useEffect(() => {
        getReservedLessons();
    }, []);

    async function getReservedLessons(){
        toggleLoading(true);
        setError('');
        const token = localStorage.getItem('token');
        try {
            const result = await axios.get(`http://localhost:8080/appuser/${user.id}/lessons`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            setLessonReserved(result.data);
            console.log(result.data);
        } catch (error) {
            setError('Er is iets misgegaan bij het ophalen van de data')
        }
        toggleLoading(false);
    }

    return (
    <>
        <div className="cont">
            <Header/>
            <PageHeader icon={sport} title="Reserveer een les!" />
            <h3 className="lessonoverview">Gereserveerde lessen:</h3>

        <div className="lessonmade">
            {lessonReserved && lessonReserved.map((lesson) => (
                <>
                    <div className="ownlessons">
                    <h3>{lesson.name}</h3>
                    <h4>{lesson.date}</h4>
                    <h4>Max. aantal deelnemers: {lesson.maxAmountMembers}</h4>
                    <h4>Niveau: {lesson.niveau} </h4>
                    <h4>Opmerking: {lesson.comment} </h4>
                    <h4 className="plannedlesson">Leuk dat je aan deze les meedoet!</h4>
                    </div>
                </>
            ))}

        </div>
    <h3 className="lessonoverview">Lessen:</h3>
        <div className="lessons">
            {lessons && lessons.map((lesson) => (
            <LessonToReserve
                key={lesson.id}
                lesson={lesson}
                getReservedLessons={getReservedLessons}
            />
            ))}
        </div>
            {error && <p className="message-error">{error}</p>}
</div>
    </>
    )
}

export default ReservationPage;

