import React, {useEffect, useState} from 'react';
import HeaderAdmin from "../../components/header/HeaderAdmin";
import NewLesson from "../../components/lesson/NewLesson";
import LessonAdmin from "../../components/lesson/LessonAdmin";
import axios from "axios";
import UpdateLesson from "../../components/lesson/UpdateLesson";
import Lesson from "./LessonsPage.css"
import PageHeader from "../../components/header/PageHeader";
import sport from "../../assets/sport.png";

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
            <PageHeader icon={sport} title="Lessenoverzicht" />
            <p className="intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam expedita fuga, fugit ratione sunt voluptatibus? Cumque doloribus expedita fuga quis repellendus repudiandae veniam voluptates. Blanditiis dolorem, doloremque dolores enim esse et impedit ipsa iusto laudantium magnam, maxime nam non, praesentium quasi sed similique sint ut vero. Accusamus ad aliquid corporis distinctio laborum quibusdam soluta vel veritatis? Assumenda deserunt, dolorem ea eum exercitationem, laudantium repellat saepe sequi sit totam unde veniam voluptatem. Adipisci, dicta illum labore perspiciatis qui quo vitae. Consequatur fugit, labore molestiae perspiciatis quas voluptas voluptate voluptatum. Blanditiis consequuntur facere impedit ipsam minima molestiae nisi nostrum odit quaerat veniam.</p>

            <div className="add-lesson">
                <NewLesson
                getAllLessons={getAllLessons}
                />
            </div>

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


