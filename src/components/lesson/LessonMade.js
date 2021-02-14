import React, {useEffect, useState} from 'react'
import axios from "axios";
import { useForm } from 'react-hook-form';
import LessonAdmin from "./LessonAdmin";

function LessonMade(){
    const [lessonReserved, setLessonReserved] = useState();

    useEffect(() => {
        getReservedLessons();
    }, []);

    async function getReservedLessons(){
        try {
            const result = await axios.get('http://localhost:8080/appuser/1/lessons');
            setLessonReserved(result.data);
            console.log(result.data);
        } catch (error) {
            console.error(error);
        }
    }

        return (

            <div className="reservedlessons">
                {lessonReserved && lessonReserved.map((lesson) => (
                    <>
                    <h2>Naam: {lesson.name}</h2>
                    <h3>Datum: {lesson.date}</h3>
                    <h3>Max. aantal deelnemers: {lesson.maxAmountMembers}</h3>
                    <h3>Niveau: {lesson.niveau} </h3>
                    <h3>Opmerking: {lesson.comment} </h3>
                        <button
                            className="delete-reservation"
                            type="submit"
                        >
                            Verwijder!
                        </button>
                    </>
                ))}


            </div>




    )
}

export default LessonMade;
