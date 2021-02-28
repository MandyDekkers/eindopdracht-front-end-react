import Header from "../../components/header/Header";
import welcome from "../../assets/welcome.png";
import PageHeader from "../../components/header/PageHeader";
import {useAuthState} from "../../context/AuthContext";
import "./ProfilePage.css"

function ProfilePage() {
    const { user } = useAuthState();

    return (
        <>
            <Header />
            <PageHeader icon={welcome} title=""/>
            <div className="memberinfo" >
                <h4>Gebruikersnaam: {user.username}</h4>
                <h4>E-mail: {user.email}</h4>
            </div>
            <p className="introtekst">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet aperiam consequuntur corporis cum cupiditate deleniti ducimus earum eos error esse, fuga fugiat in itaque iusto laudantium maxime minima mollitia necessitatibus neque obcaecati optio placeat recusandae rerum saepe sed similique soluta, tenetur veniam voluptas, voluptate voluptatibus voluptatum? Alias assumenda blanditiis dolor fugiat, itaque iure maxime modi molestias mollitia qui, rem sint sit ut. Alias commodi mollitia officia optio quasi! Asperiores aspernatur culpa dolore error, est excepturi minima modi nam placeat quo, sed sit ut? Accusantium asperiores assumenda consequuntur, deserunt dignissimos distinctio est eveniet excepturi expedita facere harum hic iusto laboriosam maxime necessitatibus quas quibusdam quisquam similique soluta unde? Amet consectetur culpa, cumque delectus est excepturi hic illum laudantium natus nihil nostrum perspiciatis quaerat qui quia ratione sequi sint velit. Adipisci amet commodi corporis cumque debitis delectus, eveniet ipsam iure omnis quasi similique tenetur velit voluptates! A accusamus accusantium adipisci aliquam delectus deserunt eaque error expedita explicabo fuga fugiat ipsa, ipsam nisi, nobis omnis quam quibusdam quo ratione repudiandae sapiente sequi vel velit vero! Atque autem impedit incidunt labore minus molestias mollitia nam, obcaecati quidem temporibus. Assumenda atque, aut beatae illum magni nemo provident quo rerum similique suscipit tenetur velit.</p>
        </>
    );
}

export default ProfilePage;
