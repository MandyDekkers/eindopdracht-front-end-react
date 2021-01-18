import React from 'react'

function Member({ member, deleteMember, setUpdate }) {

    return (
        <>
        <span key={member.email} className="member-details">

            <h1>Id: {member.id}</h1>
            <h2>Naam: {member.firstName} {member.lastName}</h2>
            <h3>E-mail: {member.email}</h3>
            <h3>Telefoonnummer: {member.phoneNumber}</h3>
            <h3>Geboortedatum: {member.dateOfBirth}</h3>
            <h3>Straatnaam: {member.streetName}</h3>
            <h3>Huisnummer + toevoeging: {member.houseNumber}</h3>
            <h3>Postcode: {member.postalCode}</h3>
            <h3>Woonplaats: {member.city}</h3>

            <button
                className="update"
                onClick={() => setUpdate(member.id)}
                type="submit"
            >
                update lid
              </button>

            <button
            className="delete-member"
            onClick={() => deleteMember(member.id)}
            type="submit"
            >
            Verwijder lid
            </button>

        </span>
        </>
    )
}

export default Member;