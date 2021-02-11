import React, {useEffect, useState} from 'react';
import HeaderAdmin from "../../components/header/HeaderAdmin";
import NewLesson from "../../components/lesson/NewLesson";
import LessonAdmin from "../../components/lesson/LessonAdmin";
import axios from "axios";
import UpdateLesson from "../../components/lesson/UpdateLesson";
import Lesson from "../Admin/Lesson.css"

function LessonsPage() {
    const [lessons, setLessons] = useState();
    const [updateLesson, setUpdateLesson] = useState(null);

    useEffect(() => {
        getAllLessons();
    }, []);

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
<>
    <HeaderAdmin />
    {!updateLesson ? (
        <div className="all-lessons">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, dolorum inventore quas reiciendis sunt veritatis? Accusantium aperiam atque, blanditiis facere harum illo ipsa minima minus officia perspiciatis sit vel voluptatibus?</p>
            <h2>Nieuwe les toevoegen:</h2>
            <NewLesson
                getAllLessons={getAllLessons}
            />
            <h1>Alle lessen:</h1>
            <div className="lessons">
                {lessons && lessons.map((lesson) => (
                    <LessonAdmin
                        key={lesson.id}
                        lesson={lesson}
                        getAllLessons={getAllLessons}
                        setUpdateLesson={setUpdateLesson}
                    />
                ))}
            </div>
        </div>
    ) : (
        <div>
            <UpdateLesson
                lesson={lessons[lessons.findIndex(lesson => lesson.id === updateLesson)]}
                setUpdateLesson={setUpdateLesson}
                getAllLessons={getAllLessons}

            />
        </div>
    )}
</>
    );
}

export default LessonsPage;


