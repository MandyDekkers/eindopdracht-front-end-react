import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import Header from "../components/header/Header";
import './PersonalInfo.css';
import UpdateMember from "../components/member/UpdateMember";
import USER from "../assets/user.png"
import PageHeader from "../components/header/PageHeader";
import {useAuthState} from "../context/AuthContext";

function PersonalinfoPage() {

    const [personalInfo, setPersonalInfo] = useState();
    const [updateInfo, setUpdateInfo] = useState(null);
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState(false);
    const { user } = useAuthState();

    const [image, setImage] = useState("");
    const [image1, setImage1] = useState("");

    async function uploadImage(e) {

        const file = e.target.files[0];
        const MYSTRING = await convertBase64(file)
        console.log(MYSTRING);
        setImage(MYSTRING);
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:8080/appuser/image', {
                image: MYSTRING,
                    username: user.username,
                    email: user.email,

            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
        } catch (e) {
            setError('error bij het ophalen data')
        }
    }

    useEffect(() => {
    async function getImage() {
        try {
            const token = localStorage.getItem('token');
            const result = await axios.get(`http://localhost:8080/appuser/${user.id}`, {
                username: user.username,
                image: user.image
            },{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            setImage1(result.data);

        } catch (e) {
            console.error(e);
        }
    }
        getImage();

    }, []);

    const convertBase64 = (file) => {

        return new Promise((resolve, reject) => {

            const fileReader= new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.onload = ( () => {

                resolve(fileReader.result);

            });
            fileReader.onerror = ((error) => {
                reject(error);
            });
        });
    }

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
            // console.log(result.data);
        } catch (error) {
            setError('Er is iets misgegaan bij het ophalen van de data')
        }
        toggleLoading(false);
    }
        getPersonalInfo();

    }, [updateInfo]);



    return (
        <>
            <Header />
                {!updateInfo ? (
                     <div className="personalinfo">
                        <PageHeader icon={USER} title="Jouw persoonlijke gegevens" />

                        {image1 &&
                            <div className="photo-border">
                                <img src={image1.image} alt="photo" className="photo"/>
                            </div>
                        }

                            <div className="file-upload">
                                <input
                                    className="fileinput"
                                    type="file"
                                    onChange={(e) => {
                                    uploadImage(e);
                        }}
         />
                            </div>

            <div className="userinfo">
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

                <div className="placebutton">
                <button
                    className="update-button-member"
                    onClick={() => setUpdateInfo(personalInfo)}
                    type="submit"
                    disabled={loading}
                >
                    {loading ? 'Laden...' : 'Update'}
                </button>
                </div>
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






