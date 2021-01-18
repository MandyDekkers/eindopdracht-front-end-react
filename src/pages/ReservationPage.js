import React, {useEffect, useState} from 'react';
import Header from "../components/header/Header";
import axios from "axios";

function ReservationPage() {

    const [lessons, setLessons] = useState();

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
        <div >
        <Header />
        <h1>Reserveer een les:</h1>

        </div>
    );
}

export default ReservationPage;