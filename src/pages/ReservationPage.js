import React, {useEffect, useState} from 'react';
import Header from "../components/header/Header";
import axios from "axios";
import LessonAdmin from "../components/lesson/LessonAdmin";
import LessonToReserve from "../components/lesson/LessonToReserve";
import LessonMade from "../components/lesson/LessonMade";


function ReservationPage() {

    const [lessons, setLessons] = useState();
    const [lessonReserved, setLessonReserved] = useState();

    useEffect(() => {
        getAllLessons();
    }, []);

    async function getAllLessons() {
        try {
            const result = await axios.get(`http://localhost:8080/lesson`);
            setLessons(result.data);
            console.log(result.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getReservedLessons();
    }, []);

    async function getReservedLessons(){
        try {
            const result = await axios.get('http://localhost:8080/appuser/2/lessons');
            setLessonReserved(result.data);
            console.log(result.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
    <>
        <Header/>
        <h2>Mijn gereserveerde lessen:</h2>
        <div className="reservedlessons">
            {lessonReserved && lessonReserved.map((lesson) => (
                <>
                    <h2>Naam: {lesson.name}</h2>
                    <h3>Datum: {lesson.date}</h3>
                    <h3>Max. aantal deelnemers: {lesson.maxAmountMembers}</h3>
                    <h3>Niveau: {lesson.niveau} </h3>
                    <h3>Opmerking: {lesson.comment} </h3>
                    <button
                        className="delete-lesson"
                        type="submit"
                    >
                        Verwijder!
                    </button>
                </>
            ))}
        </div>


        <div className="lessons">
            <h2>Reserveer een les:</h2>
            {lessons && lessons.map((lesson) => (
            <LessonToReserve
                key={lesson.id}
                lesson={lesson}
                getReservedLessons={getReservedLessons}
            />
            ))}
        </div>
    </>
    )
}

export default ReservationPage;

