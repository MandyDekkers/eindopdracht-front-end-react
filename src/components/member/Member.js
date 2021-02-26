import React, {useState} from 'react'
import axios from "axios";
import './Member.css';

function Member({ member, getAllMembers, setUpdateMember }) {
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState(false);

    async function deleteMember(id) {
        toggleLoading(true);
        setError('');
        const token = localStorage.getItem('token');
        try {
            const result = await axios.delete(`http://localhost:8080/appuser/${member.id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            console.log(result);
            getAllMembers();
        } catch (error) {
            setError('Er is iets misgegaan bij het verwijderen van het lid')
        }
        toggleLoading(false);
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
                        className="button-update-delete-member"
                        onClick={() => setUpdateMember(member.id)}
                        type="submit"
                    >
                    {loading ? 'Laden...' : 'Update'}
                    </button>
                    <button
                        className="button-update-delete-member"
                        onClick={() => deleteMember(member.id)}
                        type="submit"
                        disabled={loading}
                    >
                    {loading ? 'Laden...' : 'Verwijder'}
                    </button>
                </div>
                {error && <p className="message-errordelete">{error}</p>}

            </div>
        </>
    )
}

export default Member;
