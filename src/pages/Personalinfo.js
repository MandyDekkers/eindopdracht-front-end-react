import React, {useContext, useEffect, useState} from 'react';
// import {AuthContext, useAuthState} from "../context/AuthContext";
import axios from "axios";
import Header from "../components/header/Header";
import {useForm} from "react-hook-form";
import './PersonalInfo.css';
import Member from "../components/member/Member";
import UpdateMember from "../components/member/UpdateMember";


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
                <div>

            <h3>Jouw persoonlijke gegevens:</h3>

            <div>
                {personalInfo &&
                <>
                    <h2>Naam: {personalInfo.firstName} {personalInfo.lastName}</h2>
                    <h3>E-mail: {personalInfo.email}</h3>
                    <h3>Straatnaam: {personalInfo.streetName}</h3>
                    <h3>Huisnummer + toevoeging: {personalInfo.houseNumber}</h3>
                    <h3>Postcode: {personalInfo.postalCode}</h3>
                    <h3>Woonplaats: {personalInfo.city}</h3>
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






