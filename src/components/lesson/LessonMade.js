// import React, {useEffect, useState} from 'react'
// import axios from "axios";
// import { useForm } from 'react-hook-form';
// import LessonAdmin from "./LessonAdmin";
//
// function LessonMade(){
//     const [lessonReserved, setLessonReserved] = useState();
//     const [error, setError] = useState('');
//
//     useEffect(() => {
//         getReservedLessons();
//     }, []);
//
//     async function getReservedLessons(){
//         const token = localStorage.getItem('token');
//         try {
//             const result = await axios.get('http://localhost:8080/appuser/1/lessons', {
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${token}`,
//                 }
//             });
//             setLessonReserved(result.data);
//             console.log(result.data);
//         } catch (error) {
//             setError('Er is iets misgegaan bij het ophalen van de data')
//         }
//     }
//
//         return (
//
//             <div className="reservedlessons">
//                 {lessonReserved && lessonReserved.map((lesson) => (
//                     <>
//                     <h2>Naam: {lesson.name}</h2>
//                     <h3>Datum: {lesson.date}</h3>
//                     <h3>Max. aantal deelnemers: {lesson.maxAmountMembers}</h3>
//                     <h3>Niveau: {lesson.niveau} </h3>
//                     <h3>Opmerking: {lesson.comment} </h3>
//                         <button
//                             className="delete-reservation"
//                             type="submit"
//                         >
//                             Verwijder!
//                         </button>
//                     </>
//                 ))}
//                 {error && <p className="message-error">{error}</p>}
//             </div>
//
//
//
//
//     )
// }
//
// export default LessonMade;
