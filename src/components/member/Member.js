import React from 'react'
import axios from "axios";

function Member({ member, getAllMembers, setUpdateMember }) {

    async function deleteMember(id) {
        try {
            const result = await axios.delete(`http://localhost:8080/appuser/${id}`);
            console.log(result);
            getAllMembers();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
        <span key={member.email} className="member-details">

            {/*<h1>Id: {member.id}</h1>*/}
            <h2>Naam: {member.firstName} {member.lastName}</h2>
            <h3>E-mail: {member.email}</h3>
            <h3>Straatnaam: {member.streetName}</h3>
            <h3>Huisnummer + toevoeging: {member.houseNumber}</h3>
            <h3>Postcode: {member.postalCode}</h3>
            <h3>Woonplaats: {member.city}</h3>

            <button
                className="update-member"
                onClick={() => setUpdateMember(member.id)}
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
