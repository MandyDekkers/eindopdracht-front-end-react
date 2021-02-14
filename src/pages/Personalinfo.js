import React, {useContext, useEffect, useState} from 'react';
// import {AuthContext, useAuthState} from "../context/AuthContext";
import axios from "axios";
import Header from "../components/header/Header";
import {useForm} from "react-hook-form";
import './PersonalInfo.css';
import Member from "../components/member/Member";
import UpdateMember from "../components/member/UpdateMember";
import user from "../assets/user.png";
import PageHeader from "../components/header/PageHeader";


function PersonalinfoPage() {

    const [personalInfo, setPersonalInfo] = useState();
    const [updateInfo, setUpdateInfo] = useState(null);
    // const { user } = useAuthState();

    useEffect(() => {

    async function getPersonalInfo() {
        try {
            const result = await axios.get(`http://localhost:8080/appuser/1`);
            setPersonalInfo(result.data);
            console.log(result.data);
        } catch (error) {
            console.error(error);
        }
    }
        getPersonalInfo();

    }, [updateInfo]);

    return (
        <>
        <Header />
            {!updateInfo ? (
        <div className="personalinfo">
            <PageHeader icon={user} title="Jouw persoonlijke gegevens" />
            <div>
                {personalInfo &&
                <>
                    <h2>{personalInfo.firstName} {personalInfo.lastName}</h2>
                    <h3>{personalInfo.email}</h3>
                    <h3>{personalInfo.streetName} {personalInfo.houseNumber}</h3>
                    <h3>{personalInfo.postalCode} {personalInfo.city}</h3>
                </>
                }
                <button
                    className="update"
                    onClick={() => setUpdateInfo(personalInfo)}
                    type="submit">
                    Update gegevens
                </button>
            </div>
        </div>

                ) : (
                    <div>
                <UpdateMember
                member={personalInfo}
                setUpdateMember={setUpdateInfo}
                />
                    </div>
                )
            }
</>
    );
}

export default PersonalinfoPage;






