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
        <div className="member-details">
            {member &&
            <>
                <h4>Lidnummer: {member.id}</h4>
                <h3>{member.firstName} {member.lastName}</h3>
                <h4>{member.streetName} {member.houseNumber}</h4>
                <h4>{member.postalCode} {member.city}</h4>
                <h4>{member.email}</h4>
            </>
            }
            <div className="buttons">
                <button
                className="update-member"
                onClick={() => setUpdateMember(member.id)}
                type="submit"
                >
                Update
                </button>

                <button
                className="delete-member"
                onClick={() => deleteMember(member.id)}
                type="submit"
                >
                Verwijder
                </button>
            </div>

        </div>
        </>
    )
}

export default Member;
