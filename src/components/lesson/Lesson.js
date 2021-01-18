import React from 'react'

function Lesson({ lesson }) {

    return (
        <>
        <span key={lesson.id} className="lesson-details">

            <h1>Id: {lesson.id}</h1>
            <h2>Naam: {lesson.lessonName}</h2>
            <h3>Locatie: {lesson.location}</h3>
            <h3>Datum: {lesson.date}</h3>
            <h3>Max. aantal deelnemers: {lesson.amountMembers}</h3>
            <h3>Aantal inschrijvingen: </h3>

            <button
                className="add-lesson"
                // onClick={() => deleteMember(member.id)}
                type="submit"
            >
            Deelnemen
            </button>
        </span>
        </>
    )
}

export default Lesson;