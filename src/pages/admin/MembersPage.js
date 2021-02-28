import React, {useEffect, useState} from 'react';
import HeaderAdmin from "../../components/header/HeaderAdmin";
import axios from "axios";
import Searchbar from "../../components/searchbar/Searchbar";
import Member from "../../components/member/Member";
import UpdateMember from "../../components/member/UpdateMember";
import './MembersPage.css'
import teamwork from '../../assets/teamwork.svg'
import PageHeader from "../../components/header/PageHeader";

function MembersPage() {
    const [members, setMembers] = useState();
    const [lastName, setLastName] = useState();
    const [foundLastName, setFoundLastName] = useState();
    const [updateMember, setUpdateMember] = useState(null);
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        getAllMembers();
    }, []);

    async function getAllMembers() {
        toggleLoading(true);
        setError('');
        const token = localStorage.getItem('token');
        try {
            const result = await axios.get(`http://localhost:8080/appuser`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            setMembers(result.data);
        } catch (error) {
            setError('Er is iets misgegaan bij het ophalen van de gegevens')
        }
        toggleLoading(false);
    }

    useEffect(() => {
        async function getMemberByLastname() {
            toggleLoading(true);
            setError('');
            const token = localStorage.getItem('token');
            try {
                const result = await axios.get(`http://localhost:8080/appuser/lastname/${lastName}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
                setFoundLastName(result.data);
            } catch (error) {
                setError('Er is iets misgegaan bij het ophalen van de gegevens')
            }
            toggleLoading(false);
        }

        if(lastName) {
            getMemberByLastname();
        }

    }, [lastName]);

    return (
        <>
            <HeaderAdmin />
            {!updateMember ? (
            <div className="all-members">
                <PageHeader icon={teamwork} title="Ledenoverzicht" />
                <Searchbar setLastNameHandler={setLastName}/>
                <div className="lastname">
                    {foundLastName && foundLastName.map((found) => (
                        <Member
                            key={found.id}
                            member={found}
                            getAllMembers={getAllMembers}
                            setUpdateMember={setUpdateMember}
                            setFoundLastName={setFoundLastName}
                        />
                    ))}
                </div>
                <div className="members">
                    {members && members.map((member) => (
                        <Member
                            key={member.id}
                            member={member}
                            getAllMembers={getAllMembers}
                            setUpdateMember={setUpdateMember}
                        />
                    ))}
                    {error && <p className="message-error">{error}</p>}
                    {loading && <p>Aan het laden...</p>}
                </div>
            </div>
        ) : (
            <div>
                <UpdateMember
                    member={members[members.findIndex(member => member.id === updateMember)]}
                    setUpdateMember={setUpdateMember}
                    getAllMembers={getAllMembers}
                />
            </div>
            )}
        </>
    );
}

export default MembersPage;
