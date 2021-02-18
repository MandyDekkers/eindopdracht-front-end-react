import React, {useContext, useEffect, useState} from 'react';
// import {AuthContext, useAuthState} from "../context/AuthContext";
import axios from "axios";
import Header from "../components/header/Header";
import {useForm} from "react-hook-form";
import './PersonalInfo.css';
import Member from "../components/member/Member";
import UpdateMember from "../components/member/UpdateMember";
import USER from "../assets/user.png"
import PageHeader from "../components/header/PageHeader";
import {useAuthState} from "../context/AuthContext";



function PersonalinfoPage() {

    const {handleSubmit, register, errors} = useForm();
    const [personalInfo, setPersonalInfo] = useState();
    const [updateInfo, setUpdateInfo] = useState(null);
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState(false);
    const { user } = useAuthState();

    useEffect(() => {

    async function getPersonalInfo() {
        toggleLoading(true);
        setError('');
        const token = localStorage.getItem('token');
        try {
            const result = await axios.get(`http://localhost:8080/appuser/${user.id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            setPersonalInfo(result.data);
            console.log(result.data);
        } catch (error) {
            setError('Er is iets misgegaan bij het ophalen van de data')
        }
        toggleLoading(false);
    }
        getPersonalInfo();

    }, [updateInfo]);

    async function formSubmit(data) {
        toggleLoading(true);
        setError('');

        try {
            const response = await axios.post('http://localhost:8080/api/auth/signin', {
                username: data.username,
                password: data.password
            });
        } catch (e) {
        }
        toggleLoading(false);
    }

    return (
        <>
        <Header />
            {!updateInfo ? (
        <div className="personalinfo">
            <PageHeader icon={USER} title="Jouw persoonlijke gegevens" />

            <form className="sendphoto" onSubmit={handleSubmit(formSubmit)}>
                <input
                    type="file"
                    name="photo"
                    id="photo"
                />
                <div className="image-preview">
                    <img src="" alt="Image preview" className="image-preview__image"/>
                    <span className="image-preview__defaul-tesxt">Image Preview</span>
                </div>
                <button
                type="submit"
                disabled={loading}
                >
                    {loading ? 'Laden...' : 'Verstuur'}
                </button>
            </form>

            <div>
                {personalInfo &&
                <>
                    <h4>Lidnummer: {personalInfo.id}</h4>
                    <h2>{personalInfo.firstName} {personalInfo.lastName}</h2>
                    <h3>{personalInfo.email}</h3>
                    <h3>{personalInfo.streetName} {personalInfo.houseNumber}</h3>
                    <h3>{personalInfo.postalCode} {personalInfo.city}</h3>
                </>
                }
                {error && <p className="message-error">{error}</p>}
                <button
                    className="update"
                    onClick={() => setUpdateInfo(personalInfo)}
                    type="submit"
                    disabled={loading}
                >
                    {loading ? 'Laden...' : 'Update'}
                </button>
                {error && <p className="message-error">{error}</p>}
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






