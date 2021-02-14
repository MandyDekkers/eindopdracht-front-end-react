import React, {useEffect, useState} from 'react';
import Header from "../components/header/Header";
import axios from "axios";
import LessonAdmin from "../components/lesson/LessonAdmin";
import LessonToReserve from "../components/lesson/LessonToReserve";
import LessonMade from "../components/lesson/LessonMade";
import PageHeader from "../components/header/PageHeader";
import sport from "../assets/sport.png";
import './ReservationPage.css'


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
        <div className="cont">
            <Header/>
            <PageHeader icon={sport} title="Reserveer een les!" />
            <h3 className="lessonoverview">Gereserveerde lessen:</h3>

        <div className="les">
            {lessonReserved && lessonReserved.map((lesson) => (
                <>
                    <div className="ownlessons">
                    <h3>{lesson.name}</h3>
                    <h4>{lesson.date}</h4>
                    <h4>Max. aantal deelnemers: {lesson.maxAmountMembers}</h4>
                    <h4>Niveau: {lesson.niveau} </h4>
                    <h4>Opmerking: {lesson.comment} </h4>
                    <button
                        className="reservebutton"
                        type="submit"
                    >
                        Verwijder!
                    </button>
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
</div>
    </>
    )
}

export default ReservationPage;

