import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from "../context/UserContext";
import axios from "axios";
import Header from "../components/header/Header";
import {useForm} from "react-hook-form";
import './PersonalInfo.css';

function PersonalinfoPage() {

    const { currentUser } = useContext(UserContext);
    const { handleSubmit, register, errors, watch } = useForm();

    const [error, setError] = useState(false);
    const [sendSucces, setSendSucces] = useState(false);
    const [appUserInfo, setAppUserInfo] = useState();

    async function getAppUser() {
        try {
            const result = await axios.get("ttp://localhost:/appuser/{id}");
            console.log('axios result: ', result);
            setAppUserInfo(result.data);
        } catch (error) {
            console.error(error);
        }
    }

    async function updateAppUserInfo(data) {
        setError(false);
        try {
            const response = await axios.get(`http://localhost:8080/appuser`, data);
            console.log(data);
            setSendSucces(true);
            getAppUser();

        } catch (e) {

            console.error(e);
            setError(true);
        }
    }

    return (
        <>
        <Header />

            <h3>Jouw persoonlijke gegevens:</h3>

            {
                appUserInfo &&
                    <ul>
                        <li>Voornaam: {appUserInfo.fistName}</li>
                        <li>Achternaam: {appUserInfo.lastName}</li>
                        <li>E-mailadres: {appUserInfo.email}</li>
                        <li>Telefoonnummer: {appUserInfo.phoneNumber}</li>
                        <li>Geboortedatum: {appUserInfo.dateOfBirth}</li>
                        <li>Huisnummer + toevoeging: {appUserInfo.houseNumber}</li>
                        <li>Postcode: {appUserInfo.postalCode}</li>
                        <li>Woonplaats: {appUserInfo.city}</li>

                    </ul>
            }
        </>
    );
}

export default PersonalinfoPage;






