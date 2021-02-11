import React, {useEffect, useState} from 'react';
import HeaderAdmin from "../../components/header/HeaderAdmin";
import axios from "axios";
import Searchbar from "../../components/searchbar/Searchbar";
import Member from "../../components/member/Member";
import UpdateMember from "../../components/member/UpdateMember";
import UpdateLesson from "../../components/lesson/UpdateLesson";
import LessonAdmin from "../../components/lesson/LessonAdmin";

function MembersPage() {
    const [members, setMembers] = useState();
    const [lastName, setLastName] = useState();
    const [updateMember, setUpdateMember] = useState(null);


    useEffect(() => {
        getAllMembers();
    }, []);

    async function getAllMembers() {
        try {
            const result = await axios.get(`http://localhost:8080/appuser`);
            setMembers(result.data);
            console.log(result.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {

        async function getMemberByLastname() {
            try {
                const result = await axios.get(`http://localhost:8080/appuser/lastname/${lastName}`);
                setLastName(result.data);
                console.log(result.data);
            } catch (error) {
                console.error(error);
            }
        }

        if(lastName) {
            getMemberByLastname();
        }

    }, [lastName]);

    return (
<>
        <HeaderAdmin />
    {!updateMember ? (
            <div className="allmembers">
                <h1>Alle leden:</h1>
                <Searchbar setLastNameHandler={setLastName}/>
                <div>
                    {lastName &&
                        <Member
                            key={lastName.id}
                            member={lastName}
                            getAllMembers={getAllMembers}
                            setUpdateMember={setUpdateMember}
                        />
                    }
                </div>
                <div className="client-container">
                    {members && members.map((member) => (
                        <Member
                            key={member.id}
                            member={member}
                            getAllMembers={getAllMembers}
                            setUpdateMember={setUpdateMember}
                        />
                    ))}
                </div>
            </div>
    ) : (
        <UpdateMember
            member={members[members.findIndex(lesson => lesson.id === updateMember)]}
            setUpdateMember={setUpdateMember}
            getAllMembers={getAllMembers()}
        />
        )}
</>
    );
}

export default MembersPage;
