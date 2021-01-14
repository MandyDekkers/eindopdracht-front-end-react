import axios from "axios";
import { useForm } from 'react-hook-form';
import './LoginPage.css';
import { useHistory } from 'react-router-dom';
import './RegisterPage';
import {useState} from "react";

// loading: Rein video 15 dec 1:17:37
// if (state === 0){
//     return <h1>Loading...</h1> of een gifje bewegend
//     else {
//         return ()
//         reeds geschreven functie
//     }
// }
function LoginPage() {

    const {handleSubmit, register, errors} = useForm();
    const [sendSucces, setSendSucces] = useState(false);
    const [error, setError] = useState(false);

    const history = useHistory();

    function handleClick() {
        history.push("/register");
    }

    async function formSubmit(data) {
        setError(false);
        try {
            const response = await axios.post(`http://localhost:8080/appuser`, data);
            console.log(data);
            setSendSucces(true);
        } catch (e) {
            console.error(e);
            setError(true);
        }
    }

    // if(setSendSucces){
    //     go to profilepage...
    // }

    return (
        <>
            <div className="login-container">
                {/*<Userphoto className="user"/>*/}
                <form className="login-form" onSubmit={handleSubmit(formSubmit)}>
                    <label htmlFor="username-field">E-mailadres*:</label>
                    <input
                        name="username"
                        id="username-field"
                        type="email"
                        placeholder="your@e-mail.com"
                        ref={register({required: true})}
                    />
                    {errors.username && <p>Gebruikersnaam is verplicht</p>}

                    <label htmlFor="password-field">Wachtwoord*:</label>
                    <input
                        type="password"
                        name="password"
                        id="password-field"
                        ref={register(
                            {
                                required: {
                                    value: true,
                                    message: 'Dit veld mag niet leeg zijn',
                                },
                                minLength: {
                                    value: 8,
                                    message: 'Min. 8 karakters',
                                },
                            }
                        )}
                    />
                    {errors.password && errors.password.message}

                    <button className="login-button"
                            type="submit"
                        // disabled={errors}
                    >Inloggen
                    </button>

                    <p>Wachtwoord vergeten?</p>

                    <p className="new" onClick={handleClick}>Nieuw? Registreer je hier!</p>

                </form>
            </div>

        </>
    );
}

export default LoginPage;
