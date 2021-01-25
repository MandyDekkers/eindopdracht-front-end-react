import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../context/AuthContext";
import axios from "axios";
import Header from "../components/header/Header";
import {useForm} from "react-hook-form";
import './PersonalInfo.css';
import Member from "../components/member/Member";

function PersonalinfoPage() {

    const { currentUser } = useContext(AuthContext);
    const [personalInfo, setPersonalInfo] = useState();

    useEffect(() => {

    async function getPersonalInfo() {
        try {
            const result = await axios.get(`http://localhost:8080/appuser/${currentUser.id}`);
            setPersonalInfo(result.data);
            console.log(result.data);
        } catch (error) {
            console.error(error);
        }
    }
        getPersonalInfo();

        return () => {
        }

    }, [personalInfo]);

    return (
        <>
        <Header />

            <h3>Jouw persoonlijke gegevens:</h3>

            <div>
                {personalInfo &&
                <>
                    <Member
                        key={personalInfo.id}
                        member={personalInfo}
                        // setUpdate={setUpdate}
                    />
                </>
                }

            </div>
        </>
    );
}

export default PersonalinfoPage;






