import React, {useContext, useEffect, useState} from 'react';
// import {AuthContext, useAuthState} from "../context/AuthContext";
import axios from "axios";
import Header from "../components/header/Header";
import {useForm} from "react-hook-form";
import './PersonalInfo.css';
import Member from "../components/member/Member";


function PersonalinfoPage() {

    const [personalInfo, setPersonalInfo] = useState();
    // const { user } = useAuthState();

    useEffect(() => {

    async function getPersonalInfo() {
        try {
            const result = await axios.get(`http://localhost:8080/appuser/`);
            setPersonalInfo(result.data);
            console.log(result.data);
        } catch (error) {
            console.error(error);
        }
    }
        getPersonalInfo();

        return () => {
        }

    }, []);

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






