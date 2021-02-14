import React from 'react';
import './AdminPage.css'

import HeaderAdmin from "../../components/header/HeaderAdmin";
import PageHeader from "../../components/header/PageHeader";
import welcome from "../../assets/welcome.png"

function AdminPage() {

    return (
        <>
            <HeaderAdmin />
                <div className="adminhomepage">
                    <PageHeader icon={welcome} title="Welkom op de beheerderportaal!" />
                    <div className="columns">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa delectus dolorem explicabo itaque iusto laboriosam laudantium praesentium, ullam voluptatem? Consequatur deleniti ducimus enim ex facilis harum iste laboriosam laborum magni minus mollitia nemo neque nisi numquam pariatur quia quidem repudiandae, suscipit temporibus ullam vel veniam vero vitae voluptates voluptatibus. Exercitationem molestias nisi odio officiis qui quibusdam saepe veniam voluptatem! Dolores inventore iste iusto laboriosam numquam perferendis quo quod vero vitae voluptate. Adipisci aliquid autem consequatur culpa, eaque eum facere inventore itaque laborum magnam mollitia nesciunt nulla numquam rerum sint soluta totam voluptas? Aspernatur, eos eveniet hic ipsa nemo ullam voluptas.</p>
                    </div>
                </div>
          </>
    )
}

export default AdminPage;
