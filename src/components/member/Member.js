import React from 'react'

function Member({ member, deleteMember }) {

    return (
        <>
        <span className="member-details">
            <>
            <h1>{member.id}</h1>
            <h2>{member.firstName} {member.lastName}</h2>
            <h3>{member.email}</h3>
            <h3>{member.dateOfBirth}</h3>
            </>
        </span>

                <button
                    className="delete-member"
                    onClick={() => deleteMember(member.id)}
                    type="submit"
                >
                    Verwijder klant
                </button>
        </>
    )
}

export default Member;