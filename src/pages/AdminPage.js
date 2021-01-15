import React from 'react';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Member from "../components/member/Member";
import Searchbar from "../components/searchbar/Searchbar";

function AdminPage() {

    const [members, setMembers] = useState();
    const [lastName, setLastName] = useState();

    useEffect(() => {
    getAllMembers();
    }, []);

        async function getAllMembers() {
            try {
                const result = await axios.get(``);
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

    async function deleteMember(id) {
         try {
             const result = await axios.delete(`http://localhost:8080/appuser/${id}`);
             console.log('axios result: ', result);
             getAllMembers();
         } catch (error) {
             console.error(error);
            }
        }

    // async function updateMember(member) {
    //      try {
    //         const result = await axios.put(`http://localhost:8080/clients/${member.appUserid}`, member);
    //         console.log('axios result: ', result);
    //         setUpdateMember(null);
    //         getAllMembers();
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    return (
        <div className="members" >
            <h1>Leden:</h1>
                <Searchbar setLastNameHandler={setLastName}/>
                <div>
                    {lastName &&
                    <>
                        <h1>{lastName.id}</h1>
                        <h2>{lastName.firstName} {lastName.lastName}</h2>
                        <h3>{lastName.email}</h3>
                        <h3>{lastName.dateOfBirth}</h3>

                        <button
                            className="delete-member"
                            onClick={() => deleteMember(lastName.id)}
                            type="submit"
                        >
                            Verwijder klant
                        </button>

                    </>
                    }
                </div>

                <div>
                    {members && members.map((member) => {
                        return <div key={member.email}> <Member member={member} deleteMember={deleteMember} /> </div>
                    })}
                </div>

        </div>
    );
}

export default AdminPage;
