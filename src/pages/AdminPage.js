import React from 'react';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Member from "../components/member/Member";
import Searchbar from "../components/searchbar/Searchbar";
import UpdateMember from "../components/member/UpdateMember";
import NewLesson from "../components/lesson/NewLesson";
import LessonAdmin from "../components/lesson/LessonAdmin";

function AdminPage() {

    const [members, setMembers] = useState();
    const [update, setUpdate] = useState(null);
    const [lastName, setLastName] = useState();
    const [lessons, setLessons] = useState();

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

        async function deleteMember(id) {
            try {
                const result = await axios.delete(`http://localhost:8080/appuser/${id}`);
                console.log('axios result: ', result);
                getAllMembers();
            } catch (error) {
                console.error(error);
            }
        }

    async function updateMember(data) {
        try {
            const response = await axios.post(`http://localhost:8080/appuser/${data.id}`, data);
            console.log('axios result: ', response);
            setUpdate(null);
            getAllMembers();
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

    useEffect(() => {
        getAllLessons();
    }, [lessons]);

    async function getAllLessons() {
        try {
            const result = await axios.get(`http://localhost:8080/lesson`);
            setLessons(result.data);
            console.log(result.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
        <div className="allmembers">
            {!update ? (
                <div>
                    <h1>Welkom op de beheerdersportal</h1>
                    <h1>Alle leden:</h1>

                    <Searchbar setLastNameHandler={setLastName}/>
                    <div>
                        {lastName &&
                        <>
                            <Member
                                key={lastName.id}
                                member={lastName}
                                deleteMember={deleteMember}
                                setUpdate={setUpdate}
                            />
                        </>
                        }

                    </div>
                    <div className="client-container">
                        {members && members.map((member) => (
                            <Member
                                key={member.id}
                                member={member}
                                deleteMember={deleteMember}
                                setUpdate={setUpdate}
                            />
                        ))}
                    </div>
                </div>

            ) : (
            <UpdateMember
                member={members[members.findIndex(member => member.id === update)]}
                updateMember={updateMember}
                setUpdate={setUpdate}
            />
            )}
        </div>

            <div className="all-lessons">

                <h2>Nieuwe les toevoegen:</h2>

                <NewLesson />

                <h1>Alle lessen:</h1>
                <div>
                    { lessons && lessons.map((lesson) => (
                        <LessonAdmin
                        key={lesson.id}
                        lesson={lesson}
                        getAllLessons={getAllLessons}
                        />
                    ))}
                </div>
            </div>
          </>
    )
}

export default AdminPage;
