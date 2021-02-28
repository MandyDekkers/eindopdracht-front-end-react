import React, {useEffect, useState} from 'react';
import axios from "axios";
import Header from "../../components/header/Header";
import './PersonalInfo.css';
import UpdateMember from "../../components/member/UpdateMember";
import USER from "../../assets/user.png"
import PageHeader from "../../components/header/PageHeader";
import {useAuthState} from "../../context/AuthContext";
import PasswordUpdate from "../../components/member/PasswordUpdate";

function PersonalinfoPage() {

    const [personalInfo, setPersonalInfo] = useState();
    const [updateInfo, setUpdateInfo] = useState(null);
    const [error, setError] = useState('');
    const [error1, setError1] = useState('');
    const [error2, setError2] = useState('');
    const [loading, toggleLoading] = useState(false);
    const { user } = useAuthState();
    const [image1, setImage1] = useState("");

    async function uploadImage(e) {
        toggleLoading(true);
        setError('');
        const file = e.target.files[0];
        const MYSTRING = await convertBase64(file)
        try {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:8080/appuser/image', {
                image: MYSTRING,
                username: user.username,
                email: user.email,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            getImage();
            console.log(MYSTRING);
        } catch (error) {
            setError('Uploaden afbeelding mislukt, probeer het opnieuw!')
        }
        toggleLoading(false);
    }

    useEffect(() => {
        getImage();
    }, []);

    async function getImage() {
        toggleLoading(true);
        setError1('');
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
        } catch (error) {
            console.error(error);
            setError1('Er is iets misgegaan bij het ophalen van de afbeelding')
        }
        toggleLoading(false);
    }

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
        setError2('');
        const token = localStorage.getItem('token');
        try {
            const result = await axios.get(`http://localhost:8080/appuser/${user.id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            setPersonalInfo(result.data);
        } catch (error) {
            setError2('Er is iets misgegaan bij het ophalen van de data')
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
                         {error && <p className="message-error">{error}</p>}
                         {loading && <p className="message-error">Aan het laden...</p>}
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
                         {error1 && <p className="message-error">{error1}</p>}
                         {loading && <p className="message-error">Aan het laden...</p>}
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
                    {error2 && <p className="message-error">{error2}</p>}
                    {loading && <p className="message-error">Aan het laden...</p>}
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
                    </div>
                    <h4>Wijzig jouw wachtwoord:</h4>
                     <PasswordUpdate/>
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






